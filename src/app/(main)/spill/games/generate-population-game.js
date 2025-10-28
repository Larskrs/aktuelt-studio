/**
 * generate-population-game.js
 * 
 * Scraper Worldometers (eller leser lokal fil)
 * og genererer world-population.json som følger GameConfig-formatet
 */

import fs from "fs";
import * as cheerio from "cheerio";
import axios from "axios";

const LOCAL_FILE = "./Population by Country (2025) - Worldometer.html";
const SOURCE_URL = "https://www.worldometers.info/world-population/population-by-country/";
const OUTPUT_FILE = "world-population.json";

/** Utility: Normalize string to make safe flag slug */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[’'().,]/g, "")
    .replace(/é/g, "e")
    .replace(/å/g, "a")
    .replace(/ø/g, "o")
    .replace(/æ/g, "ae");
}

async function main() {
  let html;
  if (fs.existsSync(LOCAL_FILE)) {
    console.log(`📄 Using local file: ${LOCAL_FILE}`);
    html = fs.readFileSync(LOCAL_FILE, "utf8");
  } else {
    console.log(`🌍 Fetching data from ${SOURCE_URL} ...`);
    const { data } = await axios.get(SOURCE_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (Node scraper)" },
    });
    html = data;
  }

  const $ = cheerio.load(html);
  const rows = $("table.datatable tbody tr");
  console.log(`🔍 Found ${rows.length} country rows`);

  const items = [];

  rows.each((_, el) => {
    const cols = $(el).find("td");
    if (cols.length < 3) return;

    const rank = parseInt($(cols[0]).text().trim(), 10);
    const title = $(cols[1]).text().trim();
    const value = parseInt($(cols[2]).text().replace(/,/g, ""), 10);
    const link = $(cols[1]).find("a").attr("href");

    if (!title || !value) return;

    const slug = slugify(title);
    const flagURL = `https://flagcdn.com/w320/${slug.slice(0, 2)}.png`;

    items.push({
      title,
      description: `Befolkningstall for ${title} i 2025 (anslått).`,
      value,
      image: flagURL,
      url: link ? `https://www.worldometers.info${link}` : SOURCE_URL + "#" + slug,
    });
  });

  // Sort by population descending
  items.sort((a, b) => b.value - a.value);

  /** Build full GameConfig JSON */
  const gameConfig = {
    title: "Verdens land – befolkning",
    instructions: "Hvilket land har flest innbyggere?",
    type: "higher-lower",
    fallbackImage: "/fallback-country.jpg",
    id: "land-befolkning-2025",
    suffix: "innbyggere",
    tagline: "Data fra Worldometers (2025)",
    items,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(gameConfig, null, 2));
  console.log(`✅ Saved ${items.length} countries → ${OUTPUT_FILE}`);
}

main().catch(console.error);

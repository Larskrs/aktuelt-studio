"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedNumber } from "../../_(main)/prosjekt/dbl/historie/_budget";
import confetti from "canvas-confetti";

// Import all configs

import byer from "./games/byer.json";
import fjelltopper from "./games/fjelltopper.json"
import hits from "./games/hits.json"
import world_population from "./games/world-population.json"
import episoder from "./games/episoder.json"

import cn from "../../../lib/className";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface GameItem {
  title: string;
  description: string;
  image?: string | null;
  value?: number;
}

interface GameConfig {
  title: string;
  instructions: string;
  type: "chronology" | "quiz" | "higher-lower";
  fallbackImage: string;
  items: GameItem[];
  id: string,
  suffix: string,
  tagline: string,
}

const GAME_LIST: GameConfig[] = [
  byer as GameConfig,
  fjelltopper as GameConfig,
  hits as GameConfig,
  world_population as GameConfig,
  episoder as GameConfig
];

type Feedback = null | "riktig" | "feil";

export default function Page () {
  return (
    <Suspense>
      <GamePage />
    </Suspense>
  )
}

function GamePage () {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedGame, setSelectedGame] = useState<GameConfig | null>(null);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [pair, setPair] = useState<[GameItem, GameItem] | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // ✅ Auto-select if ?game=ID is in URLc
  useEffect(() => {
    const gameId = searchParams.get("game");
    if (gameId) {
      const found = GAME_LIST.find((g) => g.id === gameId);
      if (found) setSelectedGame(found);
    }
  }, [searchParams]);

  // ✅ When selecting a game, also update the URL
  const handleSelectGame = (game: GameConfig) => {
    setSelectedGame(game);
    router.push(`?game=${game.id}`); // updates URL without reload
  };

  // ✅ When going back to menu, clear param
  const handleBack = () => {
    setSelectedGame(null);
    setScore(0);
    setPair(null);
    router.push(`/spill/`); // removes query
  };

  // Load highscore from localStorage
  useEffect(() => {
    if (!selectedGame) return;
  
    const key = `HL_${selectedGame.id}_highscore`;
    const saved = localStorage.getItem(key);
    setHighscore(saved ? Number(saved) : 0); // fallback = 0
    setScore(0); // start på nytt når man bytter spill
  }, [selectedGame]);

  const getRandomPair = (items: GameItem[]) => {
    if (items.length < 2) return;

    // pick first item randomly
    const idx1 = Math.floor(Math.random() * items.length);
    const firstItem = items[idx1];
  
    // filter out items with the same value as the first one
    const filteredItems = items.filter((item, i) => i !== idx1 && item.value !== firstItem.value);
    if (filteredItems.length === 0) return; // safety fallback
  
    // pick second item from filtered list
    const secondItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
  
    setPair([firstItem, secondItem]);
    setClickedIndex(null);
  };

  const [valueDiff, setValueDiff] = useState<number | null>(null);

  const checkAnswer = (selected: GameItem, other: GameItem, index: number) => {
    if (!selectedGame) return;
    setClickedIndex(index);

    let correct = false;

    if (selectedGame.type === "chronology") {
      correct = (selected.value ?? 0) < (other.value ?? 0);
    }

    if (selectedGame.type === "higher-lower") {
      correct = (selected.value ?? 0) > (other.value ?? 0);
    }

    setValueDiff(Math.abs((selected.value ?? 0) - (other.value ?? 0)));

    if (correct) {
      const newScore = score + 1;
      setScore(newScore);
      setFeedback("riktig");

      // Update highscore
      if (newScore > highscore) {
        setHighscore(newScore);
        localStorage.setItem(`HL_${selectedGame.id}_highscore`, newScore.toString());
      }

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FF4500", "#00BFFF", "#32CD32"],
      });
    } else {
      setFeedback("feil");
      setScore(0);
    }

    setTimeout(() => {
      setFeedback(null);
      setValueDiff(null);
      getRandomPair(selectedGame.items);
    }, 2500);
  };

  useEffect(() => {
    if (selectedGame) getRandomPair(selectedGame.items);
  }, [selectedGame]);

  if (!selectedGame) {
  return (
    <Suspense fallback={<div>Laster inn spill</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400 drop-shadow-lg">Velg et spill</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {GAME_LIST.map((config) => {
            // trekk 3 tilfeldige items
            const previewItems = [...config.items]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
            
            return (
              <motion.button
              key={config.id}
              onClick={() => handleSelectGame(config)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 relative cursor-pointer rounded-2xl shadow-lg bg-zinc-950 border-1 border-zinc-800 hover:bg-zinc-900 transition flex flex-col items-center"
              >
                <h2 className="text-2xl font-bold text-yellow-300 mb-2">{config.title}</h2>
                <p className="text-gray-300 mb-4">{config.instructions}</p>
  
                {/* preview grid */}
                <div className="relative bottom-0 overflow-hidden rounded-lg gap-1 flex flex-row h-30 w-full">
                  {previewItems.map((item, i) => (
                    <div
                    key={i}
                    className="relative w-full aspect-square overflow-hidden bg-gray-800"
                    >
                      <img
                        src={item.image || config.fallbackImage}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}

  if (!pair) return null;

  const { title, instructions, fallbackImage, tagline, suffix } = selectedGame;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 p-4">
      <TitleIntro title={title} instructions={instructions} triggerKey={title} />
      
      <div className="w-full h-fit container flex flex-col items-center justify-center">
        <div className="z-2 h-fit">
          <motion.div
            key={title} // re-trigger animation when new game is selected
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
            className="relative bg-black/75 border-2 border-amber-400 rounded-2xl px-6 py-4 h-fit text-4xl font-bold mb-32 text-yellow-400 drop-shadow-lg"
          >
            <p>{title}</p>
            <p className="text-lg font-medium text-amber-100">{instructions}</p>
            <p className="text-amber-400 text-2xl absolute -top-10 right-1/2 translate-x-1/2 rounded-2xl">{tagline}</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div
                key={feedback}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`fixed z-10 flex flex-col items-center justify-center inset-0 h-screen w-screen backdrop-blur-md mt-4 text-2xl font-bold ${
                  feedback === "riktig" ? "text-green-400" : "text-red-500"
                }`}
              >
                {feedback === "riktig" ? "🎉 Riktig!" : "❌ Feil!"}
                {pair && valueDiff !== null && (
                  <div className="mt-4 text-lg text-gray-200 flex flex-col items-center gap-2">
                    <div className="flex gap-2 items-center justify-center">
                      {pair[0].title}:{" "}
                      <p className={"text-3xl scale-75"} >{pair[0].value ?? 0}</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      {pair[1].title}:{" "}
                      <p className={"text-3xl scale-75"} >{pair[1].value ?? 0}</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      Forskjell:
                      {" "}
                      {valueDiff}
                      {suffix}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="fixed inset-0 h-screen w-screen">
  <AnimatePresence mode="wait">
    {pair.map((p, i) => {
      const isClicked = clickedIndex === i;
      const isOther = clickedIndex !== null && clickedIndex !== i;
      const bgImage = p.image || fallbackImage;

      return (
        <motion.button
          key={p.title + i}
          initial={{
            opacity: 0,
            left: i === 0 ? "0%" : "50%",
            width: "50%",
            x: i === 0 ? "-100%" : "100%", // slide in from sides
          }}
          animate={{
            left: isClicked ? "0%" : i === 0 ? "0%" : "50%",
            width: isClicked ? "100%" : "50%",
            x: 0, // reset to center after entering
            background: feedback !== null ? (feedback == "feil" ? "red" : "green") : "black",
            opacity: isOther ? 0 : 1,
          }}
          exit={{
            opacity: 0,
            x: feedback === "riktig" ? (i === 0 ? "-100%" : "100%") : "0%", // exit out to side
            y: feedback === "feil" ? "100%" : "0%", // exit out to side
          }}
          transition={{
            ease: "anticipate",
            duration: 0.5,
            delay: ( clickedIndex === null && i === 1) ? 0.5 : 0
          }}
          className={cn(
            "absolute top-0 bottom-0 group h-screen border-8 border-black overflow-hidden shadow-lg cursor-pointer"
          )}
          onClick={() => checkAnswer(p, pair[1 - i], i)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col inset-0 absolute z-1">
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute flex flex-col items-center justify-center inset-0 p-4 text-left"
            >
              <h1 className="font-bold text-2xl xl:text-4xl 2xl:text-5xl">{p.title}</h1>
              <p className="text-lg text-gray-200">{p.description}</p>
            </motion.div>
          </div>
          <div
            className="inset-0 absolute z-0 opacity-25 group-hover:opacity-100 transition-opacity duration-250"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: feedback !== null ? 0.75 : ""
            }}
          />
        </motion.button>
      );
    })}
  </AnimatePresence>
</div>



        {/* Bottom Score Panel */}
        <div className="fixed bottom-4 z-20 flex flex-col items-center justify-center space-y-2">
          <div className="px-6 py-2 flex-row gap-16 bg-black bg-opacity-80 rounded-full text-xl text-yellow-300 shadow-lg flex items-center">
            <div className="flex items-center">
              <span className="text-lg mr-2">Score:</span> <AnimatedNumber className="text-xl text-amber-400" target={score*1000} />
            </div>
            <div className="text-sm text-gray-400">Highscore: {highscore*1000}</div>
          </div>

          <button
            onClick={handleBack}
            className="mt-2 px-4 py-2 flex gap-2 cursor-pointer bg-black rounded-lg hover:bg-zinc-950"
          >
            <ArrowLeft />Tilbake til meny
          </button>
        </div>
      </div>
    </div>
  );
}


function TitleIntro({ title, instructions, triggerKey }: { title: string; instructions?: string, triggerKey: string }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 2000); // total varighet
    return () => clearTimeout(timer);
  }, [triggerKey]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={triggerKey}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.h1
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={{ scale: [5, 1, 1.1], opacity: [0, 1, 0.9], y: [ -200, 0, -0 ] }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{
              duration: 1,
              ease: "circInOut",
            }}
            className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg"
          >
            {title}
            <p className="mb-6 text-lg font-medium text-amber-100">{instructions}</p>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
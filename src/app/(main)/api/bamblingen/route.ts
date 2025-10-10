export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response(
      "❌ Missing 'url' query parameter.\n\nExample:\n/api/test-fetch?url=http://127.0.0.1:3000/api/v1/files?fileId=test",
      { status: 400 }
    );
  }

  try {
    const res = await fetch(target);
    const text = await res.text();
    return new Response(`✅ Local fetch success from ${target}\n\n${text}`, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    return new Response(
      `❌ Local fetch failed for ${target}\n\n${err.message}`,
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
}

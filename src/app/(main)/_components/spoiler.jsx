"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Spoiler({ children }) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed)
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all`}
    >
        <div className="flex flex-col items-center text-center gap-3">
          <EyeOff size={36} className="text-rose-500" />
          <h2 className="text-xl font-semibold">Innhold skjult</h2>
          <p className="text-sm text-white/70 max-w-md">
            Mediet under inneholder deler fra filmen, for å beskytte seere er den skjult. Klikk for å vise.
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="cursor-pointer px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 transition"
          >
            Vis innhold
          </button>
        </div>
    </div>
  );
  else return <React.Fragment>{children}</React.Fragment>
}

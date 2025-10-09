import React, { useEffect, useState } from "react";

// AnimatedNumberScroller.jsx
export default function AnimatedNumberScroller({ value, duration = 0.5, minLength = 4 }) {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    // Convert number to string and pad with leading zeros
    const str = String(value).padStart(minLength, "0");
    setDigits(str.split(""));
  }, [value, minLength]);

  return (
    <div className="flex space-x-1">
      {digits.map((digit, i) => (
        <DigitScroller key={i} digit={digit} duration={duration} />
      ))}
    </div>
  );
}

function DigitScroller({ digit, duration }) {
  const digitArray = Array.from({ length: 10 }, (_, i) => i);
  const offset = -parseInt(digit, 10) * 1.2; // multiplier matches line height

  return (
    <div
      className="relative h-[1.2em] w-[1ch] overflow-hidden text-center"
      style={{ lineHeight: "1.2em" }}
    >
      <div
        style={{
          transform: `translateY(${offset}em)`,
          transition: `transform ${duration}s ease-in-out`,
        }}
      >
        {digitArray.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
    </div>
  );
}

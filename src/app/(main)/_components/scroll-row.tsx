"use client"

import * as React from "react";
import { ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import cn from "../../../lib/className";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Check overflow and update scroll position state
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function updateScrollState() {
      if (!el) return;
      setIsOverflowing(el.scrollWidth > el.clientWidth);
      setIsAtStart(el.scrollLeft === 0);
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }

    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    el.addEventListener("scroll", updateScrollState);

    return () => {
      window.removeEventListener("resize", updateScrollState);
      el.removeEventListener("scroll", updateScrollState);
    };
  }, [children]);

  const scroll = (dir: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = Array.from(container.children) as HTMLElement[];
    const { left: cLeft, right: cRight } = container.getBoundingClientRect();

    const target =
      dir === "right"
        ? childElements.find((child) => child.getBoundingClientRect().right > cRight)
        : [...childElements]
            .reverse()
            .find((child) => child.getBoundingClientRect().left < cLeft);

    if (target) {
      const { left, right } = target.getBoundingClientRect();
      const delta = dir === "right" ? left - cLeft : right - cRight;
      container.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  const Button = ({ dir }: { dir: "left" | "right" }) => {
    const disabled = dir === "left" ? isAtStart : isAtEnd;

    return (
      <div
        onClick={() => !disabled && scroll(dir)}
        aria-label={`Scroll ${dir}`}
        className={cn(
          "hidden md:flex absolute top-1/2 -translate-y-1/2 h-full flex-col items-center justify-center z-10 p-4 cursor-pointer group",
          dir === "left" ? "left-0" : "right-0",
          disabled && "opacity-0 cursor-not-allowed pointer-events-none",
          dir === "left"
            ? "bg-gradient-to-r from-black/80 to-transparent"
            : "bg-gradient-to-l from-black/80 to-transparent"
        )}
      >
        <motion.button
          className="z-10 w-12 h-12 group-hover:scale-110 rounded-md flex items-center justify-center cursor-pointer duration-250"
          whileHover={!disabled ? { scale: 1.125 } : {}}
          whileTap={!disabled ? { scale: 0.9 } : {}}
          transition={{ duration: 0.125, ease: "easeInOut" }}
        >
          <div className="scale-240">
            {dir === "left" ? <ChevronLeft /> : <ChevronRight />}
          </div>
        </motion.button>
      </div>
    );
  };

  return (
    <div className={cn("relative w-full", className)}>
      {isOverflowing && <Button dir="left" />}
      {isOverflowing && <Button dir="right" />}
      <div
        ref={containerRef}
        className={cn(
          "flex flex-row gap-4 pb-2 overflow-x-auto thin-scrollbar scroll-snap-x scroll-snap-mandatory",
          className
        )}
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </div>
    </div>
  );
}

"use client";
import React, { ReactNode } from "react";
import cn from "../../../lib/className";

export default function SplitElement({
  title,
  description,
  children,
  direction = "right",
  className,
}: {
  title: string,
  description: string,
  children: ReactNode,
  direction: "left" | "right",
  className: string,

}) {
  return (
    <div
      className={cn(
        "z-10 my-32 relative px-8 container max-w-175 lg:max-w-250 mx-auto sm:gap-4 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-rows-1",
        direction == "left" && "sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1",
        className
      )}
    >
      {/* Media Section */}
      <div className="relative flex flex-col items-center rounded-2xl overflow-hidden border border-white/25">
        {children}
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl lg:text-4xl text-center">{title}</h2>
        {description.split("\n").map((line, index) => (
          <p
            key={index}
            className={cn(
              "text-lg lg:text-xl text-center px-4",
              index > 0 && "mt-2"
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

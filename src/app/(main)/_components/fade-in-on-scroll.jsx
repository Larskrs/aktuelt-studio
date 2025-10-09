"use client";
import { useRef, useState, useEffect } from "react";
import cn from "../../../lib/className"

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 1,
  yOffset = 0,
  className,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-in-out z-10",
        className,
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 translate-y-[${yOffset}px]`,
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

"use client"
import FlowNumber from "@/components/common/FlowNumberDigit";
import InfiniteFlowNumber from "@/components/common/InfiniteFlowNumber";

import styles from "./budget.module.css"
import { useEffect, useState } from "react";
import CountdownTimer from "@/components/common/CountdownTimer";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function AnimatedNumber({ target = 20000, duration = 10000 }) {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      let start;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1); // Normalize progress (0 to 1)
        setValue(Math.floor(target * easeOutCubic(progress)));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [target, duration]);
  
    return <InfiniteFlowNumber number={value} />;
  }
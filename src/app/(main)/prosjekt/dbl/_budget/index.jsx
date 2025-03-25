"use client"
import FlowNumber from "@/components/common/FlowNumberDigit";
import InfiniteFlowNumber from "@/components/common/InfiniteFlowNumber";

import styles from "./budget.module.css"
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "@/components/common/CountdownTimer";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function AnimatedNumber({ target = 20000, duration = 5000 }) {

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
  
    return <InfiniteFlowNumber className={styles.counter} number={value} />;
  }

export default function Budget ({amount}) {
  
    const ref = useRef()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setVisible(entry.isIntersecting)
          },
      {   
          root: null,
          rootMargin: "0px",
          threshold: 0.1, 
      } // Adjust threshold as needed
      );
  
      const el = ref.current;
      if (el) observer.observe(el);
  
      return () => {
          if (el) observer.unobserve(el);
      };
    }, [visible]);
  
    return (
      <MaxWidthWrapper className={styles.limiter}>
          <h1>Kostnadd</h1>
        <div className={styles.c} ref={ref}>
          <span className={styles.number}>
            {<AnimatedNumber duration={2000} target={visible ? amount : 0} />}
            <h3>NOK</h3>
          </span>
        </div>
      </MaxWidthWrapper>
    )
}
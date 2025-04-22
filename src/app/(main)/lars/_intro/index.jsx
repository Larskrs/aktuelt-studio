import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "./style.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero ({}) {
    
    const ref = useRef()
    const [scrollTop, setScrollTop] = useState(0)
    const [height, setHeight] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    useEffect(() => {
        const onScroll = () => {
          if (!ref.current) return;
      
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const imageHeight = ref.current.offsetHeight;
          const scrolled = (winScroll / imageHeight) * 100;
          
          setProgress(scrolled);
        };
      
        window.addEventListener("scroll", onScroll);
      
        return () => window.removeEventListener("scroll", onScroll);
      }, [ref]);

    return (
        <div className={styles.c} ref={ref}>
            <div className={styles.hero}>
                <div className={styles.topDrawer} style={{height:    `${progress/1.75}%`}}></div>
                <div className={styles.bottomDrawer} style={{height: `${progress/1.75}%`}}></div>

                <VideoPlayer progress={false} progressBar loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"} />
                <div className={styles.center} >
                    <Image alt="aktuelt-studio-logo" className={styles.logo} src={"/branding/logo/aktueltstudio.png"} width={720} height={256} />
                </div>
            </div>
        </div>
    );
}
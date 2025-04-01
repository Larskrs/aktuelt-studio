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
        const onScroll = e => {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            setProgress(scrolled);
          
        //   setScrollTop(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (
        <div className={styles.c} ref={ref}>
            <div className={styles.hero}>
                <div className={styles.topDrawer} style={{height:    `${progress}%`}}></div>
                <div className={styles.bottomDrawer} style={{height: `${progress}%`}}></div>

                <VideoPlayer style={{scale: ((progress*1.25/100)+1)}} progress={false} progressBar loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"} />
                <div className={styles.center} style={{scale: `${(progress+100)+1}%`}}>
                    <Image alt="aktuelt-studio-logo" className={styles.logo} src={"/branding/logo/aktueltstudio.png"} width={720} height={256} />
                </div>
            </div>
        </div>
    );
}
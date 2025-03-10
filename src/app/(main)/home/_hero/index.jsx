import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "./style.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero ({}) {

    const videoRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        
        setDuration(videoRef.current.duration)
        const interval = setInterval(() => {
            setCurrentTime(videoRef.current.currentTime)
            setPlaying(!videoRef.current.paused)
        }, 250);       
        return () => clearInterval(interval);
    }, [videoRef, currentTime, duration])

    return (
        <div className={styles.c}>
            <VideoPlayer videoRef={videoRef} loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250207-01312bee5f27df78"} />
            <div className={styles.center}>
                <Image className={styles.logo} src={"/branding/logo/aktueltstudio.png"} width={720} height={256} />
            </div>
            {videoRef?.current && <span className={styles.progress} style={{
                width: currentTime / duration * videoRef.current.clientWidth,
                opacity: playing ? 1 : 0
                }}></span>}
        </div>
    );
}
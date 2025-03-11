"use client"
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import styles from "./style.module.css"
import classNames from 'classnames';

export default function VideoPlayer({ progressBar, poster, src, className, ...props }) {
    const videoRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            },
          { threshold: 0.125 } // Adjust threshold as needed
        );
    
        const videoElement = videoRef.current;
        if (videoElement) observer.observe(videoElement);
    
        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, []);

    useEffect(() => {
        
        setDuration(videoRef.current.duration)
        const interval = setInterval(() => {
            setCurrentTime(videoRef.current.currentTime)
            setPlaying(!videoRef.current.paused)
        }, 250);       
        return () => clearInterval(interval);
    }, [videoRef, currentTime, duration])

    useEffect(() => {
        if (videoRef.current) {
            if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                // Safari støtter HLS direkte
                videoRef.current.src = src;
            } else if (Hls.isSupported()) {
                // For andre nettlesere, bruk hls.js
                const hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(videoRef.current);
            }
        }
    }, [src]);

    return <div className={classNames(className, styles.v, playing ? styles.playing : styles.paused)}>
            <video {...props} poster={poster} ref={videoRef} />;
            {videoRef?.current && <span className={styles.progress} style={{
                width: currentTime / duration * videoRef.current.clientWidth,
                opacity: playing ? 1 : 0
                }}></span>}
        </div>
}
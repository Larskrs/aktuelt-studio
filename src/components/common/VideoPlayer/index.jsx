"use client"
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import styles from "./style.module.css"
import classNames from 'classnames';

export default function VideoPlayer({ clickToFullScreen=true, forceMuted, progressBar, poster, src, className, ...props }) {
    const videoRef = useRef(null)
    const containerRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [visible, setVisible] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    videoRef.current.play();
                } else {
                    setVisible(false)
                    videoRef.current.pause();
                }
            },
            {   
                root: null,
                rootMargin: "0px",
                threshold: 0.1, 
            } // Adjust threshold as needed
        );
    
        const videoElement = videoRef.current;
        if (videoElement) observer.observe(videoElement);
    
        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, []);

    useEffect(() => {
        if (loaded) console.log("We loaded vidoe...")
    }, [loaded])

    const openFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) { 
                // Safari
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { 
                // IE/Edge
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement !== null);
            videoRef.current.play()
            videoRef.current.muted = !isFullscreen
        };
    
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari
        document.addEventListener("msfullscreenchange", handleFullscreenChange); // Edge
    
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
            document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
            document.removeEventListener("msfullscreenchange", handleFullscreenChange);
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
        if (loaded) { return; }
        if (!visible) { return; }

        if (videoRef.current) {
            if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                // Safari støtter HLS direkte
                videoRef.current.src = src;
                setLoaded(true)
            } else if (Hls.isSupported()) {
                // For andre nettlesere, bruk hls.js
                const hls = new Hls();
                hls.loadSource(src);
                hls.attachMedia(videoRef.current);
                setLoaded(true)
            }
        }
    }, [src, visible]);

    return <div
        ref={containerRef}
        onClick={() => {openFullScreen()}}
        className={classNames(
            className,
            styles.v, playing ? styles.playing : styles.paused,
        )}
        >
            <video {...props} poster={poster} ref={videoRef} className={isFullscreen ? styles.fullscreen : "" } />;
            {videoRef?.current && <span className={styles.progress} style={{
                width: currentTime / duration * videoRef.current.clientWidth,
                opacity: playing ? 1 : 0,
                }}></span>}
        </div>
}
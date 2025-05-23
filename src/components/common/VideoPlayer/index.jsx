"use client"
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import styles from "./style.module.css"
import classNames from 'classnames';
import Progress from '../Progress';
import Image from 'next/image';

export default function VideoPlayer({style, toolbar=false, progress=true, clickToFullScreen=true, forceMuted, progressBar, poster, src, className, ...props }) {
    const videoRef = useRef(null)
    const containerRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true) // Default muted
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const LoadVideo = (src) => {

        if (isLoaded) { return; }

        if (videoRef.current) {
            setIsLoaded(true)
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
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            },
            {   
                root: null,
                rootMargin: "0px",
                threshold: 0.5, 
            } // Adjust threshold as needed
        )
    
        const videoElement = videoRef.current;
        if (videoElement) observer.observe(videoElement);
    
        return () => {
            if (videoElement) observer.unobserve(videoElement);
        }
    }, [])

    const openFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitEnterFullScreen) { 
                // Safari
                videoRef.current.webkitEnterFullScreen();
            } else if (videoRef.current.msRequestFullscreen) { 
                // IE/Edge
                videoRef.current.msRequestFullscreen();
            }
        }
    };
    
    const handleToggleAudio = () => {
        const b = !videoRef.current.muted
        videoRef.current.muted = b
        setMuted(b)
    }

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement !== null);
            videoRef.current.play()
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
            setMuted(videoRef.current.muted)
        }, 250);       
        return () => clearInterval(interval);

    }, [videoRef, currentTime, duration])

    useEffect(() => {
        LoadVideo(src)
    }, [src])

    return <div
        ref={containerRef}
        // onClick={() => {openFullScreen()}}
        className={classNames(
            className,
            styles.v, playing ? styles.playing : styles.paused,
        )}
        >   
            {toolbar && <div className={styles.toolbar}>
                {/* // MUTE */}
                <div className={styles.audioToggle} onClick={handleToggleAudio}>
                {   muted
                    ? <Image draggable={false} alt='mute-button' width={32} height={32} src={"/icons/ui/Muted.svg"}/>
                    : <Image draggable={false} alt='mute-button' width={32} height={32} src={"/icons/ui/Unmuted.svg"}/>
                }
                </div>
                {/* // FULLSCREEN */}
                <div className={styles.audioToggle} onClick={openFullScreen}>
                    <Image draggable={false} alt='mute-button' width={32} height={32} src={"/icons/ui/Fullscreen.svg"}/>
                </div>
            </div> }
            <video style={style} {...props} poster={poster} ref={videoRef} className={isFullscreen ? styles.fullscreen : "" } />
            {progress && <Progress barClass={styles.progress} containerClass={styles.progressBar} max={duration} value={currentTime} />}
        </div>
}
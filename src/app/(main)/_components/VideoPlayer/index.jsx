"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipForward,
  SkipBack,
} from "lucide-react";
import cn from "../../../../lib/className";

export default function VideoPlayer({
  style,
  autoPlay = false,
  fullScreen = false,
  forceMuted,
  poster,
  controls,
  progressBar = true,
  captions = [], // JSON [{ start, end, text, backgroundColor? }]
  src,
  className,
  ...props
}) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [activeCaption, setActiveCaption] = useState(null);

  const loadVideo = (src) => {
    if (isLoaded) return;
    if (videoRef.current) {
      setIsLoaded(true);
      if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = src;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      }
    }
  };

  // Keep video state in sync
  useEffect(() => {
    const interval = setInterval(() => {
      const ct = videoRef.current.currentTime || 0;
      setCurrentTime(ct);
      setDuration(videoRef.current.duration || 0);
      setPlaying(!videoRef.current.paused);
      setMuted(videoRef.current.muted);

      // Update captions
      const cap = captions.find(c => ct >= c.start && ct <= c.end);
      setActiveCaption(cap || null);
    }, 100);
    return () => clearInterval(interval);
  }, [captions]);

  useEffect(() => {
    loadVideo(src);
    if (autoPlay) {
        videoRef.current.play()
    }
  }, [src]);

  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const changeVolume = (e) => {
    const v = parseFloat(e.target.value);
    videoRef.current.volume = v;
    setVolume(v);
    if (v > 0) {
      videoRef.current.muted = false;
      setMuted(false);
    }
  };

  const skip = (seconds) => {
    videoRef.current.currentTime = Math.min(
      Math.max(videoRef.current.currentTime + seconds, 0),
      duration
    );
  };

  const enterFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleSeek = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const targetTime = percent * duration;
    videoRef.current.currentTime = targetTime;
  };

  useEffect(() => {
  if (!videoRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const isMostlyVisible = entry.intersectionRatio >= 0.5;

      if (!isMostlyVisible && !videoRef.current.paused) {
        // Pause when leaving viewport
        videoRef.current.pause();
      } 
      else if (isMostlyVisible && autoPlay) {
        // Resume only if autoplay enabled
        videoRef.current.play();
      }
    },
    { threshold: Array.from({ length: 11 }, (_, i) => i / 10) } // 0, 0.1, ..., 1
  );

  observer.observe(videoRef.current);

  return () => observer.disconnect();
}, [autoPlay]);

//   // Keyboard controls
//   useEffect(() => {
//     const keyHandler = (e) => {
//       if (e.code === "Space") {
//         e.preventDefault();
//         togglePlay();
//       } else if (e.code === "ArrowRight") {
//         skip(5);
//       } else if (e.code === "ArrowLeft") {
//         skip(-5);
//       } else if (e.code === "KeyM") {
//         toggleMute();
//       }
//     };
//     window.addEventListener("keydown", keyHandler);
//     return () => window.removeEventListener("keydown", keyHandler);
//   });

  return (
    <div
      className={cn("relative w-full h-full bg-black", className)}
      style={style}
    >
      {/* Video */}
      <motion.video
        ref={videoRef}
        onClick={togglePlay}
        poster={poster}
        muted={forceMuted ?? muted}
        className={cn(
          "w-full h-full object-cover cursor-pointer",
          !playing && "brightness-75"
        )}
        {...props}
      />

      {/* Animated captions */}
      <AnimatePresence>
        {activeCaption && (
          <motion.div
            key={activeCaption.text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(controls ? "bottom-18" : "bottom-10", "absolute w-full flex justify-start px-3 z-20")}
          >
            <span
              className="px-4 py-2 rounded-lg text-white text-md lg:text-2xl font-medium"
              style={{
                backgroundColor:
                  activeCaption.backgroundColor || "rgba(0,0,0,0.8)",
              }}
            >
              {activeCaption.text}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play button animation */}
      <AnimatePresence>
        {!playing && !autoPlay && (
          <motion.button
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="bg-black/50 rounded-full p-4">
              <Play size={64} className="text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 pt-4 pb-0 flex flex-col gap-2 z-20"
        style={{ paddingBottom: "1rem" }}
      >
        {/* Progress bar with bigger click zone */}
        {progressBar && <div
          ref={progressRef}
          className="relative w-full h-6 flex items-center cursor-pointer"
          onClick={handleSeek}
        >
          <div className="w-full h-2 bg-white/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-white rounded"
              style={{
                width: `${(currentTime / duration) * 100 || 0}%`,
              }}
              transition={{ type: "tween", duration: 0.1 }}
            />
          </div>
        </div> }

        {controls && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="text-white">
                {playing ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button onClick={() => skip(-10)} className="text-white">
                <SkipBack size={20} />
              </button>
              <button onClick={() => skip(10)} className="text-white">
                <SkipForward size={20} />
              </button>

              <button onClick={toggleMute} className="text-white">
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={changeVolume}
                className="w-20"
              />
            </div>

            <button onClick={enterFullScreen} className="text-white">
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

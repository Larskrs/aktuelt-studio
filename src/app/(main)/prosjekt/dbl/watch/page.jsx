"use client"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

import styles from "./page.module.css"
import Image from "next/image";
import VideoPlayer from "@/components/common/VideoPlayer";
import { useState } from "react";
import Link from "next/link";
import SimpleVideoPlayer from "@/components/common/VideoPlayer/simple";

export default function Watch ({}) {

    const [useVideoPlayer, setUseVideoPlayer] = useState(false)

    const hue = 360

    return (
        <div className={styles.c} style={{ "--hue": hue }}>
            <style global jsx>{`
                body {
                    --hue: ${hue}
                }
            `}</style>
            
            <VideoPlayer controls fullScreen className={styles.video} progress={false} autoPlay alt="player" src={"https://bamblingen.no/api/v1/files/video?v=20250212-ebe60e6295425917"} />

        </div>
    )
}
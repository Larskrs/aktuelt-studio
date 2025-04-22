import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "./style.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypingEffect from "@/components/common/TypingEffect";

export default function Hero ({}) {
    
    return (
        <div className={styles.c}>
            <div className={styles.hero}>
                <VideoPlayer progressBar loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250422-4cdea0b2888991c1"} />
                <div className={styles.center}>
                    <div className={styles.logo}>
                        <h1>
                            Lars Kristian Småge Syvertsen
                        </h1>
                        {/* <TypingEffect typeStyle={{color: "var(--primary-500)"}} textStyle={{fontSize: "0.75em", fontFamily: "var(--font-inter)"}} prefix="På tide å skape " prompts={["film", "tv", "kunst"]} /> */}
                    {/* <Image alt="aktuelt-studio-logo" className={styles.logo} src={"/branding/logo/aktueltstudio.png"} width={720} height={256} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
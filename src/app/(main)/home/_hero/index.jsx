import VideoPlayer from "@/components/common/VideoPlayer";
import styles from "./style.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero ({}) {

    return (
        <div className={styles.c}>
            <VideoPlayer progressBar loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250207-01312bee5f27df78"} />
            <div className={styles.center}>
                <Image className={styles.logo} src={"/branding/logo/aktueltstudio.png"} width={720} height={256} />
            </div>
        </div>
    );
}
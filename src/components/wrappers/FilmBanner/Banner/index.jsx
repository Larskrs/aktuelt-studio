"use client"
import Image from "next/image";
import styles from "./style.module.css"
import Link from "next/link";
import { useRef, useState } from "react";
import LocalImage from "@/components/common/LocalImage";

export default function Banner ({image="/dbl/DBL_PLAKAT_WIDE", alt="banner", video="", url="/prosjekt/dbl"}) {

    const previewRef = useRef(null)

    const StartPreview = () => {
        previewRef.current.play()
    }
    const PausePreview = () => {
        previewRef.current.pause()
    }

    return (
        <Link href={url} className={styles.banner} onMouseEnter={StartPreview} onMouseLeave={PausePreview}>
            {image && <LocalImage className={styles.fill} alt={alt + " poster"} width={1920} height={1080} src={image} />}
            <video muted ref={previewRef} alt={alt + " preview"} loop playsInline src={video} />
        </Link>
    );
}
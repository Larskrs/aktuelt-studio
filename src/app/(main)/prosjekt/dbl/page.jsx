"use client"

import Image from "next/image";
import styles from "./style.module.css"
import LocalImage from "@/components/common/LocalImage";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import FadeOnScroll from "@/components/wrappers/FadeOnScroll";
import Split from "../../home/_split"
import Single from "../../home/_single";
import BannerSection from "../../home/_banner_"

export default function DBL_PAGE () {
    return (
        <div className={styles.c}>
            {/* <LocalImage className={styles.background} quality={100} width={1920} height={1080} src={"/dbl/DBL_PLAKAT_16.9.jpg"} /> */}

            <MaxWidthWrapper className={styles.g}>
                <FadeOnScroll>
                    <Single
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"
                        }}
                        >
                        <h4>2 år, 2 filmer, 1 drøm</h4>
                        <p>I 2023, starten av VGS, og før Aktuelt Studio i det heletatt var en ide, begynte produksjonen av DBL.</p>
                    </Single>
                </FadeOnScroll>
                <FadeOnScroll>
                    <BannerSection hue={0} image="">
                        <h1>Vårt arbeid</h1>
                        <p>Vi skaper unike filmproduksjoner, reklamefilmer og musikkvideoer skreddersydd for dine behov.</p>
                    </BannerSection>
                </FadeOnScroll>
                <FadeOnScroll>
                    <Split
                        direction="ltr"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"
                        }}
                        >
                        <h4>Så ekte som mulig</h4>
                        <p>For å kunne skape den mest troverdige visuelle fortellingen, har vi benyttet oss av kunn 1 type spesialeffekt: røyk. Alle andre effekt som du ser er fanget i kameraet, og redigert bare med tanke på farge og komposisjon.</p>
                    </Split>
                </FadeOnScroll>
                <FadeOnScroll>
                    <Single
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250206-dca1812efa4ff107"
                        }}
                        >
                        <h4>En artig produksjon</h4>
                        <p>Til tross for den hardbeinte arbeidssprosessen, så har vi virkelig hatt det utrolig morro. </p>
                    </Single>
                </FadeOnScroll>
                <FadeOnScroll>
                    <Split
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250206-dca1812efa4ff107"
                        }}
                        >
                        <h4>En lang kjøretur</h4>
                        <p>Selv om filmen bare er 15 min, har vi faktisk 500 GB med opptak og 9 forskjellige filmsteder.</p>
                    </Split>
                </FadeOnScroll>
            </MaxWidthWrapper>
        </div>
    );
}
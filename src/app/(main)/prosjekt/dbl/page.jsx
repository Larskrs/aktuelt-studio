"use client"

import Image from "next/image";
import styles from "./style.module.css"
import LocalImage from "@/components/common/LocalImage";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import FadeOnScroll from "@/components/wrappers/FadeOnScroll";
import Split from "../../home/_split"
import Single from "../../home/_single";
import BannerSection from "../../home/_banner_"
import Margin from "@/components/common/Margin";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function DBL_PAGE () {
    return (
        <div className={styles.c}>
            {/* <LocalImage className={styles.background} quality={100} width={1920} height={1080} src={"/dbl/DBL_PLAKAT_16.9.jpg"} /> */}

            <MaxWidthWrapper className={styles.g}>

                <h1 className={styles.title}>DBL, Fra drøm til skjerm</h1>

                    {/* <Single
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250324-98fdc0ec03eac1ee"
                        }}
                        >
                        
                    </Single> */}

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

                {/* <FadeOnScroll>
                    <BannerSection hue={0} image="">
                        <h1>Kostnadd</h1>
                        <p>Etter samling av rekvisitter på rundt 2 år, har kostnaddene virkelig økt. Men heldigvis har vi spart mye ved å kjøpe brukt.</p>
                    </BannerSection>
                </FadeOnScroll> */}

                    <Single
                        direction="ltr"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250324-a066fbe1d5421912"
                        }}
                        >
                        <h4>Så ekte som mulig</h4>
                        <p>Slik gjennskaper vi western følelsen med minst mulig CGI.</p>
                    </Single>

                    <Split
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250206-fe2e9d025bc95da7"
                        }}
                        >
                        <h4>En artig produksjon</h4>
                        <p>Til tross for den hardbeinte arbeidssprosessen, så har vi virkelig hatt det utrolig morro. </p>
                    </Split>

                    <Split
                        direction="ltr"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250206-dca1812efa4ff107"
                        }}
                        >
                        <h4>En lang vei til skjermen</h4>
                        <p>Selv om filmen bare er 15 min, har vi faktisk 500 GB med opptak og 9 forskjellige filmsteder.</p>
                    </Split>

                        <h1 className={styles.subtitle}>Første tagning</h1>

                <Split
                    direction="rtl"
                    media={{
                        type: "video",
                        src: "https://bamblingen.no/api/v1/files/video?v=20250324-77df8fd9946d5fd7"
                    }}
                    >
                </Split>
                <Split
                    direction="ltr"
                    media={{
                        type: "video",
                        src: "https://bamblingen.no/api/v1/files/video?v=20250324-d9b132ac43991af3"
                    }}
                    >
                        <h4>De første rekvisittene</h4>
                        <p>Før vi fikk tak i våpenkopier lagd av sink og ekte skinn på hattene, måtte vi nøye oss med billig plastikk og ull fra lekebutikken.</p>
                </Split>
            </MaxWidthWrapper>
        </div>
    );
}
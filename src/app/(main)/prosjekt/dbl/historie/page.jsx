"use client"

import Image from "next/image";
import styles from "./style.module.css"
import LocalImage from "@/components/common/LocalImage";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import FadeOnScroll from "@/components/wrappers/FadeOnScroll";
import Split from "../../../home/_split"
import Single from "../../../home/_single";
import BannerSection from "../../../home/_banner_"
import Margin from "@/components/common/Margin";
import VideoPlayer from "@/components/common/VideoPlayer";
import LinedTitle from "@/components/common/LinedTitle";
import Quote from "@/components/common/Quote";
import Hero from "../../../home/_hero";
import BudgetDisplay from "./_budget";

export default function DBL_PAGE () {
    return (
        <div className={styles.c}>

            <div className={styles.g}>
            <div className={styles.background}>
                <LocalImage quality={100} width={1920} height={1080} src={"/dbl/DBL_PLAKAT_16.9.jpg"} />
            </div>

                        {/* <Hero /> */}
                    <MaxWidthWrapper>
                        <h1 className={styles.title}>DBL, FRA DRØM TIL SKJERM</h1>

                    {/* <Single
                        direction="rtl"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250324-98fdc0ec03eac1ee"
                        }}
                        >
                        
                    </Single> */}

                        <Quote hue={350} title="I 2023, starten av VGS, og før Aktuelt Studio i det hele tatt var en idé, begynte produksjonen av DBL."></Quote>
                    </MaxWidthWrapper>



                    <Single
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250324-a066fbe1d5421912"
                        }}
                        >
                        <h4>SÅ EKTE SOM MULIG</h4>
                        <p>Slik gjenskaper vi western følelsen med minst mulig CGI.</p>
                    </Single>                        


                    <Split media={[
                        {
                            type: "video",
                            content: "https://bamblingen.no/api/v1/files/video?v=20250206-fe2e9d025bc95da7"
                        },
                        {
                            type: "html",
                            content: <>
                                    <h4>EN ARTIG PRODUKSJON</h4>
                                    <p>Til tross for den hardbeinte arbeidsprosessen, så har vi virkelig hatt det utrolig moro. </p>
                                </>
                        },
                    ]} />
                    
                    <Split media={[
                        {

                            type: "html",
                            content: <>
                                    <h4>EN LANG VEI TIL SKJERMEN</h4>
                                    <p>Selv om filmen bare er rundt 15 minutter, har vi faktisk 500 GB med opptak og 9 forskjellige filmsteder.</p>
                                </>
                        },
                        {
                            type: "video",
                            content: "https://bamblingen.no/api/v1/files/video?v=20250206-dca1812efa4ff107"
                        }
                    ]} />

                    <LinedTitle title="FØRSTE TAGNING" hue={350} className={styles.subtitle}></LinedTitle>

                <Split
                    media={[
                        {
                            type: "html",
                            content: <>
                                <h4>DE FØRSTE REKVISITTENE</h4>
                                <p>Før vi fikk tak i våpenkopier laget av sink og hatter med ekte skinn, måtte vi nøye oss med billig plastikk og ull fra lekebutikken.</p>
                            </>
                        },
                        {
                            type: "video",
                            content: "https://bamblingen.no/api/v1/files/video?v=20250324-d9b132ac43991af3"
                        },
                    ]}
                    >
                </Split>
                    <Single
                            direction="ltr"
                            media={{
                                type: "video",
                                src: "https://bamblingen.no/api/v1/files/video?v=20250520-9b7cef94531d45fb"
                            }}
                            >
                            <h4>SISTE INNSPILLING</h4>
                    </Single> 
                <FadeOnScroll>
                <Split media={[
                    {
                        type: "video",
                        content: "https://bamblingen.no/api/v1/files/video?v=20250206-dca1812efa4ff107"
                    },
                    {
                        type: "video",
                        content: "https://bamblingen.no/api/v1/files/video?v=20250327-ef370439d65ebec3"
                    },
                ]} />
            </FadeOnScroll>
                <Single
                        direction="ltr"
                        media={{
                            type: "video",
                            src: "https://bamblingen.no/api/v1/files/video?v=20250325-61b7d347b619de29"
                        }}
                        >
                        <h4>SE FØRSTE UTKAST</h4>
                </Single> 

                <LinedTitle title="FILMINGEN" hue={350} className={styles.subtitle}></LinedTitle>                    

                <Split
                    height={"30rem"}
                    media={[
                        {
                            type: "video",
                            content: "https://bamblingen.no/api/v1/files/video?v=20250330-d17ade7157d736d6"
                        },
                        {
                            type: "html",
                            content: <>
                                <h4>PRAKTISK EFFEKT</h4>
                                <p>Mot slutten av filmen bruker vi en vannslange koblet til en kompressor med falskt tekstilblod. Den avkuttede slangetuppen sørger for en aggressiv spruteffekt.</p>
                            </>
                        }
                    ]}
                    >
                </Split>

                <Split media={[
                    {
                        type: "html",
                        content: <>
                                    <h1 title="KOSTNAD" className={styles.budgetTitle}>KOSTNAD</h1>
                                    <BudgetDisplay amount={26000} />
                                </>
                        },
                    {
                        type: "html",
                        content: <>
                                    <h1 title="KOSTNAD" className={styles.budgetTitle}>INNTEKTER</h1>
                                    <BudgetDisplay amount={0} />
                            </>
                    },
                    ]} />

                    <MaxWidthWrapper>
                        <p className={styles.quote}>
                            <h1 className={styles.lastwords}>SISTE ORD</h1>
                            <span>{`"Til tross for den hare perioden`}</span>
                            <span>og flere søvnløse netter, så vil denne produksjonen</span>
                            <span>{`alltid ha en varm plass i våre hjerter`}"</span>
                            </p>
                    </MaxWidthWrapper>

            </div>
        </div>
    );
}
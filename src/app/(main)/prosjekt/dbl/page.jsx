"use client"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

import styles from "./page.module.css"
import Image from "next/image";
import Split from "../../home/_split";
import VideoPlayer from "@/components/common/VideoPlayer";
import { useState } from "react";
import Link from "next/link";
import SingleColumn from "../../home/_single";

export default function Desperados ({}) {

    const hue = 360

    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <div className={styles.c} style={{ "--hue": hue }}>
            <style global jsx>{`
                :root {
                    --hue: ${hue};
                }
            `}</style>
                <header className={styles.hero}>
                <MaxWidthWrapper className={styles.body}>
                    <Image className={styles.title} src={"/dbl/DBL_LOGO_WHITE.png"} width={400} height={300} />
                    </MaxWidthWrapper>
                    <VideoPlayer className={styles.background} loop progress={false} autoPlay muted playsInline alt="background" src={"https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"} />
                </header>

            <MaxWidthWrapper className={styles.body}>
                
                <header className={styles.header}>
                    <p>En ung mann forlater Norge på 1700-tallet for et bedre liv i USA, men reisen viser seg å være langt farligere enn han kunne ha forestilt seg.</p>
                    <Link href={"/prosjekt/dbl/watch"} className={styles.play}>
                        Se film
                    </Link>
                </header>

                <Link href={"/prosjekt/dbl/historie"}>
                    <SingleColumn
                            direction="ltr"
                            media={{
                                type: "video",
                                src: "https://bamblingen.no/api/v1/files/video?v=20250520-9b7cef94531d45fb"
                            }}
                            >
                                <div>
                                    <h4>REISEN TIL FILMEN</h4>
                                    <p>Trykk her og les om historien bak filmen. Se bak kameraet og klipp som ble fjernet.</p>
                                </div>
                    </SingleColumn> 
                </Link>
                <Split media={[
                    {
                        type: "html",
                        content: <>
                                <h4>BESTILL DVD - kun for de mest dedikerte fans</h4>
                                <p>Kjøp en håndlaget DVD med hele filmen som ble sendt inn til Amandusfestivalen 2025, samt flere morsomme bloopers.</p>
                                <p>Send en e-post til: dan@aktuelt.tv</p>
                            </>
                    },
                    {
                        type: "image",
                        content: "/dbl/dvd/oppne.jpg"
                    },
                ]} />              
                
                </MaxWidthWrapper>
        </div>
    )
}
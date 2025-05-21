"use client"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

import styles from "./page.module.css"
import Image from "next/image";
import Split from "../../home/_split";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function Desperados ({}) {

    const hue = 360

    return (
        <div className={styles.c} style={{ "--hue": hue }}>
            <style global jsx>{`
                body {
                    --hue: ${hue}
                }
            `}</style>
                <header className={styles.hero}>
                <MaxWidthWrapper className={styles.body}>
                    <Image className={styles.title} src={"/dbl/DBL_LOGO_WHITE.png"} width={400} height={300} />
                    </MaxWidthWrapper>
                    <VideoPlayer className={styles.background} loop progress={false} autoPlay muted playsinline alt="background" src={"https://bamblingen.no/api/v1/files/video?v=20250312-4089807053b3bf43"} />
                </header>

            <MaxWidthWrapper className={styles.body}>
                
                <header className={styles.header}>
                    <p>En ung mann forlater Norge på 1700-tallet for et bedre liv i USA, men reisen viser seg å være langt farligere enn han kunne ha forestilt seg.</p>
                    <div className={styles.play}>
                        Se film
                    </div>
                </header>

                <Split media={[
                    {
                        type: "image",
                        content: "/dbl/dvd/oppne.jpg"
                    },
                    {
                        type: "html",
                        content: <>
                                <h4>BESTILL DVD - kun for de mest dedikerte fans</h4>
                                <p>Kjøp en håndlaget DVD med hele filmen som ble sendt inn til Amandusfestivalen 2025, samt flere morsomme bloopers.</p>
                                <p>Send en e-post til: dan@aktuelt.tv</p>
                            </>
                    },
                ]} />

                

                </MaxWidthWrapper>
        </div>
    )
}
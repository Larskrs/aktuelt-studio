"use client"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Image from "next/image";
import Banner from "@/components/wrappers/FilmBanner/Banner";
import Link from "next/link";
import FilmBanner from "@/components/wrappers/FilmBanner";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import Hero from "@/components/layout/Hero";
import TypingEffect from "@/components/common/TypingEffect";

export default function Home () {
    return (
        <div className={styles.c}>
            <Hero
                alignment={"left"}
                background={<video alt="backdrop" autoPlay muted playsInline loop className={styles.backdrop} src={"https://bamblingen.no/api/v1/files?fileId=20250126-db3c39a422d58b2fc902d9412183bf91f74e0e0cdf9d4de9"} width={1920} height={1080} />}
            >
                    <TypingEffect typeStyle={{color: "var(--primary-500)"}} textStyle={{fontSize: "var(--fontSize-xxl)"}} prefix="Det finnes alltid en bedre måte å skape " prompts={["film", "tv", "reklamefilm", "musikkvideo"]} />
                    {/* <Image alt="poster" className={styles.titleImage} src={"/branding/logo/aktueltstudio.png"} width={600} height={400} /> */}
                    {/* <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.</p> */}
                    {/* <div className={styles.callToAction}>
                        <button className={styles.btn}>Se Film</button>
                    </div> */}
            </Hero>
            <MaxWidthWrapper className={styles.padding}>
                {/* <LinedTitle title="Sjangerfilmer" color="var(--text-600)" lineBackground="linear-gradient(-90deg, var(--text-400), var(--text-100))"></LinedTitle> */}
                
                <FilmBanner films={[
                    
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250126-db3c39a422d58b2fc902d9412183bf91f74e0e0cdf9d4de9",
                        name: "Desperados, Banditos & Litagos"
                    },

                ]}>
                </FilmBanner>
            </MaxWidthWrapper>
            <Hero
                className={styles.hero}
                alignment={"left"}
                background={<Image alt="backdrop" className={styles.backdrop} src={"/dbl/DBL_PLAKAT_WIDE_NO_LOGO.jpg"} width={1920} height={1080} />}
            >       
                    <h2>Vår nyeste produksjon</h2>
                    <Image alt="poster" className={styles.titleImage} src={"/dbl/DBL_LOGO_CRAP.png"} width={600} height={600} />
                    <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.</p>
                    <div className={styles.callToAction}>
                        <Link href={"/prosjekt/dbl"} className={styles.btn}>Se Film</Link>
                    </div>
            </Hero>
            <Hero
                alignment={"right"}
                background={<Image alt="backdrop" className={styles.backdrop} src={"https://bamblingen.no/api/v1/files?fileId=20250128-642a9ef9c5b1560e40144c36cca1400ee8c82121be8f5d4b"} width={1920} height={1080} />}
            >
                    {/* <Image alt="poster" className={styles.titleImage} src={"/dbl/DBL_LOGO_CRAP.png"} width={600} height={600} /> */}
                    {/* <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.</p> */}
                    <div className={styles.callToAction}>
                        <button className={styles.btn}>Se Film</button>
                    </div>
            </Hero>
        </div>
    );
}
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
import CountdownTimer from "@/components/common/CountdownTimer";
import LocalImage from "@/components/common/LocalImage";
import LinkCards from "./_link_cards";
import BannerSection from "./_banner_"
import Margin from "@/components/common/Margin";

export default function Home () {
    return (
        <div className={styles.c}>
            {/* <Hero
                alignment={"left"}
                background={<video alt="backdrop" autoPlay muted playsInline loop className={styles.backdrop} src={"https://bamblingen.no/api/v1/files?fileId=20250126-db3c39a422d58b2fc902d9412183bf91f74e0e0cdf9d4de9"} width={1920} height={1080} />}
            >
                    <TypingEffect typeStyle={{color: "var(--primary-500)"}} textStyle={{fontSize: "var(--fontSize-xxl)"}} prefix="Det finnes alltid en bedre måte å skape " prompts={["film", "tv", "reklamefilm", "musikkvideo"]} />
            </Hero> */}
            {/* <MaxWidthWrapper className={styles.padding}>
                <FilmBanner films={[

                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250128-e81c22616f1047d76ec791aad5d33fdc42f8bc2f9185c694",
                        name: "Desperados, Banditos & Litagos"
                    },
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250128-e81c22616f1047d76ec791aad5d33fdc42f8bc2f9185c694",
                        name: "Desperados, Banditos & Litagos"
                    },
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250128-e81c22616f1047d76ec791aad5d33fdc42f8bc2f9185c694",
                        name: "Desperados, Banditos & Litagos"
                    },

                ]}>
                </FilmBanner>
            </MaxWidthWrapper> */}
            <Hero
                className={styles.hero}
                alignment={"left"}
                background={<LocalImage alt="backdrop" className={styles.backdrop} src={"/dbl/DBL_PLAKAT_WIDE_NO_LOGO.jpg"} width={1920} height={1080} />}
            >
                    <LocalImage alt="poster" className={styles.titleImage} src={"/dbl/DBL_LOGO_CRAP.png"} width={600} height={600} />
                    <LocalImage alt="nomination" className={styles.nomination} src={"/icons/ui/Amandus_Fiction_Nomination.svg"} width={200} height={60} />
                    <Margin.Block amount={1} />
                    {/* <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.</p> */}
                    <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke...
                        <span><Link href={"/prosjekt/dbl"}>les mer</Link></span>
                    </p>
                    <div className={styles.callToAction}>
                        {/* <Link href={"/prosjekt/dbl"} className={classNames(styles.btn, styles.upcoming)}>Se Film</Link> */}
                        <span>Kommer ut 12 april</span>
                    </div>
            </Hero>

            <LinkCards />
            <BannerSection />
        </div>
    );
}
"use client"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Image from "next/image";
import Banner from "@/components/wrappers/FilmBanner/Banner";
import Link from "next/link";
import FilmBanner from "@/components/wrappers/FilmBanner";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import TypingEffect from "@/components/common/TypingEffect";
import CountdownTimer from "@/components/common/CountdownTimer";
import LocalImage from "@/components/common/LocalImage";
import LinkCards from "./_link_cards";
import BannerSection from "./_banner_"
import Margin from "@/components/common/Margin";
import ProjectsBento from "./_projects_bento";
import DBL from "./dbl";
import Hero from "./_hero";

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

            <Hero />

            <Margin.Block amount={5} />
            
            {/* <DBL /> */}
            

            <ProjectsBento />
            {/* <BannerSection /> */}
            <Margin.Block amount={12} ></Margin.Block>
        </div>
    );
}

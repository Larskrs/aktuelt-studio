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
import DBL from "./_dbl";
import Hero from "./_hero";
import Split from "./_split"
import FadeOnScroll from "@/components/wrappers/FadeOnScroll";
import SingleColumn from "./_single";

export default function Home () {
    return (
        <div className={styles.c}>
            {/* <Hero
                alignment={"left"}
                background={<video alt="backdrop" autoPlay muted playsInline loop className={styles.backdrop} src={"https://bamblingen.no/api/v1/files?fileId=20250126-db3c39a422d58b2fc902d9412183bf91f74e0e0cdf9d4de9"} width={1920} height={1080} />}
            >
                    <TypingEffect typeStyle={{color: "var(--primary-500)"}} textStyle={{fontSize: "var(--fontSize-xxl)"}} prefix="Det finnes alltid en bedre måte å skape " prompts={["film", "tv", "reklamefilm", "musikkvideo"]} />
            </Hero> */}

                <Hero />
                {/* <MaxWidthWrapper className={styles.padding}>
                <FilmBanner films={[

                    {
                        poster: "",
                        preview: "",
                        name: "Desperados, Banditos & Litagos"
                    },
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250128-e81c22616f1047d76ec791aad5d33fdc42f8bc2f9185c694",
                        name: "Desperados, Banditos & Litagos"
                    },
                    {
                        poster: "",
                        preview: "",
                        name: "Desperados, Banditos & Litagos"
                    },

                ]}>
                </FilmBanner>
            </MaxWidthWrapper> */}
            
            <DBL />

            <FadeOnScroll>
                <Split
                    direction="ltr"
                    media={{
                        type: "video",
                        src: "https://bamblingen.no/api/v1/files/video?v=20250206-1c40218641027a0a"
                    }}
                    >
                    <h4>EN BRED REKKE MEDIER</h4>
                    <p>I 2023 produserte vi en TikTok for Ung i Trafikken sin sosiale mediekonto gjennom deres TikTok-konkurranse, hvor vi vant prisen for beste film.</p>
                </Split>
            </FadeOnScroll>

            

            <FadeOnScroll>
                <BannerSection hue={265}>
                    <h1>VÅRT ARBEID</h1>
                    <p>Vi skaper unike filmproduksjoner, reklamefilmer og musikkvideoer skreddersydd for dine behov.</p>
                </BannerSection>
            </FadeOnScroll>
            <FadeOnScroll>
                <SingleColumn
                    media={{
                        type: "video",
                        src: "https://bamblingen.no/api/v1/files/video?v=20250206-0fb468341fa3733f"
                    }}
                >
                    <h4>IKKE REDDE FOR Å PROVOSERE!</h4>
                    <p>Vår historie er ikke dekket av roseblader. Vi er kjent for – og stolte av – å utfordre grenser for hva som kan skapes.</p>
                </SingleColumn>
            </FadeOnScroll>
            <Margin.Block amount={2} ></Margin.Block>
        </div>
    );
}

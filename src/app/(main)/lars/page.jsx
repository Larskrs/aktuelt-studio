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
import Intro from "./_intro";
import Split from "./_split"
import FadeOnScroll from "@/components/wrappers/FadeOnScroll";
import SingleColumn from "./_single";
import Profile from "./_profile_";

export default function Home () {
    return (
        <div className={styles.c}>
            <Hero
                alignment={"left"}
                background={<video alt="backdrop" autoPlay muted playsInline loop className={styles.backdrop} src={"/lars/profil.png"} width={1920} height={1080} />}
            >
                    
            </Hero>

                {/* <Intro /> */}

                <div className={styles.body}>


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
            
            {/* <DBL /> */}

            <FadeOnScroll>
                <Profile />
            </FadeOnScroll>

            

            <FadeOnScroll>
                <Split media={[
                    {
                        type: "video",
                        content: "https://bamblingen.no/api/v1/files/video?v=20250324-a066fbe1d5421912"
                    },
                    {
                        type: "html",
                        content: <>
                            <h4>GLAD I Å EKSPERIMENTERE</h4>
                            <p>Til kortfilmen <Link href={"/prosjekt/dbl"}>Desperados, Banditos & Litagos</Link> Ble det satt opp flere praktiske effekter i et forsøk om å unngå å bruke visuelle effekter. Jeg tokk en god helg og jobbet til seint på en måte å skyte ut trykkluft ut i et rør fylt med falsk blod. </p>
                            </>
                    },
                ]} />
            </FadeOnScroll>
            <FadeOnScroll>
                <Split media={[
                    {
                        type: "html",
                        content: <>
                            <h4>FERDIGHETER</h4>
                            <p>Klipping, filming, lyddesign og programmering</p>
                            </>
                    },
                    {
                        type: "video",
                        content: "https://bamblingen.no/api/v1/files/video?v=20250324-a066fbe1d5421912"
                    },
                ]} />
            </FadeOnScroll>

            </div>
        </div>
    );
}

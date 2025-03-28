import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";

export default function LinkCards ({}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={styles.grid}>
                <div className={styles.title} href={"/dbl"}>
                    <p><b>Film</b> er et medium som forteller mer enn et vanlig bilde. Det er emosjonelt og mer tilgjengelig til de fleste, vi spesialiserer i å fange dine uforglemmelige minner i film.</p>
                </div>
                <Card href={"/prosjekt/dbl"}
                    background={<LocalImage alt={"dbl-plakat"} quality={100} className={styles.image} width={500} height={700} src={"/dbl/DBL_PLAKAT_NARROW.jpg"} />}
                >
                    <LocalImage alt="nomination" className={styles.nomination} src={"/icons/ui/Amandus_Fiction_Nomination.svg"} width={300} height={50} />
                    {/* <h1>IF Storm</h1> */}
                </Card>
                <Card href={"/prosjekt/elvins-teater"}
                    background={<LocalImage alt={"elvins-teater-plakat"} quality={100} className={styles.image} width={600} height={720} src={"/images/jobs/elvins-teater/Elvins-Teater-Plakat.png"} />}
                >
                    {/* <h1>Drangedal Kommune</h1> */}
                </Card>
            </MaxWidthWrapper>
        </div>
    );
}

export function Card ({children, href, background=()=>{<></>}}) {
    return (
        <Link href={href} className={styles.card}>
            {background}
            <div className={styles.content}>
                {children}
            </div>
            <span className={styles.link} href={href}>
                <Image alt="open-link-button-symbol" width={64} height={64} src={"/icons/ui/Open_Circle.svg"} />
            </span>
        </Link>
    )
}
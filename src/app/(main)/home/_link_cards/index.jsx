import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";

export default function LinkCards ({}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={styles.grid}>
                <div className={styles.title} href={"/dbl"}>
                    <p><b>Film</b> er et medium som forteller mer enn et vanlig bilde. Det er emosjonelt og mer tilgjengelig til de fleste, vi spesialiserer i å fange dine uforglemmelige minner i film.</p>
                </div>
                <Card href={"/dbl"}>
                    <h1>Kontakt oss</h1>
                </Card>
                <Card href={"/dbl"}>
                    <h1>Finn priss</h1>
                </Card>
            </MaxWidthWrapper>
        </div>
    );
}

export function Card ({children, href}) {
    return (
        <div className={styles.card}>
            {/* <LocalImage quality={100} className={styles.image} width={320} height={720} src={"https://bamblingen.no/api/v1/files?fileId=20250117-e4896345caa93d06ab820dca48d6e9cda0bb52682f9acc9a"} /> */}
            <div className={styles.content}>
                {children}
            </div>
            <Link className={styles.link} href={href}>
                <Image width={64} height={64} src={"/icons/ui/Open_Circle.svg"} />
            </Link>
        </div>
    )
}
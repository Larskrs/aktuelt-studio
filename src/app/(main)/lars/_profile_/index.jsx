import Image from "next/image";
import styles from "./profile.module.css"
import Link from "next/link";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

export default function Profile () {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={styles.g}>
                <div className={styles.image}>
                    <Image alt="avatar" width={600} height={600} src={"https://bamblingen.no/api/v1/files?fileId=20250422-822a5c222136c200"} />
                </div>
                {/* <h1>Lars Kristian Småge Syvertsen</h1> */}
                <div className={styles.body}>
                    <h2>PROFILER</h2>
                    <p>Her finner du mine kontoer</p>
                    <div className={styles.links}>
                        <Link href={"https://www.imdb.com/name/nm17088616/"} >IMDB</Link>
                        <p>●</p>
                        <Link href={"https://www.instagram.com/larskrss/"} >Instagram</Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
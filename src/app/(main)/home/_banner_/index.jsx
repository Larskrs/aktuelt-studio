import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import TextArea from "@/components/editor/input/TextArea";

export default function LinkCards ({}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={styles.grid}>
                <div className={styles.title} href={"/dbl"}>
                    <h1>Har du en ide?</h1>
                    <p><bold>Kontakt oss</bold></p>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
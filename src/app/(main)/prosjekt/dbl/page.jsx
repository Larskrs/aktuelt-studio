import Image from "next/image";
import styles from "./style.module.css"
import LocalImage from "@/components/common/LocalImage";

export default function DBL_PAGE () {
    return (
        <div className={styles.c}>
            <LocalImage className={styles.background} quality={100} width={1920} height={1080} src={"/dbl/DBL_PLAKAT_16.9.jpg"} />
        </div>
    );
}
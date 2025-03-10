import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function ProjectsBento ({}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={styles.g}>
                <div className={classNames(styles.one, styles.card)}>
                    {/* <Image src={"/"} /> */}
                    {/* <Image src={"/dbl/DBL_PLAKAT_NARROW.jpg"} width={400} height={600} /> */}
                        <VideoPlayer loop controls={false} autoPlay muted playsInline className={styles.video} src={"https://bamblingen.no/api/v1/files/video?v=20250207-01312bee5f27df78"} />
                    <div className={styles.info}>
                        <h4>Desperados, Banditos & Litagos</h4>
                        <p>Første visning: Amandusfestivalen 9. April</p>
                    </div>
                </div>
                <div className={classNames(styles.two, styles.card)}>
                    <Image src={"/images/jobs/elvins-teater/Elvins-Teater-Plakat.png"} width={400} height={600} />
                    <div className={styles.info}>
                        <h4>Flerkamera produksjon av teaterstykke</h4>
                    </div>
                </div>
                <div className={classNames(styles.three, styles.card)}>
                    <Image src={"/images/jobs/jenter15/Jenter15-Thumbnail.jpg"} width={400} height={600} />
                    <div className={styles.info}>
                        <h4>Musikkvideo for fotballag</h4>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
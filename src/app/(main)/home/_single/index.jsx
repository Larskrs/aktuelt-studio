import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function SingleColumn ({
    media={type: "video", src: ""},
    children,
    direction= "ltr" || "rtl",
}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={classNames(styles.g, styles[direction])}>
                <div className={classNames(styles.media, styles.card)}>
                    {/* <Image src={"/"} /> */}
                        {media.type == "image" && <Image src={"/dbl/DBL_PLAKAT_NARROW.jpg"} width={400} height={600} />}
                        {media.type == "video" && <VideoPlayer progress={false} loop controls={false} autoPlay muted playsInline className={styles.video} src={media.src} />}
                </div>
                <div className={classNames(styles.body)}>
                    <div className={styles.info}>
                        {children}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
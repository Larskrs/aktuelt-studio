import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function SplitElement ({
    media=[],
}) {
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={classNames(styles.g)}>
                {media.map((m, i) => {
                    return (
                        <CardRenderer key={i} {...m} />
                    )
                })}
            </MaxWidthWrapper>
        </div>
    );
}

export function CardRenderer ({type = "html", content}) {
    if (type === "image") {
        return <ImageRenderer src={content} />
    }
    if (type === "video") {
        return <VideoRenderer src={content} />
    }
    
    return <BodyRenderer>{content}</BodyRenderer>
    
}

export function ImageRenderer ({src}) {
    return (
        <div className={classNames(styles.media)}>
            <Image className={styles.image} alt={"media"} src={src} width={400} height={600} />
        </div>
    )
}
export function VideoRenderer ({src}) {
    return (
        <div className={classNames(styles.media)}>
            <VideoPlayer progress={false} loop controls={false} autoPlay muted playsInline className={styles.video} src={src} />
        </div>
    )
}

export function BodyRenderer ({children}) {
    return (
        <div className={classNames(styles.body)}>
            <div className={styles.info}>
                {children}
            </div>
        </div>
    )
}
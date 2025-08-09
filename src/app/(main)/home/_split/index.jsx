import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import classNames from "classnames";
import VideoPlayer from "@/components/common/VideoPlayer";
import { useRouter } from "next/navigation";

export default function SplitElement ({
    media=[],
    height="100%",
    link="/"
}) {

    const router = useRouter()
    
    return (
        <div className={styles.c}>
            <MaxWidthWrapper className={classNames(styles.g)}>
                {media.map((m, i) => {
                    return (
                        <CardRenderer height={height} key={i} {...m} />
                    )
                })}
            </MaxWidthWrapper>
        </div>
    );
}

export function CardRenderer ({type = "html", content, height}) {
    if (type === "image") {
        return <ImageRenderer height={height} src={content} />
    }
    if (type === "video") {
        return <VideoRenderer height={height} src={content} />
    }
    
    return <BodyRenderer>{content}</BodyRenderer>
    
}

export function ImageRenderer ({src, height}) {
    return (
        <div className={classNames(styles.media)} style={{height: height}}>
            <Image className={styles.image} alt={"media"} src={src} width={400} height={600} />
        </div>
    )
}
export function VideoRenderer ({src, height}) {
    return (
        <div className={classNames(styles.media)} style={{height: height}}>
            <VideoPlayer progress={false} loop controls={false} autoPlay muted playsInline className={styles.video} src={src} />
        </div>
    )
}

export function BodyRenderer ({children, height}) {
    return (
        <div className={classNames(styles.body)} style={{height: height}}>
            <div className={styles.info}>
                {children}
            </div>
        </div>
    )
}
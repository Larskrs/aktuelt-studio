import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import LocalImage from "@/components/common/LocalImage";
import LinedTitle from "@/components/common/LinedTitle";
import TextArea from "@/components/editor/input/TextArea";

export default function LinkCards ({children, hue=60, image="/decor/camera_decor.svg"}) {
    return (
            <MaxWidthWrapper className={styles.c} style={{ "--hue": hue }}>
                <div className={styles.grid}>
                    <div className={styles.body}>
                        {children}
                    </div>
                        {image && <Image className={styles.image} width={540} height={360} src={"/decor/camera_decor.svg"} />}
                </div>
            </MaxWidthWrapper>
    );
}
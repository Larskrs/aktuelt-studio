import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export default function Hero ({className, children, background, alignment="center"}) {
    return (
        <div className={styles.heroContainer}>
            <main className={classNames(styles.hero, className, styles?.[alignment])}>
                    {background}
                    <div className={styles.header}>
                        <MaxWidthWrapper className={classNames(styles.body)}>
                                {children}
                        </MaxWidthWrapper>
                    </div>
            </main>
        </div>
    );
}
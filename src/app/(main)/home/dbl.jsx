import LocalImage from "@/components/common/LocalImage";
import Hero from "@/components/layout/Hero";
import Margin from "@/components/common/Margin";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css"

export default function DBL ({}) {
    return (<React.Fragment>

                <Hero
                className={styles.hero}
                alignment={"left"}
                background={<LocalImage alt="backdrop" className={styles.backdrop} src={"/dbl/DBL_PLAKAT_WIDE_NO_LOGO.jpg"} width={1920} height={1080} />}
                >       
                    <div className={styles.content}>

                    </div>

                    <LocalImage alt="poster" className={styles.titleImage} src={"/dbl/DBL_LOGO_CRAP.png"} width={600} height={600} />
                    <LocalImage alt="nomination" className={styles.nomination} src={"/icons/ui/Amandus_Fiction_Nomination.svg"} width={200} height={60} />
                    <Margin.Block amount={1} />
                    {/* <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.</p> */}
                    <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke...
                        {/* <span><Link href={"/prosjekt/dbl"}>les mer</Link></span> */}
                    </p>
                    <div className={styles.callToAction}>
                        {/* <Link href={"/prosjekt/dbl"} className={classNames(styles.btn, styles.upcoming)}>Se Film</Link> */}
                        <span>Kommer ut 12 april</span>
                    </div>

                    <div className={styles.right}>

                    </div>
            </Hero>
        </React.Fragment>
    );
}

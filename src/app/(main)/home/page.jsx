import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import styles from "./style.module.css"
import Image from "next/image";
import Banner from "@/components/wrappers/FilmBanner/Banner";
import Link from "next/link";
import FilmBanner from "@/components/wrappers/FilmBanner";
import LinedTitle from "@/components/common/LinedTitle";

export default function Home () {
    return (
        <body className={styles.c}>
            <main className={styles.hero}>
                    <Image className={styles.backdrop} src={"/dbl/DBL_PLAKAT_WIDE.jpg"} width={1920} height={1080} />
                    <div className={styles.header}>
                        <MaxWidthWrapper>
                            <div className={styles.body}>
                                <h1>Desperados, Banditos & Litagos</h1>
                                <p>Året er 1886. En ung mann drømte om et bedre liv og lot seg lokke av løftene om den amerikanske drømmen. Med bare hunden sin som følgesvenn forlot han Norge og satte kurs mot USA. Men det skulle ikke ta lang tid før han innså at den amerikanske drømmen ikke var så idyllisk som han hadde forestilt seg.
</p>
                                
                            </div>
                            <Image className={styles.image} src={"/dbl/DBL_PLAKAT_NARROW.jpg"} width={300} height={600} />
                        </MaxWidthWrapper>
                    </div>
            </main>
            <MaxWidthWrapper>
                <LinedTitle title="Sjangerfilmer" color="var(--red-400)" lineBackground="linear-gradient(-90deg, var(--red-100), var(--background-100))"></LinedTitle>
                
                <FilmBanner films={[
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250117-9ee7a71675a719101ba4df6a025f08f93eb5fa7e5fe81222",
                        name: "Desperados, Banditos & Litagos",
                    },
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250126-db3c39a422d58b2fc902d9412183bf91f74e0e0cdf9d4de9",
                        name: "Desperados, Banditos & Litagos"
                    },
                    {
                        poster: "/dbl/DBL_PLAKAT_WIDE.jpg",
                        preview: "https://bamblingen.no/api/v1/files?fileId=20250117-e68c03dd9eca6c10373616ceb15889a739e1486a06cc532c",
                        name: "Desperados, Banditos & Litagos"
                    }
                ]}>
                </FilmBanner>
            </MaxWidthWrapper>
        </body>
    );
}
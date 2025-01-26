import styles from "./style.module.css"
import BannerItem from "./Banner";


export default function FilmBanner ({films=[]}) {
    return (
        <div className={styles.c}>
            {films.map((f,i) => {
                return <BannerItem image={f.poster} video={f.preview} url={f.url} />
            })}
        </div>
    );
}
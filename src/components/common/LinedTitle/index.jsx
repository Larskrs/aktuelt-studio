import styles from "./style.module.css"

export default function LinedTitle ({title="", color="white", lineBackground="linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.5), white)"}) {
    return (
        <div className={styles.linedTitle}>
            <span style={{background: lineBackground}} />
            <h1 style={{color: color}}>{title}</h1>
            <span style={{background: lineBackground}} />
        </div>
    );
}
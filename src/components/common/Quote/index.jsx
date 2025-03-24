import styles from "./style.module.css"

export default function gLinedTitle ({title="", hue=0 }) {
    return (
        <div className={styles.linedTitle} style={{ "--hue": hue }}>
            <p >{title}</p>
        </div>
    );
}
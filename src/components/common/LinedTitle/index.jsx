import classNames from "classnames";
import styles from "./style.module.css"

export default function gLinedTitle ({className, title="", hue=0 }) {
    return (
        <div className={classNames(className, styles.linedTitle)} style={{ "--hue": hue }}>
            <span/>
            <h1 >{title}</h1>
            <span/>
        </div>
    );
}
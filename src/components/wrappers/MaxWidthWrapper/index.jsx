import classNames from "classnames"
import styles from "./style.module.css"

export default function MaxWidthWrapper ({
    children,
    style,
    className
}) {
    return (
        <div style={style} className={classNames(styles.maxWidth, className)}>
            {children}
        </div>
    )
}
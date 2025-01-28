import classNames from "classnames"
import styles from "./style.module.css"

export default function MaxWidthWrapper ({
    children,
    className
}) {
    return (
        <div className={classNames(styles.maxWidth, className)}>
            {children}
        </div>
    )
}
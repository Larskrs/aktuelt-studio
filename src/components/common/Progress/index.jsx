import classNames from "classnames"
import styles from "./style.module.css"
import { useState } from "react"

export default function Progress ({max, value, style, barClass, containerClass}) {

    return (
        <div style={style} className={classNames(styles.c, containerClass)}>
            {<span className={classNames(barClass, styles.b)} style={{
                width: `${(value / max * 100)}%`
            }}></span>}
        </div>
    )

}
import classNames from "classnames"
import styles from "./style.module.css"
import { useState } from "react"

export default function ({max, value, style, barClass, containerClass}) {

    return (
        <div style={style} className={classNames(containerClass, styles.c)}>
            {<span className={classNames(styles.b, barClass)} style={{
                width: `${(value / max * 100)}%`,
            }}></span>}
        </div>
    )

}
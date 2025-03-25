import styles from "./style.module.css"
import FlowNumber from "../FlowNumberDigit"
import classNames from "classnames"
import React from "react"

export default function InfiniteFlowNumber ({className, number}) {

    const s = number.toString()
    const digits = s.split("")

    return (
        <div className={classNames(styles.digits)}>
            {digits.map((d, i) => {
                const indexFromRight = digits.length - i - 1;
                const isSeparatorNeeded = indexFromRight % 3 === 0 && indexFromRight !== 0;
            
                return (
                    <React.Fragment key={i}>
                        <FlowNumber className={className} number={parseInt(d)} />
                        {isSeparatorNeeded && <span className={styles.space}></span>}
                    </React.Fragment>
                );
            })}
        </div>
    )
}
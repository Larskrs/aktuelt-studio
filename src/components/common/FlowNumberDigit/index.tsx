import classNames from "classnames"
import styles from "./style.module.css"
import cn from "../../../lib/className"

export default function FlowNumber ({className, number}:{className?:string, number:number}) {
        const digits = [0,1,2,3,4,5,6,7,8,9]

    return (
        <div className={cn(className, styles.flow)}>
            <div className={styles.shifter} style={{translate: `0px ${number}em`}}>
                {digits.map((d) => <span key={d} style={{bottom: `${d-1}em`}}>{d}</span>)}
            </div>
        </div>
    )
}
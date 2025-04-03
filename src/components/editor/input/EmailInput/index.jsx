"use client"
import { useEffect, useState } from "react"
import styles from "./email.module.css"
import classNames from "classnames"

export default function EMailInput ({}) {

    const [value, setValue] = useState("")
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var err = []
        if (!emailRegex.test(value)) {
            err = [err, "Epost er ikke gyldig"]
        }
        setErrors(err)
    }, [value])

    return <div className={styles.c}>
        <input value={value} onChange={(e) => {setValue(e.target.value)}} className={classNames(styles.i, (errors.length !== 0 && styles.error)
        )} placeholder="e-post" />
        {errors.map((err, i) => {
            return <span className={styles.error} key={i}>{err}</span>
        })}
    </div>

}
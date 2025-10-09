import EMailInput from "@/components/editor/input/EmailInput"
import styles from "./contact.module.css"


export default function Contact ({}) {
    
    return (
        <div className={styles.c}>
            <div className={styles.form}>
                <EMailInput />
            </div>
        </div>
    )
}
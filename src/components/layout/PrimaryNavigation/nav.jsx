"use client"

import Link from "next/link";
import styles from "./nav.module.css"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import UserAvatar from "@/components/common/Authentication/UserAvatar"

export default function Navigation () {

    const links = [
        { href: "/prosjekt/dbl", display: "DBL"},
        // { href: "/radio", display: "Radio"},
        // { href: "/ai-artikkel", display: "AI"},
        // { href: "/meninger", display: "Meninger"},
        // { href: "/satire", display: "Satire"},
        // { href: "/tips", display: "Tips oss"},
        // { href: "/calendar", display: "Kalender"},
    ]

    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
                <div className={styles.links}>
                        {links.map(link =>
                                <Link className={pathname === link.href ? styles.active : styles.inactive} key={link.href} href={link.href}>{link.display}</Link>
                            )}
                    {/* <Link href={"/dsib"}>Det skjer i Bamble</Link> */}
                </div>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/branding/logo/aktueltstudio.png"} alt="bambl2ngen logo" quality={100} width={128*2.5} height={128} />
                </Link>
                <UserAvatar ></UserAvatar> 

            </nav>
    );
}
import Link from "next/link"
import { NAVIGATION_LINKS, NavigationLinksType } from "./models"
import css from './index.module.css'
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"

export const Navigation = () => {

    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    // const [isActive, setIsActive] = useState<boolean>(false)

    // const clickLink = () => {
    //     setIsActive(true)
    // }


    return (
        <nav className={css.nav}>
            {NAVIGATION_LINKS.map((item: NavigationLinksType, index) => (

                // <Link href={item.href} className={clsx(css.navLink,{[css.active]: isActive})}  key={index} onClick={clickLink}>{item.title}</Link>
                <Link href={item.href} className={`${css.navLink} ${isActive(item.href) ? css.active : ''}`}  key={index}>{item.title}</Link>
            ))}
        </nav>
    )
}
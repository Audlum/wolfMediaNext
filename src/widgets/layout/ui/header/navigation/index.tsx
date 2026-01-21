import Link from "next/link"
import { NAVIGATION_LINKS, NavigationLinksType } from "./models"
import css from './index.module.css'
import { usePathname } from "next/navigation"

export const Navigation = () => {

    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <nav className={css.nav}>
            {NAVIGATION_LINKS.map((item: NavigationLinksType, index) => (
                <Link href={item.href} className={`${css.navLink} ${isActive(item.href) ? css.active : ''}`}  key={index}>{item.title}</Link>
            ))}
        </nav>
    )
}
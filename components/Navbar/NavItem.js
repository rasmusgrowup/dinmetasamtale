import Link from "next/link";
import styles from '@/styles/navbar.module.scss'

export default function NavItem({ href, text}) {
    return (
        <div className={styles.navItem}>
            <Link href={href}>{text}</Link>
        </div>
    )
}
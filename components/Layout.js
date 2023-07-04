import styles from '@/styles/layout.module.scss'

export default function Layout({children}) {
    return <main className={styles.main}>{children}</main>
}
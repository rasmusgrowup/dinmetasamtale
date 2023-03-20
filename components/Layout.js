import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import styles from '@/styles/layout.module.scss'

export default function Layout({children}) {
    return (
        <main className={styles.main}>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
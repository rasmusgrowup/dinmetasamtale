import styles from '@/styles/navbar.module.scss';
import Logo from "@/components/Logo/Logo";
import Menu from "@/components/Navbar/Menu";

export default function Navbar() {
   return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <Menu />
            </div>
        </nav>
   )
}
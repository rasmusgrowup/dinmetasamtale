import Logo from "@/components/Logo/Logo";
import styles from '@/styles/footer.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import Menu from "@/components/Navbar/Menu";
import Image from "next/image";
import MCT from '@/public/mct-i-logo.png'

export default function Footer() {
    const router = useRouter();
    function onClick() {
        router.push('/')
    }

    return (
        <footer className={styles.footer}>
            <Logo />
            <div className={styles.address}>
                <div>Malmøgade 10, 5000 Odense C</div>
                <Link href='mailto:kontakt@dinmetasamtale.dk'>kontakt@dinmetasamtale.dk</Link>
                <Link href='tel:+4530703048'>+45 30 70 30 48</Link>
            </div>
            <Menu />
            <div className={styles.imageContainer}>
                <Image src={MCT} alt='MCT logo' />
            </div>
        </footer>
    )
}
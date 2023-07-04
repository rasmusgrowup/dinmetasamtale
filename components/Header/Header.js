import styles from '@/styles/header.module.scss';
import Menu from "@/components/Header/Menu";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Header({header}) {
    const router = useRouter();

    function toHomePage() {
        router.push('/')
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                { header.logo && <div className={styles.logoContainer} onClick={() => toHomePage()} style={{ cursor: 'pointer' }}>
                    <Image
                        src={header.logo.image.url}
                        alt={header.logo.altText}
                        width={header.logo.image.width}
                        height={header.logo.image.height}
                    />
                </div> }
                { header.nav && <Menu nav={header.nav}/>}
            </div>
        </nav>
    )
}
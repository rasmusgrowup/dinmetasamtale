import styles from '@/styles/footer.module.scss'
import {useRouter} from "next/router";
import Image from "next/image";
import Menu from "@/components/Header/Menu";
import Button from "@/components/Button";
import NavItem from "@/components/Header/NavItem";

export default function Footer({footer}) {
    const router = useRouter();

    function onClick() {
        router.push('/')
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Image
                    src={footer.logo.image.url}
                    alt={footer.logo.altText}
                    width={footer.logo.image.width}
                    height={footer.logo.image.height}
                />
            </div>
            <div className={styles.address}>
                <div dangerouslySetInnerHTML={{__html: footer.contactInfo.html}}/>
            </div>
            <div className={styles.menu}>
                { footer.nav.navItems && footer.nav.navItems.map((item, i) => (
                    item.__typename === 'NavItem' && <NavItem key={i} href={item.page.slug === 'home' ? '/' : item.page.slug} text={item.text}/>
                ))}
            </div>
            <div className={styles.imageContainer}>
                {footer.images.map((image) => (
                    <Image
                        key={image.id}
                        src={image.image.url}
                        height={image.image.height}
                        width={image.image.width}
                        alt={image.altText}
                    />
                ))}
            </div>
        </footer>
    )
}
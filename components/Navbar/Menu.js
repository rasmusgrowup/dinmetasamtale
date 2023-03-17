import styles from "@/styles/navbar.module.scss";
import NavItem from "@/components/Navbar/NavItem";
import Link from "next/link";
import InstaIcon from "@/components/InstaIcon";
import FacebookIcon from "@/components/FacebookIcon";
import Button from "@/components/Button";
import {useRouter} from "next/router";

export default function Menu() {
    const router = useRouter();
    function onClick() {
        router.push('https://system.easypractice.net/book/din-metasamtale?cookie_fixed=1#choose-service')
    }

    return (
        <div className={styles.menuContainer}>
            <NavItem href={'/metakognitiv-terapi'} text={'Metakognitiv terapi'}/>
            <NavItem href={'/priser-og-forloeb'} text={'Priser og forløb'}/>
            <NavItem href={'/klinikken'} text={'Klinikken'}/>
            <NavItem href={'/om-os'} text={'Om os'}/>
            <Link href={'/'} className={styles.iconLink}><InstaIcon/></Link>
            <Link href={'/'} className={styles.iconLink}><FacebookIcon/></Link>
            <Button func={onClick} text="Book her"/>
        </div>
    )
}
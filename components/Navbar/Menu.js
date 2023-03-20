import styles from "@/styles/navbar.module.scss";
import NavItem from "@/components/Navbar/NavItem";
import Link from "next/link";
import {useRouter} from "next/router";

// Icons & Components
import InstaIcon from "@/components/InstaIcon";
import FacebookIcon from "@/components/FacebookIcon";
import Button from "@/components/Button";
import MenuIcon from "@/components/MenuIcon";

// React Device Detect
import { isMobile } from 'react-device-detect';
import {useEffect, useState} from "react";
import CloseIcon from "@/components/CloseIcon";

function NavItems({ onClick, fullWidth }) {
    return (
        <>
            <NavItem href={'/metakognitiv-terapi'} text={'Metakognitiv terapi'}/>
            <NavItem href={'/priser-og-forloeb'} text={'Priser og forløb'}/>
            <NavItem href={'/klinikken'} text={'Klinikken'}/>
            <NavItem href={'/om-os'} text={'Om os'}/>
            <div className={styles.links}>
                <Link href={'/'} className={styles.iconLink}><InstaIcon/></Link>
                <Link href={'/'} className={styles.iconLink}><FacebookIcon/></Link>
            </div>
            <Button func={onClick} text="Book her" fullWidth={fullWidth}/>
        </>
    )
}

export default function Menu() {
    const router = useRouter();
    const [loaded, setLoaded] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    function onClick() {
        router.push('https://system.easypractice.net/book/din-metasamtale?cookie_fixed=1#choose-service')
    }

    return (
        <>
        { loaded && isMobile ?
            <>
                <div className={styles.menuIcon} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    { menuIsOpen ? <CloseIcon /> : <MenuIcon /> }
                </div>
                <div
                    className={menuIsOpen ? `${styles.menuIsOpen} ${styles.mobileMenuContainer}` : `${styles.mobileMenuContainer}`}>
                    <NavItems onClick={onClick} fullWidth='true'/>
                </div>
            </> :
          loaded &&
            <div className={styles.menuContainer}>
                <NavItems onClick={onClick} />
            </div>
        }
        </>
    )
}
import styles from "@/styles/header.module.scss";
import NavItem from "@/components/Header/NavItem";
import Link from "next/link";
import {useRouter} from "next/router";

// Icons & Components
import InstaIcon from "@/components/InstaIcon";
import FacebookIcon from "@/components/FacebookIcon";
import Button from "@/components/Button";
import MenuIcon from "@/components/MenuIcon";

// React Device Detect
import {isMobile} from 'react-device-detect';
import {useEffect, useState} from "react";
import CloseIcon from "@/components/CloseIcon";

function NavItems({items, fullWidth}) {
    return (
        <>
            {items && items.map((item, i) => {
                switch (item.__typename) {
                case 'Button': return <Button key={i} link={item.link} text={item.text} color='Light' fullWidth={fullWidth}/>
                case 'NavItem': return <NavItem key={i} href={item.page.slug === 'home' ? '/' : item.page.slug} text={item.text}/>
                default: return <div>Error</div>
            }})}
</>
)
}

export default function Menu({nav}) {
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
            {loaded && isMobile ?
                <>
                    <div className={styles.menuIcon} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        {menuIsOpen ? <CloseIcon/> : <MenuIcon/>}
                    </div>
                    <div
                        className={menuIsOpen ? `${styles.menuIsOpen} ${styles.mobileMenuContainer}` : `${styles.mobileMenuContainer}`}>
                        <NavItems items={nav.navItems} fullWidth='true'/>
                    </div>
                </> :
                loaded &&
                <div className={styles.menuContainer}>
                    <NavItems items={nav.navItems}/>
                </div>
            }
        </>
    )
}
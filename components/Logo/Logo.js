import styles from "@/styles/logo.module.scss";
import LogoIcon from "@/components/Logo/LogoIcon";
import { useRouter } from "next/router";

export default function Logo() {
    const router = useRouter();

    return (
        <div className={styles.logo} onClick={() => router.push('/')}>
            <LogoIcon />
            <aside className={styles.title}>
                <p>Din</p>
                <p>Meta</p>
                <p>Samtale</p>
            </aside>
        </div>
    )
}
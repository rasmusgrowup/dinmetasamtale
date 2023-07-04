import styles from '@/styles/buttons.module.scss'
import {useRouter} from "next/router";

export default function Button({link, text, color, fullWidth}) {
    const router = useRouter();

    function onClick() {
        router.push(`${link}`)
    }

    return (
        <button
            onClick={onClick}
            className={`
                ${color === 'Dark' ? `${styles.light}` : `${styles.dark}`}
                ${fullWidth === 'true' ? `${styles.fullWidth}` : undefined}
            `}
        >
            {text}
        </button>
    )
}
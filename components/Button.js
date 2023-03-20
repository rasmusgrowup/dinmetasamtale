import styles from '@/styles/buttons.module.scss'

export default function Button({ func, text, color, fullWidth }) {
    return (
        <button
            onClick={func}
            className={`
                ${color === 'brown' ? `${styles.light}` : `${styles.dark}`}
                ${fullWidth === 'true' ? `${styles.fullWidth}` : undefined}
            `}
        >
            {text}
        </button>
    )
}
import styles from '@/styles/buttons.module.scss'

export default function Button({ func, text, color }) {
    return (
        <button
            onClick={func}
            className={
                color === 'brown' ? `${styles.light}` : `${styles.dark}`
            }
        >
            {text}
        </button>
    )
}
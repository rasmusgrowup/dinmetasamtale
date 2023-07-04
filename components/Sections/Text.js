import styles from '@/styles/blocks.module.scss'

export default function Text({ props, i }) {
    return (
        <div className={styles.textContainer}>
            <div className={ props.columns ? `${styles.columns}` : undefined} dangerouslySetInnerHTML={{__html: props.richText.html}} />
        </div>
    )
}
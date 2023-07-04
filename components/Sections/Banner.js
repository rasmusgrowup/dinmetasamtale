import styles from '@/styles/blocks.module.scss'
import Button from "@/components/Button";

export default function Banner({ props, index }) {
    return (
        <section className={styles.banner} style={{ backgroundColor: 'var(--color-banner)'}}>
            <div className={styles.bannerText}>{props.bannerText}</div>
            <Button link={props.link} color="Dark" text={props.buttonText} />
        </section>
    )
}
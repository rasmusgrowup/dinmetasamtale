import styles from '@/styles/blocks.module.scss'
import Image from "next/image";

export default function Pills({ props }) {
    return (
        <section
            className={styles.pills}
            style={props.bg === 'brown'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.inner}>
                <h2 className={styles.heading}>{props.heading}</h2>
                <div className={styles.pillsContainer}>
                    { props.pills.map((pill, i) => (
                        <div className={styles.pill} key={i}>
                            <Image src={pill.src} alt={pill.alt} width='250' height='320'/>
                            <p className={styles.p}>{pill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
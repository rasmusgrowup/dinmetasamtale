import styles from '@/styles/blocks.module.scss'
import Image from "next/image";
import Link from "next/link";

export default function Staff({ props, index }) {
    return (
        <section
            className={`
                ${styles.staff}
                ${props.backgroundColor === 'brown' && `${styles.withMargins} ${styles.lightFont}`}
                ${index === 0 && `${styles.topElement}`}
            `}
            style={props.backgroundColor === 'brown'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.inner}>
                <h2>{props.heading}</h2>
                <div className={styles.staffContainer}>
                    { props.staff.map((person, i) => (
                        <div key={i} className={styles.person}>
                            <Image
                                src={person.image.src}
                                alt={person.image.alt}
                                width={person.image.width}
                                height={person.image.height}
                                quality='100'
                                style={{ borderRadius: `${person.image.width / 2}px`}}
                            />
                            <h3 className={styles.name}>{person.name}</h3>
                            <h4 className={styles.title}>{person.title}</h4>
                            <Link href={`mailto:` + person.mail}>{person.mail}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
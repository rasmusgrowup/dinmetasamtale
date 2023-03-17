import styles from '@/styles/blocks.module.scss'

export default function Testimonial({ props }) {

    return (
        <section
            className={`
                ${styles.testimonial}
                ${styles.withMargins}
            `}
            style={props.backgroundColor === 'brown'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.testimonialContainer}>
                <h2 className={styles.heading}>{props.heading}</h2>
                <p className={styles.review}>{props.text.text}</p>
                <p className={styles.name}>— {props.text.name}, {props.text.age}</p>
            </div>
        </section>
    )
}
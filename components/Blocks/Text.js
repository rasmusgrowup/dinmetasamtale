import styles from '@/styles/blocks.module.scss'
import Button from "@/components/Button";
import Image from "next/image";

function TextContent({ props }) {
    return (
        <div className={`
            ${styles.textContainer}
            ${props.image && `${styles.withImage}`}
        `}>
            <h2>{props.heading}</h2>
            <div className={ props.columns ? `${styles.columns}` : undefined}>
                { props.text.map((t, i) => (
                    <p key={i}>{t}</p>
                ))}
            </div>
            { props.btn && <Button text={props.btn} color={props.bg} />}
        </div>
    )
}

function ImageContainer({ props, left }) {
    return (
        <div className={ left === 'true' ? `${styles.imageContainer} ${styles.imageOnLeft}` : `${styles.imageContainer}`} style={ props.image.rounded ? { borderRadius: `${props.image.width / 2}px` } : null}>
            <Image
                src={props.image.src}
                alt={props.image.alt}
                height={props.image.height}
                width={props.image.width}
                style={props.image.objectFit === 'cover' ? { objectFit: 'cover'} : { objectFit: 'contain'}}
            />
        </div>
    )
}

export default function Text({ props, index }) {
    return (
        <section
            className={`
                ${styles.text}
                ${props.backgroundColor === 'brown' && `${styles.withMargins} ${styles.lightFont}`}
                ${index === 0 && `${styles.topElement}`}
            `}
            style={props.backgroundColor === 'brown'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.inner}>
                {
                    props.align === 'left' && props.image ?
                    <>
                        <TextContent props={props} />
                        <ImageContainer props={props}/>
                    </> :
                    props.align === 'right' && props.image ?
                    <>
                        <ImageContainer props={props} left='true'/>
                        <TextContent props={props} />
                    </> :
                    <TextContent props={props}/>
                }
            </div>
        </section>
    )
}
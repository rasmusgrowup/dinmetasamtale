import styles from '@/styles/blocks.module.scss'
import Button from "@/components/Button";
import Image from "next/image";

function Content({ props }) {
    return (
        <div
            className={styles.heroContent}
            style={props.colorTheme === 'Dark'
                        ? {backgroundColor: 'var(--color-brown)'}
                        : {backgroundColor: 'var(--color-earth)'}
                  }
        >
            <h1 className={styles.heading}>{props.title}</h1>
            { props.text && <p>{props.text}</p>}
            { props.button && <Button link={props.button.link} color={props.colorTheme} text={props.button.text} />}
        </div>
    )
}

function ImageContainer({ props }) {
    return (
        <div className={styles.imgContainer}>
            <Image
                src={props.image.url}
                alt={props.altText}
                sizes="(max-width: 840px) 100vw, (max-width: 1200px) 50vw"
                fill
                priority
            />
        </div>
    )
}

export default function Hero({ props }) {

    return (
        <section className={styles.hero}>
            { props.alignment
                ?
                <>
                    <ImageContainer props={props.image}/>
                    <Content props={props}/>
                </>
                :
                <>
                    <Content props={props}/>
                    <ImageContainer props={props.image}/>
                </>
            }
        </section>
    )
}
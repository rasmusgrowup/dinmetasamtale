import styles from '@/styles/blocks.module.scss'
import Button from "@/components/Button";
import { useRouter} from "next/router";
import Image from "next/image";

function Content({ props }) {
    const router = useRouter();
    function onClick() {
        router.push(`${props.btnUrl}`)
    }

    return (
        <div
            className={styles.heroContent}
            style={props.backgroundColor === 'brown'
                        ? {backgroundColor: 'var(--color-brown)'}
                        : {backgroundColor: 'var(--color-earth)'}
                  }
        >
            <h1 className={styles.heading}>{props.heading}</h1>
            { props.text &&
                <div className={ props.columns ? `${styles.columns}` : undefined}>
                    { props.text.map((t, i) => (
                        <p key={i}>{t}</p>
                    ))}
                </div>
            }
            { props.btn && <Button func={onClick} color={props.backgroundColor} text={props.btn} />}
        </div>
    )
}

function ImageContainer({ props }) {
    return (
        <div className={styles.imgContainer}>
            <Image src={props.src} alt={props.alt} fill />
        </div>
    )
}

export default function Hero({ props }) {
    return (
        <section className={styles.hero}>
            { props.align === 'right'
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
import styles from '@/styles/blocks.module.scss'
import Button from "@/components/Button";
import Image from "next/image";
import Title from "@/components/Sections/Title";

function TextContent({ props, index }) {
    return (
        <div className={`
            ${styles.textContainer}
            ${props.imageTextSection && `${styles.withImage}`}
        `}>
            <Title title={props.heading} index={index} />
            <div className={styles.textContainer}>
                <div className={ props.columns ? `${styles.columns}` : undefined} dangerouslySetInnerHTML={{__html: props.text.html}} />
            </div>
            { props.button && <Button link={props.button.link} text={props.button.text} color={props.colorThemeTextSection} />}
        </div>
    )
}

function ImageContainer({ props, left, index }) {
    var altText = props.altText ? props.altText : ''
    return (
        <div className={ left === 'true' ? `${styles.imageContainer} ${styles.imageOnLeft}` : `${styles.imageContainer}`} style={ props.pillShape ? { borderRadius: `${props.image.width / 2}px` } : null}>
            <Image
                src={props.image.url}
                alt={altText}
                height={props.image.height}
                width={props.image.width}
                style={props.pillShape ? { objectFit: 'cover'} : { objectFit: 'contain'}}
                priority={index === 0}
                sizes="(max-width: 840px) 100vw, (max-width: 1200px) 50vw"
            />
        </div>
    )
}

export default function TextSection({ props, index }) {

    return (
        <section
            className={`
                ${styles.text}
                ${props.colorThemeTextSection === 'Dark' && `${styles.withMargins} ${styles.lightFont}`}
                ${index === 0 && `${styles.topElement}`}
            `}
            style={props.colorThemeTextSection === 'Dark'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.inner}>
                {
                    props.alignTextSection && props.imageTextSection ?
                        <>
                            <TextContent props={props} index={index}/>
                            <ImageContainer props={props.imageTextSection} index={index}/>
                        </> :
                    !props.alignTextSection && props.imageTextSection ?
                        <>
                            <ImageContainer props={props.imageTextSection} left='true' index={index}/>
                            <TextContent props={props} index={index}/>
                        </> :
                        <TextContent props={props}/>
                }
            </div>
        </section>
    )
}
import styles from '@/styles/blocks.module.scss'
import Image from "next/image";

export default function ImageContainer({ type, props }) {
    return (
        <div className={styles.imageContainer} style={ type === 'Pill' ? { borderRadius: `${props.image.width / 2}px` } : null}>
            <Image
                src={props.image.url}
                alt={props.altText}
                height={props.image.height}
                width={props.image.width}
                style={type === 'Image' ? { objectFit: 'cover'} : { objectFit: 'contain'}}
            />
        </div>
    )
}
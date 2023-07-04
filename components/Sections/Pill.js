import styles from "@/styles/grid.module.scss";
import Image from "next/image";

export default function Pill({ props }) {
    return (
        <div className={styles.imageContainer} style={{ borderRadius: `${props.image.width / 2}px` }}>
            <Image
                src={props.image.url}
                alt={props.altText}
                height={props.image.height}
                width={props.image.width}
                style={{ objectFit: 'cover'}}
            />
        </div>
    )
}
import styles from '@/styles/grid.module.scss'
import Pill from "@/components/Sections/Pill";
import Image from "next/image";
import Link from "next/link";

export default function Grid({ props, index }) {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2>{props.gridHeading}</h2>
                <div className={styles.grid}>
                    { props.gridColumns && props.gridColumns.map((column, i) => (
                        <div key={i} className={styles.column}>
                            { column.columnImage && column.columnImage.pillShape ?
                                <Pill props={column.columnImage}/> :
                                <Image
                                    src={column.columnImage.image.url}
                                    alt={column.columnImage.altText}
                                    height={column.columnImage.image.height}
                                    width={column.columnImage.image.width}
                                    style={{ objectFit: 'cover'}}
                                />
                            }
                            { column.columnTitle && <p className={styles.title}>{column.columnTitle}</p>}
                            { column.columnText && <p className={styles.text}>{column.columnText}</p>}
                            { column.link && <Link href={column.link} className={styles.link}>{column.linkText}</Link>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
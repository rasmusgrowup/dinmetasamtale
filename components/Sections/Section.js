import styles from "@/styles/blocks.module.scss";
import Text from "@/components/Sections/Text";
import Testimonial from "@/components/Sections/Testimonial";
import Staff from "@/components/Sections/Staff";
import Title from "@/components/Sections/Title";
import Button from "@/components/Button";
import ImageContainer from "@/components/Sections/ImageContainer";

export default function Section ({ props, index }) {
    return (
        <section
            className={`
                ${styles.section}
                ${props.colorTheme === 'Dark' ? `${styles.withMargins} ${styles.lightFont}` : undefined}
                ${index === 0 ? `${styles.topElement}` : undefined}
            `}
            style={props.colorTheme === 'Dark'
                ? {backgroundColor: 'var(--color-brown)'}
                : {backgroundColor: 'var(--color-earth)'}
            }
        >
            <div className={styles.inner}>
                { props.blocks && props.blocks.map((block) => (
                    <div key={block.id} className={styles.col}>
                        <Title title={block.title} index={index}/>
                        { block.components && block.components.map((component, i) => {
                            switch (component.__typename) {
                                case 'Button': return <Button key={i} link={component.link} text={component.text} color={props.colorTheme} fullWidth={component.fullWidth}/>
                                case 'TextField': return <Text key={i} props={component}/>
                                case 'Image': case 'Pill': return <ImageContainer key={i} type={component.__typename} props={component}/>
                                case 'testimonial': return <Testimonial key={i} props={section} index={i}/>
                                case 'staff': return <Staff key={i} props={section} index={i}/>
                                default: return null;
                            }
                        })}
                    </div>
                ))}
            </div>
        </section>
    )
}
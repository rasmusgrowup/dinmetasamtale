import styles from '@/styles/blocks.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial({ props }) {
    var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section
            className={`
                ${styles.testimonial}
                ${styles.withMargins}
            `}
            style={props.colorTheme === 'Dark'
                ? {backgroundColor: 'var(--color-brown)', color: 'var(--color-light)'}
                : {backgroundColor: 'var(--color-earth)', color: 'var(--color-brown)'}
            }
        >
            <h2 className={styles.heading} style={ props.colorTheme === 'Dark' ? { color: 'var(--color-earth)'} : { color: 'var(--color-brown)'}}>{props.testimonialTitle}</h2>
            <Slider {...settings} className={ props.colorTheme === 'Dark' ? `${styles.slider} ${styles.dark}` : `${styles.slider} ${styles.light}`}>
                { props.quotes && props.quotes.map((quote, i) => (
                    <div key={i} className={styles.testimonialContainer}>
                        <p className={styles.review}>{quote.text}</p>
                        <p className={styles.name}>— {quote.person}</p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
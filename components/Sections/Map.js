import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from '@/styles/blocks.module.scss'
import Title from "@/components/Sections/Title";

const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"]
});

const mapOptions = {
    center: {
        lat: 0,
        lng: 0
    },
    zoom: 4
};

export default function Map({ props, index }) {
    const mapRef = useRef();
    const mapOptions = {
        center: {
            lat: props.coordinates.latitude,
            lng: props.coordinates.longitude
        },
        zoom: 12
    };

    useEffect(() => {
        loader
            .importLibrary('maps')
            .then(({Map}) => {
                new Map(mapRef.current, mapOptions);
            })
            .catch((e) => {
                // do something
            });
    }, []);
    return (
        <section className={styles.map}>
            <Title title={props.mapTitle} index={index} />
            <div className={styles.mapContainer} ref={mapRef} />
        </section>
    )
}
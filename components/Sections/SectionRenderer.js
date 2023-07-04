import Hero from "@/components/Sections/Hero";
import Section from "@/components/Sections/Section";
import TextSection from "@/components/Sections/TextSection";
import Banner from "@/components/Sections/Banner";
import Grid from "@/components/Sections/Grid";
import Testimonial from "@/components/Sections/Testimonial";
import Map from "@/components/Sections/Map";

export default function SectionRenderer({ sections: sections }) {
    //console.log(sections)
    return (
        <>
            { sections && sections.map((section, i) => {
                switch (section.__typename) {
                    case 'HeroSection': return <Hero key={i} props={section} index={i}/>
                    case 'Section': return <Section key={i} props={section} index={i}/>
                    case 'TextSection': return <TextSection key={i} props={section} index={i}/>
                    case 'Banner': return <Banner key={i} props={section} index={i}/>
                    case 'GridSection': return <Grid key={i} props={section} index={i} />
                    case 'Testimonial': return <Testimonial key={i} props={section} index={i}/>
                    case 'Map': return <Map key={i} props={section} index={i}/>
                    default: return <section key={i}></section>
                }
            })}
        </>
    )
}
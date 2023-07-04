import {getPage} from "../lib/hygraph";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import SectionRenderer from "@/components/Sections/SectionRenderer";

const blocks = [
    {
        type: 'hero',
        heading: 'Med metakognitiv terapi, lærer du at give slip og blive fri',
        backgroundColor: 'brown',
        image: {
            src: '/placeholder.jpg',
            alt: 'Alt text for placeholder image'
        },
        btn: 'Book her',
        btnUrl: 'https://system.easypractice.net/book/din-metasamtale?cookie_fixed=1#choose-service',
        align: 'right'
    },
    {
        type: 'text',
        heading: 'Når du gør mindre, virker det mere',
        backgroundColor: 'light',
        text: [
            'Når vi bruger lang tid på negative tanker og følelser, bekymringer, grublerier, og uhensigtsmæssige strategier, kan det naturligvis påvirke vores humør og have en indflydelse på vores mentale trivsel. \n \n',
            'Metakognitiv terapi adskiller sig meget fra andre former for terapi. Der fokuseres ikke på indhold af dine tanker og følelser, men snarere på hvordan du håndterer dem - og hvad du tænker og tror om dine tanker og følelser.'
        ],
        image: {
            src: '/Metateam-Fyn-LOGO.png',
            alt: 'Metateam fyn logo',
            height: 400,
            width: 360,
            objectFit: 'contain',
            rounded: false
        },
        btn: 'Læs mere',
        btnUrl: '/',
        align: 'left',
        columns: false
    },
    {
        type: 'pills',
        heading: 'Vi tilbyder',
        pills: [
            {
                src: '/placeholder-4.jpg',
                alt: 'alt text',
                text: 'Individuelt terapi'
            },
            {
                src: '/placeholder-2.jpg',
                alt: 'alt text',
                text: 'Terapi for børn'
            },
            {
                src: '/placeholder-3.jpg',
                alt: 'alt text',
                text: 'Gruppeterapi'
            }
        ],
    },
    {
        type: 'testimonial',
        heading: 'Vores klienter udtaler',
        backgroundColor: 'brown',
        text: {
            text: 'Når vi bruger lang tid på negative tanker og følelser, ' +
                'bekymringer, grublerier, og uhensigtsmæssige strategier, ' +
                'kan det naturligvis påvirke vores humør og have en indflydelse ' +
                'på vores mentale trivsel.',
            name: 'Maria',
            age: '31'
        }
    }
]

export default function Home({page}) {
    return (
        <>
            {page.header && <Header header={page.header}/>}
            {page.sections && <SectionRenderer sections={page.sections}/>}
            {page.footer && <Footer footer={page.footer}/>}
        </>
    )
}

export async function getStaticProps() {
    const page = await getPage("home")
    return {
        props: {
            page
        },
    }
}

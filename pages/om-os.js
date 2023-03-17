import BlockRenderer from "@/components/Blocks/BlockRenderer";

const blocks = [
    {
        type: 'staff',
        heading: 'Mød dine terapeuter',
        backgroundColor: 'light',
        staff: [
            {
                name: 'Ann Berit Nørager Jary',
                title: 'MCT-I Certificeret Metakognitiv terapeut Ved Dr.Adrian Wells og Dr. Hans Nordahl',
                image: {
                    src: '/Berit_bw.jpg',
                    alt: 'Ann Berit Nørager Jary',
                    height: 625,
                    width: 500
                },
                mail: 'ann@dinmetasamtale.dk'
            },
            {
                name: 'Hilde K. Jensen',
                title: 'MCT-I Certificeret Metakognitiv terapeut Ved Dr.Adrian Wells og Dr. Hans Nordahl',
                image: {
                    src: '/Hilde_alt.jpg',
                    alt: 'Hilde K. Jensen',
                    height: 625,
                    width: 500
                },
                mail: 'hilde@dinmetasamtale.dk'
            }
        ]
    },
    {
        type: 'testimonial',
        heading: 'Vores klienter udtaler',
        backgroundColor: 'brown',
        text: {
            text:   'Når vi bruger lang tid på negative tanker og følelser, ' +
                'bekymringer, grublerier, og uhensigtsmæssige strategier, ' +
                'kan det naturligvis påvirke vores humør og have en indflydelse ' +
                'på vores mentale trivsel.',
            name:   'Maria',
            age:    '31'
        }
    }
]

export default function Page() {
    return (
        <>
            <BlockRenderer blocks={blocks} />
        </>
    )
}

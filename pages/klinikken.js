import BlockRenderer from "@/components/Blocks/BlockRenderer";

const blocks = [
    {
        type: 'hero',
        heading: 'Behandling i varme og trygge omgivelser',
        backgroundColor: 'brown',
        image: {
            src: '/placeholder-8.jpg',
            alt: 'Alt text for placeholder image'
        },
        text: [
            'Det er vigtigt for os, at du kan føle dig velkommen i vores klinik. Derfor har vi indrettet os lyst og uformelt med varme farver og bløde møbler.\n \n',
            'Vi tager imod dig i vores reception hvor du kan sidde behageligt indtil det er din tur. Det er muligt at få en tår at drikke eller bruge vores toilet.\n\n',
            'Vi har gratis parkering foran klinikken og der er adgang for kørestolsbrugere i hele klinikken.\n\n',
            'Du finder klinikken på Malmøgade 10, 5000 Odense C.'
        ],
        align: 'left'
    }
]

export default function Page() {
    return (
        <>
            <BlockRenderer blocks={blocks} />
        </>
    )
}

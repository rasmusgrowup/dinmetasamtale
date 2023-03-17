import BlockRenderer from "@/components/Blocks/BlockRenderer";

const blocks = [
    {
        type: 'text',
        heading: 'Behandling med metakognitiv terapi',
        backgroundColor: 'light',
        text: [
            'Når vi bruger lang tid på negative tanker og følelser, bekymringer, grublerier, og uhensigtsmæssige strategier, kan det naturligvis påvirke vores humør og have en indflydelse på vores mentale trivsel. \n \n',
            'Læs mere herunder om, hvordan vi behandler med metakognitiv terapi.'
        ],
        image: {
            src: '/placeholder-5.jpg',
            alt: 'Placeholder alt text',
            height: 500,
            width: 360,
            objectFit: 'cover',
            rounded: true
        },
        align: 'left',
        columns: false
    },
    {
        type: 'text',
        heading: 'Hjælp til håndtering af dine tanker og følelser',
        backgroundColor: 'brown',
        text: [
            'Metakognitiv terapi adskiller sig meget fra andre former for terapi. Der fokuseres ikke på indhold af dine tanker og følelser, men snarere på hvordan du håndterer dem - og hvad du tænker og tror om dine tanker og følelser.\n \n',
            'Når vi bruger lang tid på negative tanker og følelser, bekymringer, grublerier, og uhensigtsmæssige strategier, kan det naturligvis påvirke vores humør og have en indflydelse på vores mentale trivsel.\n\n',
            'Vi kan miste interessen for aktiviteter, ændre kostvaner, føle lavt selvværd, få humørændringer, ligge vågen om natten, trække os socialt etc.\n\n',
            'Vi kan også opleve fysiske symptomer som åndenød, hjertebanken, svimmelhed, hovedpine, kvalme etc. Vi kan opleve, at vi er fanget i en ond cirkel.\n\n',
            'Med metakognitiv terapi hjælper vi dig, så du kan håndtere dine tanker og følelser.'
        ],
        align: 'left',
        columns: true
    },
    {
        type: 'text',
        heading: 'Angst, tankemylder, bekymringer',
        backgroundColor: 'light',
        text: [
            'Sindet er selvregulerende.\n \n',
            'Vi ved nu, at sindet er selvregulerende og følelser og tanker kommer og går. De er i andre ord flygtige. Det betyder at alle negative tanker passerer hvis du ikke bruger tid på dem. Ligesom et sår der heler, hvis du ikke kradser i det. Der sker altså ingen ophobning af negative tanker eller minder, hvis vi lader dem passere.\n\n',
            'Tidligere har vi opfattet sindet som en rygsæk eller en beholder, der gemmer på oplevelser og minder - og derfor kan blive overfyldt. Måske har du hørt udtrykket ‘Han har godt nok meget i rygsækken’. \n\n',
            'Vi har omkring 60 - 70.000 tanker i døgnet, og vi kan heldigvis ikke nå at tage stilling til dem alle. Derfor gemmer vi dem ikke i ‘rygsækken’.'
        ],
        image: {
            src: '/placeholder-6.jpg',
            alt: 'Placeholder alt text',
            height: 540,
            width: 360,
            objectFit: 'cover',
            rounded: true
        },
        align: 'left',
        columns: false
    },
    {
        type: 'text',
        heading: 'Depression, nedtrykthed, grublerier',
        backgroundColor: 'light',
        text: [
            'Det er helt almindeligt ved angst, at mærke fysiske reaktioner.\n \n',
            'Det kan være mavesmerter, hjertebanken, trykken for brystet, vejrtrækningsproblemer, tørhed i munden, kvalme, ondt i musklerne, koncentrationsproblemer etc.\n\n',
            'Symptomerne er mangfoldige, og fælles for dem er, at det er din krop der kommunikerer til dig, at du tænker angste tanker.'
        ],
        image: {
            src: '/placeholder-7.jpg',
            alt: 'Placeholder alt text',
            height: 480,
            width: 360,
            objectFit: 'cover',
            rounded: true
        },
        align: 'right',
        columns: false
    },
    {
        type: 'text',
        heading: 'Traumer, stress, sorg',
        backgroundColor: 'light',
        text: [
            'Metakognitiv terapi er en skånsom terapi.\n \n',
            'Skånsom, fordi vi ikke går ind og ripper op i alt det som er ubehageligt - eller i det som frygtes. Som metakognitive terapeuter hører vi kun ganske kort og overordnet om selve traumet, og hvad det er der fylder. Herefter behøver vi ikke at tale uddybende om traumet.\n\n',
            'Vi bruger i stedet terapien på øvelser, hvor du lærer hvordan du kan kontrollere hvad du giver din opmærksomhed, at afkoble fra dine negative triggertanker og eventuelle flashbacks. På den måde vil du føle dig mindre fastlåst, og du kan komme til at bruge tiden på mere af det, som du selv vælger at bruge tiden på. Metakognitiv terapi bruges både til nyere traumer og traumer der ligger flere år tilbage.\n\n',
            'Hjernen er plastisk og sindet er selvregulerende - det er altså ikke en permanent situation. Det kan hele som et sår, og hvis vi undlader at kradse i såret, og i stedet giver det luft og ro - vil det hele af sig selv. Det kan gøre, at vi kan få en intens følelse af frygt for eget eller andres liv, følelsen af at være fastlåst.\n\n',
            'Sorg er noget vi alle sammen kommer til at opleve, som en del af livet. Når vi mister nogen eller noget vi har kært. Sorg kan opleves meget forskelligt, og kan komme af forskellige situationer. Vi kan miste et familiemedlem, kæledyr, arbejde, få en livsvarig sygdom, viden om ikke at kunne blive forælder eller andet.\n\n',
            'Sorg er altså en naturlig del af vores liv. De fleste kommer selv igennem sorgen, mens andre bliver hængene i sorgen og har brug for lidt hjælp til at komme videre.\n\n',
            'Metakognitivt arbejder vi med, at sorgen er naturlig, men at det blandt andet er tiden vi bruger på den- der er vedligeholdende. Kan vi for eksempel godt være i sorg, men bruge mindre tid på tankerne omkring sorgen?\n\n',
            'En god idé, er derfor at arbejde med, at reducere tiden vi bruger på at bekymre os og være i sorg. Det gør vi blandt andet med øvelser, hvor du lærer at afkoble fra dine negative triggertanker, og hvor der arbejdes med, at kontrollere hvad du giver din opmærksomhed.'
        ],
        align: 'left',
        columns: true
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

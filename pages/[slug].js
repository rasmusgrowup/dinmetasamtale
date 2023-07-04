import Header from "@/components/Header/Header";
import SectionRenderer from "@/components/Sections/SectionRenderer";
import Footer from "@/components/Footer";
import {getPage, getAllSlugs} from "../lib/hygraph";

export default function Slug({ page }) {
    return (
        <>
            {page.header && <Header header={page.header}/>}
            {page.sections && <SectionRenderer sections={page.sections}/>}
            {page.footer && <Footer footer={page.footer}/>}
        </>
    )
}

export async function getStaticProps({ params }) {
    const page = await getPage(params.slug)
    return {
        props: {
            page
        },
    }
}

export async function getStaticPaths() {
    const pages = await getAllSlugs()
    return {
        paths: pages.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}
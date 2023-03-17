import Hero from "@/components/Blocks/Hero";
import Text from "@/components/Blocks/Text";
import Pills from "@/components/Blocks/Pills";
import Testimonial from "@/components/Blocks/Testimonial";
import Staff from "@/components/Blocks/Staff";

export default function BlockRenderer({ blocks }) {
    return (
        <>
            { blocks && blocks.map((block, i) => {
                switch (block.type) {
                    case 'hero':
                        return <Hero key={i} props={block} index={i}/>
                    case 'text':
                        return <Text key={i} props={block} index={i}/>
                    case 'pills':
                        return <Pills key={i} props={block} index={i}/>
                    case 'testimonial':
                        return <Testimonial key={i} props={block} index={i}/>
                    case 'staff':
                        return <Staff key={i} props={block} index={i}/>
                    default:
                        return <section key={i}>default block</section>
                }
            })}
        </>
    )
}
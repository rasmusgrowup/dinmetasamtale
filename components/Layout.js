import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function Layout({children}) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
import MapAndAddress from "@/components/common/MapAndAddress";
import Career from "@/components/contact2/Career";
import Hero from "@/components/contact2/Hero";
import Navbar2 from "@/components/navbar/Navbar2";


export default function Page() {
    return (
        <>
            <header>
                <Navbar2 />
            </header>
            <main>
                <Hero />
                <MapAndAddress />
                <Career />
            </main >
        </>
    )
}

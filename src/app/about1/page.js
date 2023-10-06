import Image from "next/image"
import About1 from "../../../public/oh6.jpg"
import Capabilities from "@/components/about1/Capabilities"
import Breadcrumbs from "@/components/common/Breadcrumbs"
import Leads from "@/components/common/Leads"
import Testimonials from "@/components/about1/Testimonials"
import Clients from "@/components/common/Clients"
import Awards from "@/components/about1/Awards"
import Collaborate from "@/components/about1/Collaborate"
import Navbar2 from "@/components/navbar/Navbar2"

const leadsAbout1 = [
    { count: 28, icon: "bi-box-fill", title: "designers and developers", description: "ur clients describe us as a product team which creates amazing UI/UX, by crafting top-notch UX." },
    { count: 345, icon: "bi-pentagon-half", title: "awards for digital innovation", description: "We’ve structured our workflow processes were from the funny the century rather." }
]

export default function page() {
    return (
        <>
            <header>
                <Navbar2 />
            </header>
            <main>
                <Image src={About1} alt="team-image" className="object-cover object-center h-[500px] w-full" />
                <Breadcrumbs />
                <Capabilities />
                <Leads data={leadsAbout1} />

                <div className="bg-[#1a191b]">
                    <Testimonials />
                </div>
                <div className="bg-[#111013]">
                    <Clients />
                </div>
                <Awards />
                <Collaborate />
            </main>
        </>
    )
}

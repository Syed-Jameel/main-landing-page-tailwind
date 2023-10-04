import Image from "next/image"
import About1 from "../../../public/about1.jpg"
import Capabilities from "@/components/about1/Capabilities"
import Breadcrumbs from "@/components/common/Breadcrumbs"
import Leads from "@/components/common/Leads"
import Testimonials from "@/components/about1/Testimonials"

const leadsAbout1 = [
    { count: 28, icon: "bi-box-fill", title: "designers and developers", description: "ur clients describe us as a product team which creates amazing UI/UX, by crafting top-notch UX." },
    { count: 345, icon: "bi-pentagon-half", title: "awards for digital innovation", description: "We’ve structured our workflow processes were from the funny the century rather." }
]

export default function page() {
    return (
        <main>
            <Image src={About1} alt="team-image" className="object-cover object-center h-auto w-full" />
            <div className="mx-auto max-w-2xl mt-0 sm:mt-0 px-4 py-0 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <Breadcrumbs />
                <Capabilities />
                <Leads data={leadsAbout1} />
            </div>
            <div className="bg-[#111013]">
                <Testimonials />
            </div>
            <div className="bg-[#111013]">
                <Testimonials />
            </div>
        </main>
    )
}

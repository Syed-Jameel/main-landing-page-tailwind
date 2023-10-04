import Hero from "@/components/home2/Hero";
import WhatWeDo from "@/components/home2/WhatWeDo";
import Capabilities from "@/components/home2/Capabilities";
import Showcase from "@/components/home2/Showcase";
import WebAndMobile from "@/components/home2/WebAndMobile";
import Clients from "@/components/common/Clients";
import Leads from "@/components/common/Leads";
import Testimonial from "@/components/home2/Testimonial";
import MapAndAddress from "@/components/common/MapAndAddress";
import Careers from "@/components/home2/Careers";

const leadshome2 = [
    { count: 28, icon: "bi-box-fill", title: "designers and developers", description: "Using year-over-year approaches and the latest technologies, we will ensure that your new website will be visible, accessible, and treads lightly." },
    { count: 35, icon: "bi-pentagon-half", title: "awards for digital innovation", description: "We’ve structured our workflow processes were from the funny the century rather, initial all the made, have spare to negatives." }
]


export default function page() {
    return (
        <main>
            <Hero />
            <div className="bg-[#111013]">
                <WhatWeDo />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <Capabilities />
                <Showcase />
            </div>
            <div className="bg-white">
                <WebAndMobile />
            </div>
            <div className="mx-auto max-w-2xl mt-0 sm:mt-0 px-4 py-0 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <Leads data={leadshome2} />
            </div>

            <Clients />
            <Testimonial />
            <MapAndAddress />
            <Careers />
        </main >
    )
}

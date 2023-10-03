import Hero from "@/components/home1/Hero";
import WhatWeDo from "@/components/home1/WhatWeDo";
import Capabilities from "@/components/home1/Capabilities";
import Showcase from "@/components/home1/Showcase";
import WebAndMobile from "@/components/home1/WebAndMobile";
import Clients from "@/components/home1/Clients";
import Leads from "@/components/home1/Leads";
import Testimonial from "@/components/home1/Testimonial";
import Contact from "@/components/home1/Contact";
import Careers from "@/components/home1/Careers";



export default function page() {
    return (
        <main className="">
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
            <Leads />
            <Clients />
            <Testimonial />
            <Contact />
            <Careers />
        </main >
    )
}

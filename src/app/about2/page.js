import Awards from '@/components/about2/Awards'
import Capabilities from '@/components/about2/Capabilities'
import Capabilities2 from '@/components/about2/Capabilities2'
import Collaborate from '@/components/about2/Collaborate'
import Hero from '@/components/about2/Hero'
import Leads from '@/components/about2/Leads'
import PlayVideo from '@/components/about2/PlayVideo'
import Services from '@/components/about2/Services'
import Testimonials from '@/components/about2/Testimonials'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Navbar2 from '@/components/navbar/Navbar2'

export default function page() {

    return (
        <>
            <header>
                <Navbar2 />
            </header>
            <main>
                <Hero />
                <Breadcrumbs />
                <Services />
                <Leads />
                <Capabilities />
                <Awards />
                <Testimonials />
                <Capabilities2 />
                <PlayVideo />
                <Collaborate />
            </main >
        </>
    )
}

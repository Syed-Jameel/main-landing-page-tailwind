import Hero from '@/components/about2/Hero'
import Leads from '@/components/about2/Leads'
import Services from '@/components/about2/Services'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import React from 'react'

export default function page() {

    return (
        <main>
            <div className='bg-white'>
                <div className="mx-auto max-w-2xl mt-12 sm:mt-16 px-0 pt-8 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <Hero />
                    <Breadcrumbs />
                    <Services />
                    <Leads />
                </div>
            </div>
        </main >
    )
}

import React from 'react'
import Hero from '../components/Hero'
import WeBuySection from '../components/home-sections/WeBuySection'
import OurProductionsSection from '../components/home-sections/OurProductionsSection'
import AboutUsSection from '../components/home-sections/AboutUsSection'
import ContactUsSection from '../components/home-sections/ContactUsSection'

export default function Home() {
    return (
        <div className='relative'>
            <Hero />
            <WeBuySection />
            <OurProductionsSection />
            <AboutUsSection />
            <ContactUsSection />
        </div>
    )
}


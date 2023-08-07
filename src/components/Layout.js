import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Features from './Features'
import Footer from './Footer'

import FAQ from './FAQ'
import Testimonial from './Testimonial'

function Layout() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Features/>
            <Testimonial/>
            <FAQ/>
         
            <Footer/>
     
        </div>
    )
}

export default Layout

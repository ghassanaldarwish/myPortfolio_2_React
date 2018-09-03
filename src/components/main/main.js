import React from 'react'

import Services from './services/services'
import OurProtfolio from './ourProtfolio/ourProtfolio'
import About from './about/about'
import OurTeam from './ourTeam/ourTeam'
import Contact from './contact/contact'


const main = (props) => (
    <main>
       <Services />
       <OurProtfolio />
       <About />
       <OurTeam />
       <Contact /> 
    </main>
)

export default main
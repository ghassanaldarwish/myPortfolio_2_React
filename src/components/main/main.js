import React from 'react'

import Services from './services/services'
import OurProtfolio from './ourProtfolio/ourProtfolio'
import About from './about/about'
import OurTeam from './ourTeam/ourTeam'
import Contact from './contact/contact'
import classes from './main.css'

import { Route, Switch } from 'react-router-dom'




const main = (props) => (
    <main className={classes.Main}>
        <Switch>

            <Route exact path='/' component={Services}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/protfolio' component={OurProtfolio}/>
            <Route exact path='/about'  component={About}/>
            <Route exact path='/team' component={OurTeam}/>
            <Route exact path='/contact' component={Contact}/>
             
       </Switch>
    </main>
)

export default main
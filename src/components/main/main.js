import React from 'react'

import Services from './services/services'
import OurProtfolio from './ourProtfolio/ourProtfolio'
import About from './about/about'
import OurTeam from './ourTeam/ourTeam'
import Contact from './contact/contact'
import Carousel from '../../components/header/carousel/carousel';
import './main.css'
import Test from './test'

import { Route, withRouter } from 'react-router-dom'

import axios from 'axios'

import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


import { spring, AnimatedSwitch } from 'react-router-transition';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtfolioCard from './ourProtfolio/protfolioCard/protfolioCard'


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


class main extends React.Component {





  render () {
    return(
      <main >
        <Route exact path='/' component={Carousel} />
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
    
    
          <Route exact path='/services' render={() => <Services serviceInfos={this.props.serviceInfos} />} />
          <Route exact path='/protfolio' render={() => <OurProtfolio protfolioInfos={this.props.protfolioInfos} />} />
    
          <Route exact path='/:id' component={Test} />
    
          <Route exact path='/about' component={About} />
          <Route exact path='/team' component={OurTeam} />
          <Route exact path='/contact' component={Contact} />
         
    
    
    
        </AnimatedSwitch>
      </main>
    )
  }
}



export default withRouter(main)
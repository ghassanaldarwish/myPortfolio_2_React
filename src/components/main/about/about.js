import React from 'react'

import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


import './about.css'

import aboutImg1 from '../../../assets/s1.png'
import aboutImg2 from '../../../assets/s2.jpeg'
import aboutImg3 from '../../../assets/s3.png'

const about = (props) => (
    <section>
    <Container>
    <Row>
     <Col><h2>About Us</h2></Col>
   </Row>
   <Row>
     <Col className='underTitle'><p >The Following Is A Simple Story About Us..</p></Col>
   </Row>


   <Row className='aboutImgRow'>
     <Col><img src={aboutImg1} alt="..." class="img-thumbnail" /></Col>
     <Col>
        <h4>The Following Is A Simple Story About Us..</h4>
        <p>
           The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us..
        </p>
     </Col>
     
   </Row>

   <Row className='aboutImgRow'>
     
     <Col>
        <h4>The Following Is A Simple Story About Us..</h4>
        <p>
           The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us..
        </p>
     </Col>
     <Col><img src={aboutImg2} alt="..." class="img-thumbnail" /></Col>
   </Row>

   <Row className='aboutImgRow'>
     <Col><img src={aboutImg3} alt="..." class="img-thumbnail" /></Col>
     <Col>
        <h4>The Following Is A Simple Story About Us..</h4>
        <p>
           The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us.. The Following Is A Simple Story About Us..
        </p>
     </Col>
   </Row>

  

    </Container>


</section>
)

export default about
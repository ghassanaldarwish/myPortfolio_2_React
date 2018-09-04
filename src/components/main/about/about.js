import React from 'react'

import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import './about.css'

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
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
     <Col><p >The Following Is A Simple Story About Us..</p></Col>
   </Row>

   <Row className='aboutImgRow'>
     
     <Col><p >The Following Is A Simple Story About Us..</p></Col>
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
   </Row>

   <Row className='aboutImgRow'>
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
     <Col><p>The Following Is A Simple Story About Us..</p></Col>
   </Row>

   <Row className='aboutImgRow'>
     
     <Col><p>The Following Is A Simple Story About Us..</p></Col>
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
   </Row>

    </Container>


</section>
)

export default about
import React from 'react'


import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './ourTeam.css'

const ourTeam = (props) => (
   
    <section className='ourTeam'>
    <Container>
    <Row>
     <Col><h2>Our Amazing Team</h2></Col>
   </Row>
   <Row>
     <Col className='underTitle'><p >Always We Are Happy To Help You</p></Col>
   </Row>


   <Row >
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
     <Col><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="..." class="img-thumbnail" /></Col>
   </Row>

 

    </Container>


</section>
)

export default ourTeam
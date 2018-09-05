import React from 'react'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './ourTeam.css'
import teamImg1 from '../../../assets/t1.jpeg'
import teamImg2 from '../../../assets/t2.png'
import teamImg3 from '../../../assets/t3.jpeg'

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
        <Col>
          <img src={teamImg1} alt="..." class="img-thumbnail" />
          <h5>Comming Soon....</h5>
          <Row className='iconMedia'>
            <Col sm={{ size: 1, offset: 3 }}><span><FontAwesomeIcon icon={faFacebookF} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faTwitter} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faCodepen} /></span></Col>
          </Row >
        </Col>

        <Col>
          <img src={teamImg2} alt="..." class="img-thumbnail" />
          <h5>Ghassan Aldarwish</h5>
          <Row className='iconMedia'>
            <Col sm={{ size: 1, offset: 3 }}><span><FontAwesomeIcon icon={faFacebookF} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faTwitter} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faCodepen} /></span></Col>
          </Row >
        </Col>
        <Col>
          <img src={teamImg3} alt="..." class="img-thumbnail" />
          <h5>Comming Soon....</h5>
          <Row className='iconMedia'>
            <Col sm={{ size: 1, offset: 3 }}><span><FontAwesomeIcon icon={faFacebookF} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faTwitter} /></span></Col>
            <Col sm={{ size: 1, offset: 1 }}><span><FontAwesomeIcon icon={faCodepen} /></span></Col>
          </Row >
        </Col>
      </Row>



    </Container>


  </section>
)

export default ourTeam
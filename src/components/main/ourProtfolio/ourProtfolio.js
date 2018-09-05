import React from 'react'



import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Link } from 'react-router-dom'
import axios from 'axios'

import proImg1 from '../../../assets/p1.jpeg'
import proImg2 from '../../../assets/p2.jpeg'
import proImg3 from '../../../assets/p3.jpeg'
import proImg4 from '../../../assets/p4.jpeg'
import proImg5 from '../../../assets/p5.png'
import proImg6 from '../../../assets/p6.jpeg'

   

import './ourProtfolio.css'

class ourProtfolio extends React.Component{

    state = {
        protfolioInfos: []
      }
    
      componentDidMount (){
        axios.get('http://localhost:4000/api/protfolio')
        .then(res => console.log(this.setState({protfolioInfos: res.data}) ))
      }

    render() {
        return (
            <section className='ourProtfolio'>
            <Container>
            <Row>
             <Col><h2>Our Protfolio</h2></Col>
           </Row>
           <Row>
             <Col><p className='underTitle'>The Following Is Part Of Our Project</p></Col>
           </Row>
        
        
           
        
        
           <Row className='cardRow'>

            

            <Col>
                <Card>
                    <CardImg top width="100%" src='/static/media/p1.d5310d8e.jpeg' alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button><Link to='/project/1'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
        
           <Col>
                <Card>
                    <CardImg top width="100%" src={proImg2} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button><Link to='/project/2'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
          
        
           <Col>
                <Card>
                    <CardImg top width="100%" src={proImg3} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button><Link to='/project/3'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
        
           </Row>
        
           <Row className='cardRow'>
            <Col>
                <Card>
                    <CardImg top width="100%" src={proImg4} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button><Link to='/project/4'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
        
           <Col>
                <Card>
                    <CardImg top width="100%" src={proImg5} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button><Link to='/project/5'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
          
        
           <Col>
                <Card>
                    <CardImg top width="100%" src={proImg6} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button ><Link  to='/project/6'>Button</Link></Button>
                    </CardBody>
                </Card>
            </Col>
            
           </Row>
        
        
          
            
          
        
            </Container>
        
        
        </section>
        )
    }
} 



export default ourProtfolio
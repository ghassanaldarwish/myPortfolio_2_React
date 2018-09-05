import React from 'react'



import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Link } from 'react-router-dom'
import axios from 'axios'

import proImg1 from '../../../assets/p1.jpeg'
import proImg2 from '../../../assets/p2.jpeg'
import proImg3 from '../../../assets/p3.jpeg'
import proImg4 from '../../../assets/p4.jpeg'
import proImg5 from '../../../assets/p5.png'
import proImg6 from '../../../assets/p6.jpeg'



import './ourProtfolio.css'

class ourProtfolio extends React.Component {

    state = {
        protfolioInfos: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/protfolio')
            .then(res => console.log(this.setState({ protfolioInfos: res.data })))
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

                        {this.state.protfolioInfos.map((protfolioInfo,index )=> {
                            return (
                                <Col key={index}>
                                    <Card>
                                        <CardImg top width="100%" src={protfolioInfo.url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{protfolioInfo.title}</CardTitle>
                                            
                                            <CardText>{protfolioInfo.body}</CardText>
                                            <Button><Link to={`/project/${index+1}`}>project</Link></Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}

                     

                    </Row>






                </Container>


            </section>
        )
    }
}



export default ourProtfolio
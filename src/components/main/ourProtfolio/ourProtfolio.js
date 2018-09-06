import React from 'react'



import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Link, withRouter } from 'react-router-dom'

import ProtfolioCard from './protfolioCard/protfolioCard'


import './ourProtfolio.css'

class ourProtfolio extends React.Component {


    render() {
        console.log(this.props)
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

                        {this.props.protfolioInfos.map((protfolioInfo,index)=> {
                            return (
                                <ProtfolioCard protfolioInfo={protfolioInfo} index={index} />
                            )
                        })}
                    </Row>

                </Container>

            </section>
        )
    }
}



export default withRouter(ourProtfolio)
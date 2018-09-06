import React from 'react'

import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'




const protfolioCard = (props) => (
  
    <Col >
    <Card>
        <CardImg top width="100%" src={props.protfolioInfo.url} alt="Card image cap" />
        <CardBody>
            <CardTitle>{props.protfolioInfo.title}</CardTitle>
            
            <CardText>{props.protfolioInfo.body}</CardText>
            <Button><Link exact to={`/${props.index+1}`} >project</Link></Button>
        </CardBody>
    </Card>
  </Col>

)

export default withRouter(protfolioCard)
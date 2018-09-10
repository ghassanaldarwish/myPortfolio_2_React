import React from 'react'

import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'






class singleProject extends React.Component {


    state = {

        protfolioInfos: null
    }

    componentDidMount() {

        axios.get('http://localhost:4000/api/protfolio')
            .then(res => console.log(this.setState({ protfolioInfos: res.data })))

    }

    render() {
        let title = null
        let body = null
        let url = null
        let projectUrl = null
        if (this.state.protfolioInfos) {
            title = this.state.protfolioInfos[this.props.match.params.id - 1].title
            body = this.state.protfolioInfos[this.props.match.params.id - 1].body
            projectUrl = this.state.protfolioInfos[this.props.match.params.id - 1].projectUrl
            url = this.state.protfolioInfos[this.props.match.params.id - 1].url
               
           
            
        }

         
          return (
            <Container>
                 <Row>
            <Col md={{ size: 4, offset: 4 }} >
            <Card>
               <a href={projectUrl} target="_blank"> <CardImg top width="100%" src={url} alt="Card image cap" /></a>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    
                    <CardText>{body}</CardText>
                    
                </CardBody>
            </Card>
          </Col>
          </Row>
          </Container>
          )
             
            
            
        

    }
}

export default singleProject

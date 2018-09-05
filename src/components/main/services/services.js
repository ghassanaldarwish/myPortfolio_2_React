import React from 'react'

import axios from 'axios'

import { Container, Row, Col } from 'reactstrap';

import './services.css'


class services extends React.Component {


  state = {
    serviceInfos: []
  }

  componentDidMount (){
    axios.get('http://localhost:4000/api/services')
    .then(res => console.log(this.setState({serviceInfos: res.data}) ))
  }

  render () {
    return (
      <section className='services'>
           <Container>
           <Row>
            <Col><h2>services</h2></Col>
          </Row>
          <Row>
            <Col><p className='underTitle'>Dedicated web programming services to suit your needs. Contact us!</p></Col>
          </Row>
  
  
          <Row>
            {this.state.serviceInfos.map(serviceInfo =>{
              return (
                <Col key={serviceInfo.title}>
                <Row>
                     <Col><h3> {serviceInfo.title}</h3></Col>
                </Row>
                <Row>
                     <Col>
                        <p>
                            {serviceInfo.body}
                        </p>
                    
                     </Col>
                     
                </Row>
              </Col>
    
              )
            } )}
           
  
          </Row>
  
  
          
  
           </Container>
  
  
      </section>
    
  )
  }
}




export default services
import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

import './contact.css'

//import contactImgSvg from '../../../assets/map.svg'

const contact = (props) => (
    <section class="contactMe">

    <div class="container ">

        <Row>
        <Col><h2>Contact Us</h2></Col>
        </Row>
        <Row>
            <Col><p className='underTitle'>We Help You Build A Fantastic Website.</p></Col>
        </Row>
        
    <Form>
       
        <FormGroup>
          <Label for="examplename">name</Label>
          <Input type="name" name="name" id="examplename" placeholder="name placeholder" />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email a placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSubject">Subject</Label>
          <Input type="subject" name="subject" id="examplesubject" placeholder="Subject a placeholder" />
        </FormGroup>

      
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
       
         
         
        <Button>Submit</Button>
      </Form>

    </div>

  </section>




)

export default contact
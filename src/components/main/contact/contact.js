import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './contact.css'

//import contactImgSvg from '../../../assets/map.svg'

const contact = (props) => (
    <section class="contactMe " id="contact" >

    <div class="container ">
    
    <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Subject</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
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
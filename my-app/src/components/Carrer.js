import React, { useState } from 'react'
import Experience from './Experience';
import Education from './Education';
import Resume from './Resume';

import {Button, Container,Row,Col} from 'react-bootstrap'
function Carrer() {
  const [cursection,setsection]=useState('');

  const updateSection=(value)=>{
    setsection(value);
    console.log(cursection);

  }
  return (
    <section id='experiences' className='experience ' >
      <Container>
        <Row>

        <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-evenly mb-4 p-2 bg-dark swap-section">
      <div className='d-flex justify-content-space-between fs-5'>
         <Button variant="outline-light" onClick={()=>updateSection('education')} className='p-2 mx-2 fs-5'>Education</Button>
          <Button variant="outline-light" onClick={()=>updateSection('experience')} className='p-2 mx-2 fs-5'>Experience</Button>
           <Button variant="outline-light"onClick={()=>updateSection('resume')}  className='p-2 mx-2 fs-5'>Resume</Button>

      </div>
      </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        {cursection=='education'?<Education/>:""}
        {cursection=='experience'?<Experience/>:""}
        {cursection=='resume'?<Resume/>:""}
        </Col>
      </Row>
      </Container>
    </section>
  )
}

export default Carrer
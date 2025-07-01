import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ECard from './ECard.js';
import { Robot } from 'react-bootstrap-icons';
function Education() {
  const edu=[
    {
    area:"B.Tech",
    branch:"CSE(AIML)",
    clg:"Sree Vidyanikethan Engineering College",
    year:"2021-2025",
    gpa:'8.75 / 10.0'
    },
    {
    area:"Class XII",
    branch:"M.P.C",
    clg:"AP Resdential Junior College",
    year:"2019-2021",
    gpa:'95.9 %'
    },
    {
    area:"Class X",
    branch:"General",
    clg:"Adarsha Vidyalaya School",
    year:"2018-2019",
    gpa:'9.2 / 10.0'
    }
  ]
  return (
    <section id='education'>
      <Container>
        <Row>
           {edu.map((project, index) => (
    <Col key={index} xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
      <ECard {...project} />
    </Col>
  ))}
        </Row>
      </Container>
       
    </section>
  )
}

export default Education

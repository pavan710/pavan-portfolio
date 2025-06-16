import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import React from 'react'

function ProjectCard({title, description,techstack,github }) {
  return (
      <Card style={{ width: '28rem' }} className="card-overview text-white"> 
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
      
      <p className=""> {description}</p>

        <Card.Text>
   {techstack}
        </Card.Text>

        <Card.Link href={github}>GitHub Link</Card.Link>
        <Card.Link href="#">Live Link</Card.Link>
      </Card.Body>
    </Card>
  )
}






export default ProjectCard;


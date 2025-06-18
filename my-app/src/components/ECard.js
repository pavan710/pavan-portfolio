import React from 'react'
import { Card } from 'react-bootstrap'
function ECard({area,branch,clg,year,gpa}) {
  return (
          <Card border="info" style={{ width: '18rem' }} className='bg-dark'>
        <Card.Header className='text-info'>{area}</Card.Header>
        <Card.Body className='text-start'>
          <Card.Title className='text-info'>{clg}</Card.Title>
          <Card.Text className='text-light py-1'> 
           <span>Branch : </span>{branch}
          </Card.Text>
           <Card.Text className='text-light py-1'> 
           <span>Duration : </span>{year}
          </Card.Text>

         <Card.Text className='text-light py-1'> 
           <span>Result : </span>{gpa}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default ECard
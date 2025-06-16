import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Col,Row } from 'react-bootstrap';
import skill1 from '../assets/img/skill1.svg';
import skill2 from '../assets/img/skill2.svg';
import javascript from '../assets/img/javascript.svg';
import reactjs from '../assets/img/reactjs.svg';
import node from '../assets/img/nodejs.svg';
import java from '../assets/img/java.svg';


function Skills() {


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skills-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>Check Out My Tech Stack</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                         <div className='item'>
                            <img src={java} alt='Image'/>
                            <h5>Java Programming</h5>
                        </div>
                         <div className='item'>
                            <img src={reactjs} alt='Image'/>
                            <h5>React JS</h5>
                        </div>
                          <div className='item'>
                            <img src={node} alt='Image'/>
                            <h5>Node JS</h5>
                            
                        </div>

                         <div className='item'>
                            <img src={javascript} alt='Image'/>
                            <h5>Javascript</h5>
                        </div>
                        <div className='item'>
                            <img src={skill1} alt='Image'/>
                            <h5>HTML</h5>
                        </div>
                         <div className='item'>
                            <img src={skill2} alt='Image'/>
                            <h5>CSS</h5>
                        </div>
                        
                        
                       
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
       

    </section>
  )
}

export default Skills
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';


import React from 'react'

function Project() {

      const projects = [
    {
      title: "Blood Bank Management System",
      description: "Role-based blood bank system with donation tracking and analytics.",
      techstack:"TechStack: ReactJS, NodeJS, MongoDB",
      github:"https://github.com/pavan710/BloodBank"
    },
    {
      title: "Chatter-Box",
      description: "A chat app with Firebase authentication & messaging.",
      techstack:"TechStack: ReactJs, FireStore",
      github:"https://github.com/pavan710/ChatterBox-ReactJs"
    },
    {
      title: "Drowsiness Detection",
      description: "Real-time drowsiness detection using facial landmarks and alert system.",
      techstack:"TechStack: Python",
      github:""
    },
     {
      title: "Sudoku Solver",
      description: "ReactJs based Sudoku game.",
      techstack:"TechStack: ReactJs",
      github:"https://github.com/pavan710/Sudoko-Solver-ReactJs"
    },
     {
      title: "Room Chat",
      description: "ReactJs based real-time group chat app.",
      techstack:"TechStack: ReactJs",
      github:"https://github.com/pavan710/Groupchat"
    },
   
    
  ];
  return (
        <section className="project" id="projects">
      <Container >
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I explored web development area and built some web applications using ReactJs as frontend framework and NodeJs as the backend technology and used MongoDB, SQL, firestore as a database.</p>
               <Row className="row-card">
  {projects.map((project, index) => (
    <Col key={index} xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
      <ProjectCard {...project} />
    </Col>
  ))}
</Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
  
}

export default Project;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog-App"
              description="Learn to create a modern blog app using React for the frontend, Tailwind CSS for styling, and Appwrite as the backend service.- Develop features for creating, updating, and deleting blog posts with seamless integration."
              ghLink="https://github.com/jeet0108/appWriteMegaBlog"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="e-commerce"
              description="Crafted a dynamic website leveraging React.js with CSS for styling, incorporating React Hooks for statemanagement, React Router for navigation, and Firebase database for real-time data storage andretrieval."
              ghLink="https://github.com/jeet0108/Time-Trove"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="Discover my journey and projects through a seamless and engaging user experience. Built with React, my portfolio showcases a dynamic interface and responsive design. Explore my skills, projects, and background, and get in touch to collaborate on exciting opportunities!"
              ghLink="https://github.com/jeet0108/Portfolio/tree/master"
              // demoLink=""              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

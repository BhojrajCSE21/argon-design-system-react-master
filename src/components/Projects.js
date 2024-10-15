import React from "react";
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink } from "reactstrap";
import "assets/vendor/nucleo/css/nucleo.css"; 
import "assets/vendor/font-awesome/css/font-awesome.min.css"; 
import image1 from "assets/img/icons/13600b28bef66ce5b57bd72df867de72.jpg";
import image2 from "assets/img/icons/Price_Benchmarking__.jpg";
import image3 from "assets/img/icons/OIP.jpg";

// Dummy project data
const projectData = [
  {
    title: "Business Card Generator",
    description: "Web Developer",
    technologies: ["SvelteKit", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/business-card-generator",
    image: image1, // Use imported images
    social: {
      twitter: "#", // Replace with actual URL
      facebook: "#", // Replace with actual URL
      dribbble: "#", // Replace with actual URL
    },
  },
  {
    title: "Price Benchmarking System",
    description: "Marketing Strategist",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/price-benchmarking",
    image: image2, // Use imported images
    social: {
      twitter: "#", // Replace with actual URL
      facebook: "#", // Replace with actual URL
      dribbble: "#", // Replace with actual URL
    },
  },
  {
    title: "React Game Project",
    description: "UI/UX Designer",
    technologies: ["React", "Node.js", "Vite"],
    link: "https://github.com/yourusername/react-game",
    image: image3, // Use imported images
    social: {
      twitter: "#", // Replace with actual URL
      facebook: "#", // Replace with actual URL
      dribbble: "#", // Replace with actual URL
    },
  },
];

const Projects = () => {
  return (
    <section className="section-projects py-5">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row className="justify-content-center">
          {projectData.map((project, index) => (
            <Col lg="3" md="6" key={index} className="mb-4 text-center">
              <Card className="shadow border-0 h-100">
                <div className="card-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-circle"
                    style={{ width: "150px", height: "150px", objectFit: "cover", marginTop: "20px" }}
                  />
                </div>
                <CardBody>
                  <h5 className="text-dark">{project.title}</h5>
                  <p className="text-muted">{project.description}</p>
                  <div className="social-links d-flex justify-content-center">
                    <Nav className="nav-pills-circle" pills>
                      {project.social.twitter && (
                        <NavItem>
                          <NavLink
                            className="rounded-circle"
                            href={project.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter"></i>
                          </NavLink>
                        </NavItem>
                      )}
                      {project.social.facebook && (
                        <NavItem>
                          <NavLink
                            className="rounded-circle"
                            href={project.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook"></i>
                          </NavLink>
                        </NavItem>
                      )}
                      {project.social.dribbble && (
                        <NavItem>
                          <NavLink
                            className="rounded-circle"
                            href={project.social.dribbble}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-dribbble"></i>
                          </NavLink>
                        </NavItem>
                      )}
                    </Nav>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .section-projects {
          background: #f8f9fa;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .rounded-circle {
          border-radius: 50% !important;
        }
        .social-links .nav-pills .nav-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #fff;
          background-color: #007bff;
          margin-right: 10px;
        }
        .social-links .nav-pills .nav-link:hover {
          background-color: #0056b3;
        }
      `}</style>
    </section>
  );
};

export default Projects;

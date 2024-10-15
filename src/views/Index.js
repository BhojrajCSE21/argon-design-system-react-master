import React from "react";
import SkillsSection from "../components/SkillsSection";
import ContactForm from "../components/ContactForm"; // Import the new ContactForm component
import WorkExperience from "../components/WorkExperience"; // Import the WorkExperience component

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";
import Projects from "components/Projects";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocused: false,
      emailFocused: false,
    };
    this.skillsRef = React.createRef(); // Create a reference for the Skills section
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  scrollToSkills = () => {
    // Scroll to the Skills section
    window.scrollTo({
      top: this.skillsRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* Home Page - Introduction */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="align-items-center">
                    <Col lg="6">
                      <img
                        src={require("assets/img/icons/0733ba760b29378474dea0fdbcb97107.png")}
                        alt="Profile"
                        className="img-fluid rounded-circle mb-0"
                        style={{ maxWidth: "300px" }}
                      />
                    </Col>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Hello, I'm Rohn Wisely{" "}
                        <span>UI/UX Designer</span>
                      </h1>
                      <p className="lead text-white">
                        I'm a creative and passionate UI/UX Designer, with experience in web development and print media. I love crafting innovative solutions and turning complex problems into simple and intuitive designs. My goal is to enhance user experiences by integrating functionality with aesthetics, ensuring that every interaction is seamless and engaging.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="#profile-details"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-user" />
                          </span>
                          <span className="btn-inner--text">My Profile</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>
          </div>

          {/* Profile Details Page */}
          <section id="profile-details" className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h2 className="text-center">About Me</h2>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-hat-3" />
                          </div>
                          <h6 className="text-primary text-uppercase">Biography</h6>
                          <p className="description mt-3">
                          I have been working in UI/UX Design for over 5 years, focusing on delivering high-quality designs and solutions for my clients. Throughout my career, I have collaborated with diverse teams. 
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-ruler-pencil" />
                          </div>
                          <h6 className="text-success text-uppercase">Skills</h6>
                          <p className="description mt-3">
                            Expert in: [List of your skills such as Web Design, UI/UX, Frontend Development, etc.].
                          </p>
                          <Button
                            color="primary"
                            onClick={this.scrollToSkills} // Scroll to Skills section when clicked
                          >
                            View More
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-archive-2" />
                          </div>
                          <h6 className="text-warning text-uppercase">Projects & Achievements</h6>
                          <p className="description mt-3">
                          Notable Projects: I successfully led the redesign of an e-commerce website, enhancing user experience and increasing conversion rates by 25% benefiting the client as well as resturant. 
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Skills Section */}
          <div ref={this.skillsRef}>
            <SkillsSection />
          </div>

          {/* Work Experience Section */}
          <WorkExperience />

          {/* Project section */}
          <Projects />

          {/* Contact Section */}
          <ContactForm />


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default ProfilePage;

import React from "react";
import { Container, Row, Col, Card, CardBody, Progress } from "reactstrap";

class SkillsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          name: "JavaScript",
          percentage: 85,
          color: "info",
          image: require("assets/img/icons/js.png"),
        },
        {
          name: "React",
          percentage: 90,
          color: "success",
          image: require("assets/img/icons/physics.png"),
        },
        {
          name: "CSS",
          percentage: 80,
          color: "warning",
          image: require("assets/img/icons/css-3.png"),
        },
        {
          name: "HTML",
          percentage: 95,
          color: "primary",
          image: require("assets/img/icons/html-5.png"), // You can use require for local images
        },
        {
          name: "Node.js",
          percentage: 75,
          color: "danger",
          image: require("assets/img/icons/node-js.png"),
        },
      ],
    };
  }

  render() {
    return (
      <section className="section section-skills">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="8" className="text-center">
              <h2 className="display-4">My Skills</h2>
              <p className="lead text-muted">
                Here’s a look at some of the key skills I’ve honed over the years.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <Card className="shadow">
                <CardBody className="py-5">
                  {/* Skills with Images and Progress Bars */}
                  {this.state.skills.map((skill, index) => (
                    <Row className="align-items-center mb-4" key={index}>
                      <Col xs="2" className="text-center">
                        {/* Skill Image */}
                        <img
                          alt={`${skill.name} icon`}
                          src={skill.image}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Col>
                      <Col xs="10">
                        {/* Skill Name */}
                        <h5 className="mb-0">{skill.name}</h5>
                        {/* Progress Bar */}
                        <Progress
                          max="100"
                          value={skill.percentage}
                          color={skill.color}
                          className="mb-2"
                        />
                        <p className="text-muted small">
                          {skill.percentage}% proficiency
                        </p>
                      </Col>
                    </Row>
                  ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SkillsSection;

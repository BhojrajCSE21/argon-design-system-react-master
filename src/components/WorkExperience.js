import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";


const workExperienceData = [
  {
    number: 1,
    title: "Frontend Developer",
    company: "Company A",
    duration: "Jan 2021 - Present",
    description: "Worked on developing user-friendly web applications using React.",
    position: "left", // Explicitly placed on the left
  },
  {
    number: 2,
    title: "Web Developer Intern",
    company: "Company B",
    duration: "Jun 2020 - Dec 2020",
    description: "Assisted in the development of e-commerce websites.",
    position: "right", // Explicitly placed on the right
  },
  {
    number: 3,
    title: "UI/UX Designer",
    company: "Company C",
    duration: "Jan 2019 - May 2020",
    description: "Designed and prototyped user interfaces for mobile applications.",
    position: "left", // Explicitly placed on the left
  },
];

const WorkExperience = () => {
  return (
    <section className="section section-work-experience">
      <Container>
        <h2 className="text-center text-white">Work Experience</h2>
        <Row className="justify-content-start">
          <Col lg="12"> {/* Set this column to cover full width */}
            <div className="timeline">
              {workExperienceData.map((job, index) => (
                <Row
                  key={index}
                  className={`timeline-item ${job.position}`} // Apply left/right based on position
                >
                  {job.position === "left" ? (
                    <>
                      <Col lg="6" className="text-right">
                        <div className="timeline-content left">
                          <Card className="shadow border-0">
                            <CardBody>
                              <div className="card-number">{job.number}</div>
                              <h5 className="text-primary">{job.title}</h5>
                              <h6 className="text-muted">{job.company}</h6>
                              <p className="text-muted">{job.duration}</p>
                              <p>{job.description}</p>
                            </CardBody>
                          </Card>
                        </div>
                      </Col>
                      <Col lg="6" className="d-none d-lg-block"></Col>
                    </>
                  ) : (
                    <>
                      <Col lg="6" className="d-none d-lg-block"></Col>
                      <Col lg="6" className="text-left">
                        <div className="timeline-content right">
                          <Card className="shadow border-0">
                            <CardBody>
                              <div className="card-number">{job.number}</div>
                              <h5 className="text-primary">{job.title}</h5>
                              <h6 className="text-muted">{job.company}</h6>
                              <p className="text-muted">{job.duration}</p>
                              <p>{job.description}</p>
                            </CardBody>
                          </Card>
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        .section-work-experience {
          background: linear-gradient(135deg, #ff5722, #ff8a00);
          padding: 3rem 0;
          position: relative;
        }
        .timeline {
          position: relative;
          padding: 2rem 0;
        }
        .timeline-item {
          position: relative;
          padding: 1rem 0;
        }
        .timeline-item:before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ddd;
          transform: translateX(-50%);
          z-index: 1;
        }
        .timeline-content {
          position: relative;
          z-index: 2;
        }
        .timeline-item.left .timeline-content {
          padding-right: 2rem;
          text-align: right;
        }
        .timeline-item.right .timeline-content {
          padding-left: 2rem;
          text-align: left;
        }
        .card-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          position: absolute;
          top: -20px;
          left: -20px;
        }
        .illustration {
          position: absolute;
          right: 20%; /* Adjusted for center-right */
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: auto;
        }
        .illustration img {
          max-width: 100%;
          height: auto;
        }
        h2.text-white {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;

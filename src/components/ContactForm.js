import React from "react";
import classnames from "classnames";
import { 
  Button, 
  Card, 
  CardBody, 
  FormGroup, 
  Input, 
  InputGroup, 
  InputGroupAddon, 
  InputGroupText, 
  Container, 
  Row, 
  Col 
} from "reactstrap";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocused: false,
      emailFocused: false,
    };
  }

  render() {
    return (
      <section className="section section-contact-us">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Get in Touch</h4>
                  <p className="mt-0">I would love to hear from you!</p>
                  <FormGroup
                    className={classnames("mt-5", {
                      focused: this.state.nameFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your name"
                        type="text"
                        onFocus={() =>
                          this.setState({ nameFocused: true })
                        }
                        onBlur={() =>
                          this.setState({ nameFocused: false })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email address"
                        type="email"
                        onFocus={() =>
                          this.setState({ emailFocused: true })
                        }
                        onBlur={() =>
                          this.setState({ emailFocused: false })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="name"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                    >
                      Send Message
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactForm;

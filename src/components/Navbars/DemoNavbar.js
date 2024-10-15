import React from "react";
import { Link } from "react-router-dom"; // Ensure you import Link
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class PortfolioNavbar extends React.Component {
  componentDidMount() {
    const headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="Brand Logo"
                  src={require("assets/img/brand/argon-react-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="Brand Logo"
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink to="/" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about" tag={Link}>
                        Overview
                      </DropdownItem>
                      <DropdownItem to="/experience" tag={Link}>
                        Experience
                      </DropdownItem>
                      <DropdownItem to="/contact" tag={Link}>
                        Contact
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="/projects" tag={Link}>
                      Projects
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/skills" tag={Link}>
                      Skills
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/work-experience" tag={Link}>
                      Work Experience
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/your-profile"
                      target="_blank"
                      id="tooltip-github"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        GitHub
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-github">
                      Follow me on GitHub
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      id="tooltip-linkedin"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-linkedin">
                      Connect with me on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/contact"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-envelope mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Contact</span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default PortfolioNavbar;

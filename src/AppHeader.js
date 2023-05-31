import "./AppHeader.css";
import emblem from "./emblem.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function AppHeader() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={emblem}
              className="JenLuchkaPhoto"
              alt="Jen Emblem Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#clients">clients</Nav.Link>
              <NavDropdown title="projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Gaming</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#email">jen@jenniferluchka.com</Nav.Link>
              <Nav.Link eventKey={2} href="#location">
                London Ontario
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppHeader;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import Logo from "../image/logo.png";
import Logo2 from "../image/avatar.png";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className=" justify-content-between ">
      <Container className="container-fluid mx-0 container-head">
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="logo" className="logoNet" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="toggler  "
        />
        <Navbar.Collapse>
          <Nav className="me-auto mb-2 mb-lg-0 nav-ul">
            <Nav.Link href="#home" className="active li">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="disabled text-white-50">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="#link" className="disabled text-white-50">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="disabled text-white-50">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="disabled text-white-50">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div
          className="d-flex flex-row align-items-center "
          id="container-icon"
        >
          <i className="bi bi-search icons "></i>
          <div id="kids" className="fw-bold ">
            KIDS
          </div>
          <i className="bi bi-bell icons"></i>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="border border-0 but-avatar"
            >
              <Image src={Logo2} alt="logo" className="avatar" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Exit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;

import Dropdown from "react-bootstrap/Dropdown";
import MainFilm from "../components/Main";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const TitleMain = () => {
  return (
    <>
      <Container className="container-fluid container-main  mx-0 ">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center ">
            <h2 className="me-4 d-flex align-items-center ">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="drop-but btn-secondary btn-sm dropdown-toggle rounded-0"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4 className="mt-4">Star Wars</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 ">
          <MainFilm saga="Star Wars" />
        </Row>
        <h4>Harry Potter</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <MainFilm saga="Harry Potter" />
        </Row>
        <h4>Avengers</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <MainFilm saga="Avengers" />
        </Row>
      </Container>
    </>
  );
};
export default TitleMain;

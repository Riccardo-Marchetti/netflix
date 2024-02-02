import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const CustomFooter = () => {
  return (
    <Row className="justify-content-center mt-5 mx-0">
      <Col className="col-6">
        <Row>
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <Col>
            <Row>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item className="footer link paragraph">
                    Audio and Subtitles
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Media Center
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Privacy
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Contact us
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item className="footer link paragraph">
                    Audio Description
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Investor Relations
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Legal Notices
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item className="footer link paragraph">
                    Help Center
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Jobs
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Cookie Preferences
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col className="footer-links">
                <ListGroup>
                  <ListGroup.Item className="footer link paragraph">
                    Gift Cards
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Terms of Use
                  </ListGroup.Item>
                  <ListGroup.Item className="footer link paragraph">
                    Corporate Information
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className="btn-sm footer-button rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="mb-3 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Col>
    </Row>
  );
};
export default CustomFooter;

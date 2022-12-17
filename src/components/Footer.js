import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon2.svg";
import navIcon2 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item center">
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="">
                <img src={navIcon2} alt="FaceBook" />
              </a>
              <a href="">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>CopyRight 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

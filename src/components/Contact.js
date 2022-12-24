import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container className="contact" id="connect">
        <Row className="align-items-center">
          <h2>Get In Touch</h2>
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col>
            <form name="form" method="post">
              <input type="hidden" name="form-name" value="form" />
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="first-name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="last-name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    name="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="Phone Number" name="number" />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    row="6"
                    placeholder="Message"
                    required
                    name="message"
                  />
                  {/* <button>Send</button> */}
                </Col>
              </Row>
              <div data-netlify-recaptcha="true"></div>
              <button>Send</button>
            </form>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="null" />
    </section>
  );
};

export default Contact;

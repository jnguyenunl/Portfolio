import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Contact = () => {
  // const formInitialDetails = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // };
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (catergory, value) => {
  //   setFormDetails({ ...formDetails, [catergory]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("https://jamesnguyenportfolio.netlify.app/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ succes: true, message: "Message sent successfully!" });
  //   } else {
  //     setStatus({
  //       succes: false,
  //       message: "Something went wrong, please try again later.",
  //     });
  //   }
  // };
  //   "http://localhost:3000/contact"

  <form name="form" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>;

  return (
    <section className="contact" id="connect">
      <Container className="contact" id="connect">
        <h2>Get In Touch</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col>
            <form name="form" method="POST">
              <input type="hidden" name="form-name" value="form" />
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    // value={formDetails.firstName}
                    placeholder="First Name"
                    // onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                    name="name"
                  />
                </Col>
                {/* <Col sm={6} className="px-1">
                  <input
                    type="text"
                    // value={formDetails.lastName}
                    placeholder="Last Name"
                    // onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col> */}
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    // value={formDetails.email}
                    placeholder="Email Address"
                    // onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                    name="email"
                  />
                </Col>
                {/* <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    // value={formDetails.phone}
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    // onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col> */}
                <Col size={12} className="px-1">
                  <textarea
                    row="6"
                    // value={formDetails.message}
                    placeholder="Message"
                    // onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                    name="message"
                  />
                  <button type="submit">Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="null" />
    </section>
  );
};

export default Contact;

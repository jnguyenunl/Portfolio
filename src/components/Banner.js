import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/git.png";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {
  const toRotate = [
    "Front-End Developer",
    "Back-End Developer",
    "Mobile App Developer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  //time between words
  const period = 2000;

  //time between letters
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(
    () => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker);
      };
    } /*[text])*/
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container className="align-items-center">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span>Welcome to my Portfolio</span>
              <h1>
                {"Hi! I'm James "}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                James Nguyen is an energetic, spirited computer scientist with a
                foundation in math and programing logic and coding. Seeking to
                leverage skills of collaboration, communication, and support as
                a programming developer.
              </p>
              <HashLink to="#connect">
                <button>
                  Let's connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder Img" />
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="null" />
        <img
          className="background-image-top-left"
          src={colorSharp}
          alt="Background"
        />
      </section>
    </Router>
  );
};

export default Banner;

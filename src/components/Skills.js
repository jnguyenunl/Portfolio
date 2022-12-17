import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sql from "../assets/img/sql.webp";
import c from "../assets/img/c.png";
import cPlus from "../assets/img/cplus.png";
import cSharp from "../assets/img/csharp.svg";
import java from "../assets/img/java.svg";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.svg";
import colorSharp from "../assets/img/color-sharp2.png";
import perl from "../assets/img/perl.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Programing Languages</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={c} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={cPlus} alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={cSharp} alt="C#" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React Native" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={perl} alt="Perl" />
                  <h5>Perl</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Skills;

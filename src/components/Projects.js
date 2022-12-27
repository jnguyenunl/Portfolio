import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/kpi.jpg";
import projImg2 from "../assets/img/banking.png";
import projImg3 from "../assets/img/ecommerce.jpg";
import projImg4 from "../assets/img/car.jpg";
import projImg5 from "../assets/img/check.jpg";
import projImg6 from "../assets/img/portfolio.webp";

const projects1 = [
  {
    title: "DMSi Capstone KPI Project",
    description:
      "KPI (Key Performance Indicator) web-application for Sponsor, DMSi. Dynamically creates KPI charts from various data sets provided by DMSi’s business clients. KPIs can be configured and save by users. Attributes of KPI’s are automated and generated based the most import data for each client. Technology Stack: React, Typescript, CSS, HTML, GraphQL, WedgeKit, Agility API",
    imgUrl: projImg1,
  },
  {
    title: "Banking System",
    description:
      "Financial Management Tool. Ability to modify and/or delete financial assets, portfolios, and clients. Technology Stack: Java, MySQL, Java Database Connectivity (JDBC) API",
    imgUrl: projImg2,
  },
  {
    title: "E-Commerce Online Store",
    description:
      "E-Commerce Website with standard funtionalities. Utilized Agile and Scrum Methodologies for Development Process. Technology Stack: ASP.Net MVC, C#, CSS, HTML",
    imgUrl: projImg3,
  },
];

const projects2 = [
  {
    title: "Transportion Mobile App",
    description:
      "IOS and Android Application for Requesting Rides on Demand. Technology Stack: React Native, Javascript, Tailwind, Google Places API, Goolge Directions API, Google Distance Matrix API",
    imgUrl: projImg4,
  },
  {
    title: "Canvas TO-DO List Tool",
    description:
      "Google Chrome Extention for Generation Customizable To-Do List from Data Pulled from Canvas LMS API. User Testing: Paper and computer prototyping, cognitive walkthrough, heuristic evaluation, and usability testing. Technology Stack: JavaScript, React, CSS, and HTML",
    imgUrl: projImg5,
  },
  {
    title: "Portfolio Website",
    description: "Technology Stack: React, JavaScript, CSS, HTML, Bootstrap",
    imgUrl: projImg6,
  },
];

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <h2>Projects</h2>
          <Col>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;

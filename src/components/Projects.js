import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import lp1 from '../assets/img/lp1.webp';
import lp2 from '../assets/img/lp2.webp';
import lp5 from '../assets/img/lp5.jpg'
import lp4 from '../assets/img/lp6.jpg'
import lp100 from '../assets/img/lp100.jpg'




export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: lp1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: lp2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: lp4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: lp100,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: lp5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Writing well designed, testable, efficient code by using best software development practices. Creating website layout/user interfaces by using standard HTML/CSS practices. Integrating data from various back-end services and databases.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Dont be late to get yours here hanging.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='' ></img>
    </section>
  )
}

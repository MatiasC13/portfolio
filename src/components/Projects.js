import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import portfolio1 from "../assets/img/portfolio1.png";
import portfolio2 from "../assets/img/portfolio2.png";
import portfolio3 from "../assets/img/portfolio3.png";
import portfolio4 from "../assets/img/portfolio4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Fragment } from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Play Pókemon!",
      description:
        "Maquetado web con HTML y CSS utilizando librería Bootstrap y preprocesador Saas.",
      imgUrl: portfolio1,
      link: "https://matiasc13.github.io/playPokemon-matiasCabral/",
    },
    {
      title: "Discos Shop JS Vanilla",
      description:
        "Implementación de ecommerce con administrador y usuario utiliazando JavaScript.",
      imgUrl: portfolio2,
      link: "https://matiasc13.github.io/proyectoFinalJavaScript-matiasCabral/",
    },
    {
      title: "Discos Shop React",
      description: "Ecommerce usando Firebase como persistencia.",
      imgUrl: portfolio3,
      link: "https://shop-teal-psi.vercel.app/",
    },
    {
      title: "Ecommerce Next js",
      description:
        "Ecommerce optimizado de simple uso con excel como persistencia, implementando Progressive Web Application",
      imgUrl: portfolio4,
      link: "https://simpleshop-sand.vercel.app/",
    },
  ];

  const experience = [
    {
      title: "UI Design 2022 - 2022",
      description:
        "Responsable del diseño UI en proyecto multiplataforma ecommerce, desarrollado con Nextjs, Chakra UI",
    },
  ];

  const studies = [
    {
      title: "Desarrollo Web 2021 - 2022",
      description:
        "Maquetado web con HTML y CSS. Optimizando al máximo el desarrollo de sitios web, implementando prácticas de versionado de código con GIT.",
      link: "",
    },
    {
      title: "JavaScript 2022 - 2022",
      description: "Desarrollo Front End con JavaScript.",
      link: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <h2>Projectos</h2> */}
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Proyectos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experiencia</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Formación</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {experience.map((ex, index) => {
                            return (
                              <Fragment key={index}>
                                <h1 className="h1Tab">{ex.title} </h1>
                                <p>{ex.description}</p>
                              </Fragment>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {studies.map((study, index) => {
                            return (
                              <Fragment key={index}>
                                <h1 className="h1Tab">{study.title}</h1>
                                <p>
                                  {study.description}
                                  <br />
                                  <a
                                    href={study.link}
                                    target="blank"
                                    className="ancla-certificado"
                                  >
                                    Ver certificado
                                  </a>
                                </p>
                              </Fragment>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

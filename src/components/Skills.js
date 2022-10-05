import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* 95% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                {/* 90% */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React</h5>
                </div>
                {/* 95% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                {/* 80% */}
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Next JS</h5>
                </div>

                {/* 80% */}
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>FireBase</h5>
                </div>
                {/* 95% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
                {/* 95% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Saas</h5>
                </div>
                {/* 95% */}
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                {/* 90% */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Material UI</h5>
                </div>
                {/* 90% */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Chakra UI</h5>
                </div>
                {/* 90% */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Git</h5>
                </div>
                {/* 90% */}
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>GitHUB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

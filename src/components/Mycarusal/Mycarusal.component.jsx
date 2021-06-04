import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from '../../assets/carousal/Slide1.jpg';
import Slide2 from '../../assets/carousal/Slide2.jpg';
import Slide3 from '../../assets/carousal/Slide3.jpg';

import "./Mycarusal.styles.css";

const Mycarusal = () => {
  return (
    <div id="home">
      <Carousel fade controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Mycarusal;

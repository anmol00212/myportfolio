import "./App.css";
import React from "react";
import Container from 'react-bootstrap/Container'
import MyNavbar from "./components/Mynavbar/Mynavbar.component";
import MyCarusal from "./components/Mycarusal/Mycarusal.component";
import Titles from "./components/Title/Title.component";
import Scroll from "./components/Scrolldown/Scrolldown.component";
import About from "./pages/About/About.components"
import Fade from "react-reveal/Fade"
import { Parallax } from "react-parallax";




const App = () => {
  return (
    <>
      <MyNavbar />

      <MyCarusal />

      <Titles />

      <Scroll />
      <hr />
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/parallex/white.jpg")}
          bgImageAlt=""
          strength={-200}
        >
      <div>
      <Container className="container-box rounded">
      <Fade duration={500}>
      <About /> 
      </Fade>
      </Container>
      </div>
      </Parallax>
      </div>
      <hr/>
    </>
  ); 
};

export default App;

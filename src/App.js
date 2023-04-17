import React from "react";
import Navbar from "./components/Navbar";
import plate1 from "./assets/plate1.png";
import plate2 from "./assets/plate2.png";
import number from "./assets/number.png";
import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <div className="part1">
          <p className="intro">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
          </p>
          <img src={plate2} alt="Plate 2" className="m_img1" />
          <img src={number} alt="Number" className="num2" />
          <img src={plate1} alt="Plate 1" className="m_img2" />
        </div>
        <div className="part2">
          <div>Lorem ipsum dolor sit amet, consetetur.</div>
          <div>Lorem Ipsum</div>
        </div>
      </div>
      <div className="bottom">
        <div className="counter">
          <p>01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
          <p>05</p>
          <span></span>
        </div>
        <div className="directions">
          <div className="arrow">
            <span className="circle"></span>
            <ChevronLeft color="#000" size={18} />
            <span className="back"></span>
          </div>
          <div className="arrow arrow2">
            <span className="circle"></span>
            <ChevronLeft color="#000" size={18} />
            <span className="back"></span>
          </div>
        </div>
        <div className="media">
          <div>
            <Instagram size={20} />
          </div>
          <div>
            <Twitter size={20} />
          </div>
          <div>
            <Facebook size={20} />
          </div>
          <div>
            <Linkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

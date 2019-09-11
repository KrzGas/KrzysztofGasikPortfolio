import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Header } from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Technology } from "./Components/Technology/Technology";
// import { Projects } from "./Components/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import "../scss/style.scss";

class App extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
      <>
        <HashRouter>
          <Header />
          <About />
          <Technology />
          <Footer />
          <button className="scrollTop" onClick={this.scrollToTop}>
             <i className="fas fa-arrow-up" />
          </button>
        </HashRouter>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});

import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Header } from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Navigation } from "./Components/Navigation/Navigation";
import { Technology } from "./Components/Technology/Technology";
import { Projects } from "./Components/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import english from "../img/english.png";
import polish from "../img/polish.png";
import "../scss/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "PL"
    };
  }

  updateClick = click => {
    this.setState({
      click: click
    });
  };

  Language = () => {
    this.setState({
      lang: this.state.lang === "PL" ? "EN" : "PL"
    });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <HashRouter>
          <button className="btn__language" onClick={this.Language}>
            {this.state.lang === "PL" ? (<img src={english} />) : (<img src={polish} />)}
          </button>
          <Header language={this.state.lang} />
          <Navigation language={this.state.lang} />
          <About language={this.state.lang} />
          <Technology language={this.state.lang} />
          <Projects language={this.state.lang} />
          <Footer language={this.state.lang} />
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

import React, { Component } from "react";
import Translation from "../Translation";
import note from "../../../img/note.jpg";
import things from "../../../img/things.jpg";
import cat from "../../../img/cat.jpg";
import pollen from "../../../img/pollen.jpg";

const projects = [
  {
    name: "Let me organize your day",
    url: "https://krzgas.github.io/LetMeOrganizeYourDay/#/",
    description: "Aplikacja do zaplanowania sobie dnia",
    image: note
  },
  {
    name: "Oddam Rzeczy",
    url: "https://krzgas.github.io/Oddam-Rzeczy/#/",
    description: "Aplikacja do oddania niepotrzebnych rzeczy",
    image: things
  },
  {
    name: "Catopedia",
    url: "https://krzgas.github.io/Catopedia/#/",
    description: "Aplikacja dla miłośników kotów",
    image: cat
  },
  {
    name: "Pollen Alert",
    url: "https://krzgas.github.io/PollenAlert/#/",
    description: "Aplikacja dla alergików",
    image: pollen
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      clickArr: []
    };
  }
  openProject = (name, url, open) => {
    this.setState(
      {
        click: this.state.click === false ? true : true,
        clickArr: name
      },
      () => {
        this.timer = setTimeout(() => {
          this.setState({
            click: false
          });
        }, 10000);
      }
    );
    if (open === "yes") {
      window.open(url);
    }
  };
  render() {
    const props = this.props;
    const vers = this.props.language;
    return (
      <section id="Projects" className="wrapper">
        {Translation.filter(v => v.component === "Projects").map(lang => {
          return (
            <h1 className="big__font" key={props.language}>
              {props.language === "PL" ? lang.PL[0] : lang.EN[0]}
            </h1>
          );
        })}
        <div className="wrapper__image">
          {projects.map((p, index) => {
            return (
              <div key={p.name}>
                {this.state.clickArr.includes(p.name) && this.state.click ? (
                  <div
                    className={`projects__image projects__info__wrapper`}
                    onClick={() => this.openProject(p.name, p.url)}
                  >
                    {Translation.filter(
                      v => v.component === this.constructor.name
                    ).map(lang => {
                      return (
                        <span className="projects__info__description" key={lang}>
                          {vers === "PL"
                            ? lang.PL[index + 1]
                            : lang.EN[index + 1]}
                        </span>
                      );
                    })}
                    <button
                      className="projects__info__button"
                      onClick={() => this.openProject(p.name, p.url, "yes")}
                    >
                      {props.language === "PL"
                        ? "Otwórz projekt"
                        : "Open project"}
                    </button>
                  </div>
                ) : (
                  <div
                    className="projects__image projects__bar"
                    style={{ backgroundImage: `url(${p.image})` }}
                    onClick={() => this.openProject(p.name, p.url)}
                  >
                    <span className=" projects__title">
                      {p.name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export { Projects };

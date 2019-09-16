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
    image: note,
    repo: "LetMeOrganizeYourDay"
  },
  {
    name: "Oddam Rzeczy",
    url: "https://krzgas.github.io/Oddam-Rzeczy/#/",
    description: "Aplikacja do oddania niepotrzebnych rzeczy",
    image: things,
    repo: "Oddam-Rzeczy"
  },
  {
    name: "Catopedia",
    url: "https://krzgas.github.io/Catopedia/#/",
    description: "Aplikacja dla miłośników kotów",
    image: cat,
    repo: "Catopedia"
  },
  {
    name: "Pollen Alert",
    url: "https://krzgas.github.io/PollenAlert/#/",
    description: "Aplikacja dla alergików",
    image: pollen,
    repo: "PollenAlert"
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
    url !== "" && open === "url" ? window.open(url) : null;
    url !== "" && open === "rep"
      ? window.open(`https://github.com/KrzGas/${url}`)
      : null;
  };
  render() {
    const props = this.props;
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
                    className="projects__image projects__info__wrapper"
                    onClick={() => this.openProject(p.name, p.url)}
                  >
                    {/* {Translation.filter(
                      v => v.component === "Projects"
                    ).map((lang,i) => {
                      return (
                        <span className="projects__info__description" key={i}>
                          {props.language === "PL"
                            ? lang.PL[index + 1]
                            : lang.EN[index + 1]}
                        </span>
                      );
                    })} */}

                    {Translation.filter(n => n.component === "Projects").map(
                      l => {
                        return (
                          <span className="projects__info__description" key={index+1}>
                            {props.language === "PL"
                              ? l.PL[index + 1]
                              : l.EN[index + 1]}
                          </span>
                        );
                      }
                    )}

                    <button
                      className="projects__info__button"
                      onClick={() => this.openProject(p.name, p.url, "url")}
                    >
                      {props.language === "PL"
                        ? "Otwórz projekt na GH pages"
                        : "Open project via GH pages"}
                    </button>
                    <button
                      className="projects__info__button"
                      onClick={() => this.openProject(p.name, p.repo, "rep")}
                    >
                      {props.language === "PL"
                        ? "Otwórz repozytorium na GH"
                        : "Open repository on GH"}
                    </button>
                  </div>
                ) : (
                  <div
                    className="projects__image projects__bar"
                    style={{ backgroundImage: `url(${p.image})` }}
                    onClick={() => this.openProject(p.name, p.url)}
                  >
                    <span className="projects__title">{p.name}</span>
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

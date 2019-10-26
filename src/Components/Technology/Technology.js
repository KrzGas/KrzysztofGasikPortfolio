import React, { Component } from "react";
import Translation from "../Translation";

const icons = [
  {
    name: "css",
    source: "fab fa-css3-alt",
    hover: "Dobrze"
  },
  {
    name: "git",
    source: "fab fa-git",
    hover: "Dobrze"
  },
  {
    name: "html5",
    source: "fab fa-html5",
    hover: "Dobrze"
  },
  {
    name: "js",
    source: "fab fa-js",
    hover: "Dobrze"
  },
  {
    name: "linux",
    source: "fab fa-linux",
    hover: "Średnio"
  },
  {
    name: "node",
    source: "fab fa-node-js",
    hover: "Średnio"
  },
  {
    name: "react",
    source: "fab fa-react",
    hover: "Średnio"
  },
  {
    name: "sass",
    source: "fab fa-sass",
    hover: "Dobrze"
  },
  {
    name: "npm",
    source: "fab fa-npm",
    hover: "Średnio"
  },
  {
    name: "rwd",
    source: "fas fa-tablet-alt",
    hover: "Dobrze"
  },
  {
    name: "jquery",
    source: "fab fa-js-square",
    hover: "Dobrze"
  }
];

class Technology extends Component {
  render() {
    const props = this.props;
    const language= this.props.language;
    return (
      <section id="Technology" className="wrapper">
        {Translation.filter(v => v.component === "Technology").map(lang => {
          return (
            <h1 className="big__font" key={language}>
              {language === "PL" ? lang.PL[0] : lang.EN[0]}
            </h1>
          );
        })}
        <div className="wrapper__image">
          {icons.map((icon,index) => {
            return (
              <div
                className="technology__icon"
                key={icon.source}
                id={icon.name}
              >
                <span className="technology__icon__title">{icon.name}</span>
                <i className={icon.source} />
                {Translation.filter(n => n.component === "Technology").map(
                  l => {
                    return (
                      <span className="tooltip" key={l}>
                        {props.language === "PL"
                          ? l.PL[index + 1]
                          : l.EN[index + 1]}
                      </span>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export { Technology };

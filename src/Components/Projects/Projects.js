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
    image: note
  },
  {
    name: "Oddam Rzeczy",
    url: "https://krzgas.github.io/Oddam-Rzeczy/#/",
    image: things
  },
  {
    name: "Catopedia",
    url: "https://krzgas.github.io/Catopedia/#/",
    image: cat
  },
  {
    name: "Pollen Alert",
    url: "https://krzgas.github.io/PollenAlert/#/",
    image: pollen
  }
];

const Projects = props => {
  return (
    <section id="Projects" className="wrapper">
      {Translation.filter(v => v.component === "Projects").map(lang => {
        return (
          <h1 key={props.language}>
            {props.language === "PL" ? lang.PL : lang.EN}
          </h1>
        );
      })}
      <div className="wrapper__image">
        {projects.map(p => {
          return (
            <div
              key={p.name}
              className="projects__image projects__bar"
              style={{ backgroundImage: `url(${p.image})`}}>
              <span className="projects__title">{p.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Projects };

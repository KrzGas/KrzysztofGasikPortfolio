import React, { Component } from "react";
import css from "../../../img/css.png";
import git from "../../../img/git.png";
import html5 from "../../../img/html5.png";
import jquery from "../../../img/jquery.png";
import js from "../../../img/js.png";
import linux from "../../../img/linux.png";
import node from "../../../img/node.png";
import react from "../../../img/react.png";
import sass from "../../../img/sass.png";

const icons = [
  {
    name: 'css',
    source: css
  },
  {
    name: 'git',
    source: git
  },
  {
    name: 'html5',
    source: html5
  },
  {
    name: 'jquery',
    source: jquery
  },
  {
    name: 'js',
    source: js
  },
  {
    name: 'linux',
    source: linux
  },
  {
    name: 'node',
    source: node
  },
  {
    name: 'react',
    source: react
  },
  {
    name: 'sass',
    source: sass
  },
];

const Technology = () => {
  return (
    <section id="Technology">
      <h1>Technologie z którymi się zetknąłem</h1>
      <div className="wrapper__image">
      {
        icons.map((icon)=> {
          return <img key={icon.source} src={icon.source} />;
        })
      }
      </div>
    </section>
  );
};

export { Technology };

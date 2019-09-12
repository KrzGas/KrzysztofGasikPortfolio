import React, { Component } from "react";
import Translation from "../Translation";
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

const Technology = (props) => {
  return (
    <section id="Technology" className='wrapper'>
      {Translation.filter(v => v.component === "Technology").map(
            lang => {
              return <h1 key={props.language}>{props.language === "PL" ? lang.PL : lang.EN}</h1>;
            }
          )}
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

import React, { Component, Fragment, useState, useEffect } from "react";
import Translation from "../Translation";
import photo from "../../../img/profil.jpg";

export const About = props => {
    return (
      <section id="About" className="wrapper">
        {Translation.filter(v => v.component === "About").map(lang => {
          return (
            <h1 className="big__font" key={props.language}>
              {props.language === "PL" ? lang.PL[0] : lang.EN[0]}
            </h1>
          );
        })}
        <div className="wrapper__about">
          <img src={photo} className="image__about" />
          {Translation.filter(v => v.component === "About").map(lang => {
            return (
              <p key={props.language}>
                {props.language === "PL" ? lang.PL[1] : lang.EN[1]}
              </p>
            );
          })}
        </div>
      </section>
    );
}

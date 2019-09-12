import React, { Component } from "react";
import Translation from "../Translation";

const socialMediaElements = [
  {
    name: "fb",
    icon: "fab fa-facebook-f",
    href: "https://en-us.facebook.com/"
  },
  {
    name: "linkedin",
    icon: "fab fa-linkedin-in",
    href: "https://pl.linkedin.com/"
  },
  {
    name: "youtube",
    icon: "fab fa-youtube",
    href: "https://www.youtube.com/"
  },
  {
    name: "twitter",
    icon: "fab fa-twitter",
    href: "https://twitter.com/"
  }
];

export const Footer = props => {
  return (
    <footer id="Footer">
      <span>
        {Translation.filter(v => v.component === "Footer").map(lang => {
          return (
            <span key={props.language}>
              Krzysztof Gasik &copy; 2019 {props.language === "PL" ? lang.PL[0] : lang.EN[0]}
            </span>
          );
        })}
        <a href="https://github.com/KrzGas" target="_blank">
          <i className="fab fa-github" />
        </a>
        &#160;&#160;{Translation.filter(v => v.component === "Footer").map(lang => {
          return (
            <span key={props.language}>
              {props.language === "PL" ? lang.PL[1] : lang.EN[1]}
            </span>
          );
        })}&#160;&#160;
        <a href="https://linkedin.com/in/krzysztof-gasik" target="_blank">
          <i className="fab fa-linkedin-in" id="linked" />
        </a>
      </span>
      <ul>
        {socialMediaElements.map(item => (
          <li key={item.name}>
            <a href={item.href} target="_blank">
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

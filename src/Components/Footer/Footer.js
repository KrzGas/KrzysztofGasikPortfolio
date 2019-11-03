import React, { Component,Fragment } from "react";
import Translation from "../Translation";

const contact = [
  {
    name: "fb",
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/krzysztof.gasik"
  },
  {
    name: "linkedin",
    icon: "fab fa-linkedin-in",
    href: "linkedin.com/in/krzysztof-gasik"
  },
  {
    name: "github",
    icon: "fab fa-github",
    href: "https://github.com/KrzGas"
  },
  {
    name: "mail",
    icon: "fab far fa-envelope",
    href: "mailto:kgasik@gmail.com"
  }
];

export const Footer = props => {
  return (
    <footer id="Footer">
      <div className='footer__form'>
      {Translation.filter(v => v.component === "Footer").map(lang => {
          return (
            <Fragment key={props.language}>
            <h2 >
             {props.language === "PL" ? lang.PL[0] : lang.EN[0]}
            </h2>
            <h3>
              {props.language === "PL" ? lang.PL[1] : lang.EN[1]}
            </h3>
            </Fragment>
          );
        })}
        {Translation.filter(v => v.component === "Footer").map(lang => {
            return (
              <form key={lang}>
              <label>{props.language === "PL" ? lang.PL[2] : lang.EN[2]}</label>
              <input type='text' id="name" required placeholder={props.language === "PL" ? lang.PL[2] : lang.EN[2]}/>
              <label>Mail</label>
              <input type='mail' id="mail" required placeholder="e-mail"/>
              <label>{props.language === "PL" ? lang.PL[3] : lang.EN[3]}</label>
              <textarea id="message" placeholder={props.language === "PL" ? lang.PL[3] : lang.EN[3]}></textarea>
              <input type="submit" value={props.language === "PL" ? lang.PL[4] : lang.EN[4]} />
              </form>
            );
          })}
      </div>
      <div className='contact__form'>
        <span key={props.language}>
          Krzysztof Gasik &copy; 2019
        </span>
      <ul className = "contact__icons">
        {contact.map(item => (
          <li key={item.name}>
            <a href={item.href} target="_blank">
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
};

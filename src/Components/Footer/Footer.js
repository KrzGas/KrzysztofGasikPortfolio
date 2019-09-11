import React, { Component } from "react";

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

export const Footer = () => {
  return (
    <footer>
      <span>
        Krzysztof Gasik &copy; 2019 szukaj mnie na &#160;
        <a href="https://github.com/KrzGas" target="_blank">
          <i className="fab fa-github" />
        </a>
        &#160;&#160;lub&#160;&#160;
        <a href="https://linkedin.com/in/krzysztof-gasik" target="_blank">
          <i className="fab fa-linkedin-in" id="linked"/>
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

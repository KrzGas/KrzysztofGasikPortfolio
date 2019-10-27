import React, { Component } from "react"

const Header = (props) => {
  const click = props.info;
  return (
    <header id="Header">
      <h1 className={click > 1 ? "title__hide" : "title__show"}>Junior Frontend Developer</h1>
    </header>
  );
};

export { Header };

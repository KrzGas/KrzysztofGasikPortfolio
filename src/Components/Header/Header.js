import React, { Component } from "react"

const Header = (props) => {
  const click = props.info;
  return (
    <header id="Header">
      <h1>{click > 1 ? null : 'Junior Frontend Developer'}</h1>
    </header>
  );
};

export { Header };

import React, { Component, Fragment, useState, useEffect } from "react";
import Translation from "../Translation";
import photo from "../../../img/profil.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      field: ""
    };
  }

  Show = field => {
    this.setState({
      click: this.state.click === true ? true : true,
      field: field
    },()=> {
      this.hide = setTimeout(()=> {
        this.setState({
          click: false
        })
      },15000)
    });
  };

  render() {
    const props = this.props;
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
          <div className="contact__about">
            <i className="far fa-envelope" onClick={() => this.Show("mail")}>
              {this.state.click && this.state.field.includes("mail") && (
                <span>
                  <a href="mailto:kgasik@gmail.com">kgasik@gmail.com</a>
                </span>
              )}
            </i>
            <i className="fas fa-phone-square" onClick={() => this.Show("phone")}>
              {this.state.click && this.state.field.includes("phone") && (
                <span>+48 506 229 209</span>
              )}
            </i>
          </div>
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
}

export { About };

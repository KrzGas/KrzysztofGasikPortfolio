import React, { Component } from "react";
import Translation from "../Translation";
import { Link, animateScroll as scroll } from "react-scroll";

const MenuElements = [
  {
    path: "About",
    name: "O mnie",
    icon: "far fa-address-card"
  },
  {
    path: "Technology",
    name: "Technologie",
    icon: "fab fa-html5"
  },
  {
    path: "Projects",
    name: "Projekty",
    icon: "far fa-folder-open"
  },
  {
    path: "Footer",
    name: "Kontakt",
    icon: "far fa-envelope"
  }
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false
    };
  }

  switchMenu = () => {
    this.setState({
      swap: !this.state.swap
    });
  };
  render() {
    const vers = this.props.language;
    return (
      <div className="wrapper__nav">
        <nav className="wrapper">
          {MenuElements.map((item,index) => (
            <Link
              key={item.name}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={this.state.swap ? "menu__hidden" : "menu__visible"}
            >
              <i className={item.icon} />
              {Translation.filter(v => v.component === this.constructor.name).map(lang => {
                return (
                  <span key={vers}>
                    {vers === "PL" ? lang.PL[index] : lang.EN[index]}
                  </span>
                );
                
              })}
            </Link>
          ))}
          <div className="menu__wrapper" >
          {this.state.swap ? (
            <i className="fas fa-bars" onClick={this.switchMenu}>
              <span>{vers === "PL" ? 'Schowaj menu' : 'Hide menu'}</span>
            </i>
          ) : (
            <i className="far fa-window-close" onClick={this.switchMenu}>
              <span>{vers === "PL" ? 'Pokaż menu' : 'Show menu'}</span>
              </i>
          )}
          </div>
        </nav>
      </div>
    );
  }
}

export { Navigation };

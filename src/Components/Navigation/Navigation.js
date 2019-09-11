import React, { Component } from "react";
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
    return (
      <>
        <nav>
          {MenuElements.map(item => (
            <Link
              key={item.path}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={this.state.swap ? "menu__hidden" : "menu__visible"}
            >
              <i className={item.icon} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="btn__menu">
          {this.state.swap ? (
            <i className="fas fa-bars" onClick={this.switchMenu} />
          ) : (
            <i className="far fa-window-close" onClick={this.switchMenu} />
          )}
        </div>
      </>
    );
  }
}

export { Navigation };

import React, { Component } from "react";
import Translation from "../Translation";
import { Link, animateScroll as scroll } from "react-scroll";

const MenuElements = [
  {
    path: "About",
    name: "O mnie"
  },
  {
    path: "Technology",
    name: "Technologie"
  },
  {
    path: "Projects",
    name: "Projekty"
  },
  {
    path: "Footer",
    name: "Kontakt"
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
    const props = this.props;
    return (
      <>
      <div className={this.state.swap ? 'menu__hidden__curtain' : 'menu__visible__curtain'}>
        <nav>
          {MenuElements.map((item,index) => (
            <Link key={item.name} to={item.path} spy={true} smooth={true}offset={-50} duration={450}>
              {Translation.filter(n => n.component === "Navigation").map(
                l => {return (<span key={index}>{props.language === "PL"? l.PL[index]: l.EN[index]}</span>);})}  
            </Link>
          ))}
        </nav>
      </div>
      <div className="menu__wrapper">
      {this.state.swap ? (
        <i className="fas fa-bars" onClick={this.switchMenu}/>
      ) : (
        <i className="far fa-window-close" onClick={this.switchMenu}/>
      )}
      </div>
      </>
    );
  }
}

export { Navigation };
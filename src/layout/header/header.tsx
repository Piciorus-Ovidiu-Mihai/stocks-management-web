import { Button } from "@mui/material";
import { Component } from "react";
import { MenuItems } from "../../utils/menu-items";
import "./header.scss";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {/* <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link> */}
                <a className={item.cName}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <Button variant="contained">Sign Up</Button>
      </nav>
    );
  }
}

export default Header;

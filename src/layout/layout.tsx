import { Grid } from "@mui/material";
import React, { Component } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import "./layout.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;

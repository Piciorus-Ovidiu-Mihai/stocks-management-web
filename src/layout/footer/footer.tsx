import { Link, Typography } from "@mui/material";
import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        className="footer-container"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/Piciorus-Ovidiu-Mihai">
          Stocks Management
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}

export default Footer;

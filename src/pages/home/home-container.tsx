import { Box, Container } from "@mui/material";
import { Component } from "react";
import homeImage from "../../assets/images/home-page.png";
import { HOME_HEADER } from "../../utils/constants";
import "./home-container.scss";

class HomeContainer extends Component {
  list: any = [];
  render() {
    return (
      <>
        <h1 className="home-header">{HOME_HEADER}</h1>
        <Container
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          maxWidth="xs"
        >
          <Box
            component="img"
            sx={{
              height: 500,
              width: 700,
              maxHeight: { xs: 233, md: 500 },
              maxWidth: { xs: 350, md: 700 },
            }}
            src={homeImage}
          />
        </Container>
      </>
    );
  }
}

export default HomeContainer;

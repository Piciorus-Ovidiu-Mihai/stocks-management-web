import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import homeImage from "../../assets/images/home-page.png";
import { HOME_HEADER } from "../../libs/constants/constants";
import "./home-container.scss";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "../../libs/apis/api";
const HomeContainer = () => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/Product/GetAllProducts",
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // axios.get("https://localhost:7235/api/Product/GetAllProducts").then((res) => {
  //   console.log(res.data);
  // });

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
};

export default HomeContainer;

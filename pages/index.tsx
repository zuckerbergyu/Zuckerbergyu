import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import NavigationTab from "../components/NavTabs";
import Body from "../components/Body";

const Home: NextPage = () => {
  return (
    <Container disableGutters maxWidth="sm">
      <div
        style={{
          height: 300,
          fontSize: "3rem",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        header
      </div>
      <NavigationTab />
      <Body />
      <div
        style={{
          height: 300,
          fontSize: "3rem",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        footer
      </div>
    </Container>
  );
};

export default Home;

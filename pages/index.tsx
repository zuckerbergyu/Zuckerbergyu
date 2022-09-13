import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavigationTab from "../components/NavTabs";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container disableGutters>
      <Header />
      <NavigationTab />
      <Body />
      <Footer />
    </Container>
  );
};

export default Home;

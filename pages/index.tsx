import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import NavigationTab from "../components/NavTabs";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container disableGutters maxWidth="sm">
      <Header />
      <NavigationTab />
      <Body />
      <Footer />
    </Container>
  );
};

export default Home;

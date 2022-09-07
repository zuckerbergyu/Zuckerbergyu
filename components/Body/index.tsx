import * as React from "react";
import { Box } from "@mui/material";
import Skills from "./Skills";
import Career from "./Career";
import Github from "./Github";
import Projects from "./Projects";

// interface SomeType {}

const Body = () => {
  return (
    <Box sx={styles.root}>
      <Skills />
      <Career />
      <Github />
    </Box>
  );
};

const styles = {
  root: {
    backgroundColor: "rgba(41, 44, 54, 1)",
    padding: "24px 32px",
  },
};
export default Body;

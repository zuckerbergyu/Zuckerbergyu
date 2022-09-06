import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.lastEdit}>최종 작성일자 2022.09.06</Typography>
    </Box>
  );
};

const styles = {
  root: {
    backgroundColor: "rgba(41, 44, 54, 1)",
    height: "140px",
    alignItems: "end",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
  },
  lastEdit: {
    fontSize: ".75rem",
    fontWeight: 300,
    color: "rgba(255, 255, 255, 0.65)",
  },
};
export default Footer;

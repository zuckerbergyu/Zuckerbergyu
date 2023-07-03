import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={styles.root}>
      <img style={styles.img} src={"face.jpg"} />
      <Typography sx={styles.title}>4년차 개발자 입니다</Typography>
      <Typography sx={styles.name}>이세규</Typography>
      <Box sx={styles.tagRoot}>
        <Typography
          sx={styles.tag}
          onClick={() => {
            location.href = "tel:010-2274-0473";
          }}
        >
          010-2274-0473
        </Typography>
        <Typography
          sx={styles.tag}
          onClick={() => {
            location.href = "mailto:dltprb11@naver.com";
          }}
        >
          dltprb11@naver.com
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  root: {
    backgroundColor: "rgba(41, 44, 54, 1)",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 0 20px 0",
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: "50%",
    marginBottom: "10px",
    filter: "drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.9))",
  },
  name: {
    fontSize: "2.2rem",
    fontWeight: 700,
    marginBottom: "4px",
    color: "rgba(255, 255, 255)",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 400,
    marginBottom: "4px",
    color: "gray",
  },
  tagRoot: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "gray",
    fontSize: ".75rem",
    color: "white",
    padding: "3px 5px",
    border: "0.5px solid rgba(95, 95, 95, 1)",
    borderRadius: "0.25rem",
    "&:first-child": {
      marginRight: "10px",
    },
  },
};
export default Header;

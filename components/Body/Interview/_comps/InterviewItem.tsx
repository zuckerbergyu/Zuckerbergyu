import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { definitions } from "../../../../types/database";

type Props = {
  item: definitions["Interview"];
};

const IterviewItem = (props: Props) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleRoot}>
        <CheckRoundedIcon sx={styles.icon} />
        <Typography sx={styles.title}>{props.item.title}</Typography>
      </Box>
      <Box sx={styles.contents}>
        <Typography sx={styles.description}>
          {props.item.description}
        </Typography>
      </Box>
    </Box>
  );
};
const styles = {
  root: { marginBottom: "46px" },
  titleRoot: {
    display: "flex",
    marginBottom: "14px",
  },
  title: {
    color: "white",
    fontWeight: 600,
    fontSize: "20px",
  },
  contents: {
    color: "red",
    padding: "12px 16px",
    backgroundColor: "#1E1E1E",
    borderLeft: `3px solid #63E6BE`,
  },
  description: {
    color: "white",
    fontWeight: 400,
    fontSize: "14px",
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "white",
    marginRight: "6px",
    marginTop: "3px",
  },
};

export default IterviewItem;

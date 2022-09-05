import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { definitions } from "../../../../types/database";
import { Star } from "@mui/icons-material";

type Props = {
  item: definitions["Skills"];
};
const SkilsItem = (props: Props) => {
  return (
    <Box sx={styles.root}>
      <img style={styles.img} src={props.item.logo} />
      <Box sx={styles.nameRoot}>
        <Typography sx={styles.name}>{props.item.name}</Typography>
        {props.item.favorite && <Star sx={styles.favorite} />}
      </Box>
      <Typography sx={styles.description}>{props.item.description}</Typography>
    </Box>
  );
};
const styles = {
  root: {
    padding: "32px 0",
    borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
  },
  img: {
    width: 60,
    height: 60,
  },
  nameRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
  },
  name: {
    fontWeight: "700",
    fontSize: "1.6rem",
    color: "white",
  },
  favorite: {
    width: 16,
    height: 16,
    color: "yellow",
    marginLeft: "6px",
  },
  description: { color: "white", fontSize: "1.125rem" },
};

export default SkilsItem;

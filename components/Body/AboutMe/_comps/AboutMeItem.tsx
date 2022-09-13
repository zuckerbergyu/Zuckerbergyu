import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { definitions } from "../../../../types/database";

type Props = {
  item: definitions["AboutMe"];
};

const AboutMeItem = (props: Props) => {
  let arr: Array<string> = props.item.contents.split("/");
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{props.item.title}</Typography>
      <ul>
        {arr.map((item) => (
          <li style={styles.contents}>{item}</li>
        ))}
      </ul>
    </Box>
  );
};
const styles = {
  root: {
    margin: "60px 0",
  },
  title: {
    color: "white",
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: "16px",
  },
  contents: {
    color: "rgba(255, 255, 255, 0.45)",
    fontSize: "19px",
    padding: 12,
  },
};

export default AboutMeItem;

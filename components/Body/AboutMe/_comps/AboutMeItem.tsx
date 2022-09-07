import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { definitions } from "../../../../types/database";

type Props = {
  item: definitions["AboutMe"];
};

const AboutMeItem = (props: Props) => {
  console.log(props.item.title);
  let arr: Array<string> = props.item.contents.split(",");
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
  root: {},
  title: {
    fontSzie: "2rem",
    color: "white",
    marginBottom: "16px",
  },
  contents: {
    color: "white",
  },
};

export default AboutMeItem;

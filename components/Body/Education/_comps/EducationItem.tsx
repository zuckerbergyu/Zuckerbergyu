import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { definitions } from "../../../../types/database";

type Props = {
  item: definitions["Education"];
};
const EducationItem = (props: Props) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contentRoot}>
        <Typography sx={styles.school}>{props.item.school}</Typography>
        <Box sx={styles.schoolDivider} />
        <Typography sx={styles.class}>{props.item.class}</Typography>
        <Box sx={styles.schoolDivider} />
        <Typography sx={styles.class}>졸업</Typography>
      </Box>
      <Box sx={styles.contentRoot}>
        <Typography sx={styles.period}>{props.item.period}</Typography>
        <Box sx={styles.periodDivider} />
        <Typography sx={styles.period}>{props.item.period_}</Typography>
      </Box>
    </Box>
  );
};
const styles = {
  root: {
    padding: "32px 0",
    borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
  },
  contentRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  schoolDivider: {
    height: "24px",
    width: "1px",
    margin: "0px 8px",
    background: "white",
  },
  school: {
    fontWeight: "700",
    fontSize: "1.4rem",
    color: "white",
  },
  class: {
    fontSize: "1.4rem",
    color: "rgba(255, 255, 255, 0.7)",
  },
  period: { color: "rgba(141, 141, 141, 0.65)", fontSize: "1rem" },
  periodDivider: {
    height: "14px",
    width: "1px",
    margin: "0px 15px",
    background: "rgba(141, 141, 141, 0.65)",
  },
};

export default EducationItem;

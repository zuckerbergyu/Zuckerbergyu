import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { definitions } from "../../../../types/database";
import { Star } from "@mui/icons-material";
type Props = {
  item: definitions["Career"];
};

interface link {
  link: string;
  linkName: string;
}

const CareerItem = (props: Props) => {
  const linkList: link[] = props.item.link as link[];

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.company}>{props.item.company}</Typography>
      <Typography sx={styles.title}>{props.item.title}</Typography>
      <Typography sx={styles.company}>{props.item.period}</Typography>
      <Typography sx={styles.description}>{props.item.description}</Typography>
      <Box sx={styles.linkRoot}>
        {linkList.map((item: any) => {
          return (
            <Typography
              onClick={() => {
                item.link && window.open(item.link, "_blank");
              }}
              sx={styles.link}
            >
              {item.linkName}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
const styles = {
  root: {
    padding: "32px 0",
    borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
  },
  company: {
    fontSize: "1rem",
    color: "rgba(141, 141, 141, 0.65)",
    paddingBottom: "2px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 1)",
    paddingBottom: "4px",
  },
  period: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 1)",
  },
  description: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 0.65)",
    paddingBottom: "24px",
  },
  linkRoot: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    marginRight: "10px",
    fontSize: ".75rem",
    color: "rgba(95, 95, 95, 1)",
    padding: "3px 5px",
    border: "0.5px solid rgba(95, 95, 95, 1)",
    borderRadius: "0.25rem",
  },
};

export default CareerItem;

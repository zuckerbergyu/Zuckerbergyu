import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  disableBorderBottom?: boolean;
};
const SectionTitle = (props: Props) => {
  return (
    <Box
      sx={[
        styles.root,
        props.disableBorderBottom ? styles.disableBorderBottom : null,
      ]}
    >
      <Typography sx={styles.title}>{props.title}</Typography>
    </Box>
  );
};
const styles = {
  root: {
    paddingBottom: "24px",
    borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
  },
  disableBorderBottom: {
    borderBottom: "0px",
  },
  title: {
    fontWeight: "700",
    fontSize: "2.5rem",
    color: "rgba(141, 141, 141, 1)",
  },
};

export default SectionTitle;

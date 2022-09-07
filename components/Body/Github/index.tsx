import * as React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import { useGetGithub } from "../../../api";

/**
 *
 *
 */

const Github = (): JSX.Element => {
  const { data: github } = useGetGithub();
  console.log(github);

  return github ? (
    <Box sx={styles.root} id={"Github"}>
      <SectionTitle title={"깃허브"} />
      {github.map((item) => (
        <img
          style={styles.img}
          onClick={() => {
            item.link && window.open(item.link, "_blank");
          }}
          src={item.thumbNail}
        />
      ))}
    </Box>
  ) : (
    <></>
  );
};
const styles = {
  root: {
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    borderRadius: "10px",
  },
};
export default Github;

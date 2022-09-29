import * as React from "react";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import { useGetAboutMe, useGetInterview } from "../../../api";
import InterviewItem from "./_comps/InterviewItem";

const Interview = (): JSX.Element => {
  const { data: interview } = useGetInterview();

  return interview ? (
    <Box sx={styles.root} id={"Interview"}>
      <SectionTitle title={"면접 정리"} />
      <Box sx={styles.contentsRoot}>
        {interview.map((item) => (
          <InterviewItem item={item} />
        ))}
      </Box>
    </Box>
  ) : (
    <></>
  );
};
const styles = {
  root: {
    display: "flex",
    padding: "40px 0",
    flexDirection: "column",
  },
  contentsRoot: {
    padding: "30px 0px 10px 0px",
  },
};
export default Interview;

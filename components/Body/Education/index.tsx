import * as React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import EducationItem from "./_comps/EducationItem";
import { useGetEducation } from "../../../api";

const Education = (): JSX.Element => {
  const { data: education } = useGetEducation();
  return education ? (
    <Box sx={styles.root} id={"Education"}>
      <SectionTitle title={"학력"} />
      {education.map((item) => (
        <EducationItem item={item} />
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
};
export default Education;

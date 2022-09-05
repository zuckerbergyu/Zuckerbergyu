import * as React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import SkilsItem from "./_comps/SkilsItem";
import { useGetSkillList } from "../../../api";

const Skills = (): JSX.Element => {
  const { data: skillList } = useGetSkillList();

  return skillList ? (
    <Box sx={styles.root} id={"Skills"}>
      <SectionTitle title={"기술 스택"} />
      {skillList.map((item) => (
        <SkilsItem item={item} />
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
export default Skills;

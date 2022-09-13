import * as React from "react";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import AboutMeItem from "./_comps/AboutMeItem";
import { useGetAboutMe } from "../../../api";

const AboutMe = (): JSX.Element => {
  const { data: aboutMe } = useGetAboutMe();

  return aboutMe ? (
    <Box sx={styles.root} id={"AboutMe"}>
      <SectionTitle title={"자기 소개"} />
      <Box sx={styles.contentsRoot}>
        <Typography sx={styles.simpleAbout}>
          간단한 자기소개를 쓰는곳입니다.간단한 자기소개글을 쓰는곳입니다.간단한
          소개글을 쓰는곳입니다.
        </Typography>
        {aboutMe.map((item) => (
          <AboutMeItem item={item} />
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
  simpleAbout: {
    fontSize: "1.2rem",
    color: "white",
    marginBottom: "60px",
  },
};
export default AboutMe;

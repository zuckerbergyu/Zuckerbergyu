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
          안녕하세요. 4년차 개발자 이세규입니다. 주어진 업무는 반드시
          완료합니다. 불가능 보단 가능 성을 우선시하는 사람이 되겠습니다.
          감사합니다.
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

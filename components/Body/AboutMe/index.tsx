import * as React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import AboutMeItem from "./_comps/AboutMeItem";
import { useGetAboutMe } from "../../../api";

/**
 * 소개글
 * 그동안 했던 일들 (ex:안드로이드 웹뷰 기반 앱 개발, 프론트엔드 리액트 개발)
 * 개발 태도
 *
 * 단점
 *
 * 희망사항
 */

const AboutMe = (): JSX.Element => {
  const { data: aboutMe } = useGetAboutMe();

  return aboutMe ? (
    <Box sx={styles.root} id={"AboutMe"}>
      <SectionTitle title={"자기 소개"} />

      <Box sx={{ color: "white" }}>여기에 적당한 말을 적는다</Box>
      {aboutMe.map((item) => (
        <AboutMeItem item={item} />
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
export default AboutMe;

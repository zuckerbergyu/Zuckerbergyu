import * as React from "react";
import { Box } from "@mui/material";
import CareerItem from "./_comps/CareerItem";
import SectionTitle from "../../SectionTitle";
import { useGetCareer } from "../../../api";

/**
 *
 *
 */

const Carrer = (): JSX.Element => {
  const { data: career } = useGetCareer();
  console.log(career);

  return career ? (
    <Box sx={styles.root} id={"Career"}>
      <SectionTitle title={"경력"} />
      {career.map((item) => (
        <CareerItem item={item} />
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
    height: 800,
  },
};
export default Carrer;

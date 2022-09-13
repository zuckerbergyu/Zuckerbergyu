import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";

interface LinkTabProps {
  label?: string;
  href?: string;
  destination?: string;
}
const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      sx={styles.tab}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const element = props.href ? document.getElementById(props.href) : null;
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + -48;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }}
      {...props}
    />
  );
};

const NavTabs = (props: LinkTabProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="navi-tabs"
        sx={styles.tabs}
      >
        <LinkTab label="기술 스택" href="Skills" />
        <LinkTab label="경력" href="Career" />
        <LinkTab label="깃허브" href="Github" />
        <LinkTab label="자기소개" href="AboutMe" />
        <LinkTab label="학력" href="Education" />
      </Tabs>
    </Box>
  );
};
const styles = {
  root: {
    top: 0,
    position: "sticky",
  },
  tabs: {
    background: "rgba(22, 23, 29, 1)",
  },
  tab: {
    color: "gray",
    fontWeight: 700,
    "&.Mui-selected": {
      color: "white",
    },
  },
};
export default NavTabs;

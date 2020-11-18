import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  withStyles,
  createStyles,
} from "@material-ui/core";

import {
  DonutSmallOutlined,
  CloudDownloadOutlined,
  PieChartOutlined,
  ViewCompactOutlined,
} from "@material-ui/icons";

const CenterListItem = withStyles(
  createStyles({
    root: {
      justifyContent: "center",
      color: "#7cbaa0",
      "&.Mui-selected": {
        color: "#f9f9f9",
        backgroundColor: "transparent",
      },
    },
  })
)(ListItem);

const links = [
  {
    path: "/main/chat",
    icon: ViewCompactOutlined,
  },
  {
    path: "/main/pie",
    icon: PieChartOutlined,
  },
  {
    path: "#",
    icon: CloudDownloadOutlined,
  },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <>
      <Box width="80px" bgcolor="#258c60" height="100%" pt={4}>
        <Box textAlign="center" pt={1} pb={1}>
          <DonutSmallOutlined fontSize="large" style={{ color: "#f9f9f9" }} />
        </Box>
        <List>
          {links.map((item, key: number) => (
            <Link to={item.path} key={key}>
              <CenterListItem button selected={location.pathname === item.path}>
                <item.icon />
              </CenterListItem>
            </Link>
          ))}
        </List>
      </Box>
    </>
  );
}

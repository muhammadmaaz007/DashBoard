// comps/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import PrimarySearchAppBar from "./Navbar";
import Heading from "./Heading";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Heading />
      <Box sx={{ display: "flex", height: "calc(100vh - 128px)", overflow: "hidden" }}>

        <SideBar />

        <Box
          sx={{
            flexGrow: 1,
            padding: 3,
            backgroundColor: "#f9f9fc",
            overflowY: "scroll",
            height: "100%",
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;

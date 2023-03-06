import { React, useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function NavbarTabs(props) {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      
      }}
    >
      <ButtonGroup
        color="secondary"
        variant="text"
        aria-label="text button group"
        size="large"
      >
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/alumni")}>Alumni</Button>
        <Button onClick={() => navigate("/scholarship")}>Scholarship</Button>
        <Button onClick={() => navigate("/photos")}>Photos</Button>
        <Button onClick={() => navigate("/members")}>Members</Button>
      </ButtonGroup>
    </Box>
  );
}

export default NavbarTabs;

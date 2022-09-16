import { React, useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Navigate, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";
import { db, storage } from "../firebase-config";
import NavbarTabs from "./NavbarTabs.js";
import NavDrawer from "./NavDrawer.js";
import {getAuth, signOut} from "firebase/auth";


const Navbar = (props) => {
let navigate = useNavigate()
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const agrLetters =
    "https://firebasestorage.googleapis.com/v0/b/agr-website-be171.appspot.com/o/logos%2FAGR%20letters.webp?alt=media&token=147c465b-b8f6-41bf-a83d-17b720d0feed";
  const agrLogo =
    "https://firebasestorage.googleapis.com/v0/b/agr-website-be171.appspot.com/o/logos%2FAGR%20Logo.svg?alt=media&token=aed1cc48-e525-448f-8bdb-6ce835f8cdcf";
  const agrCrestLogo =
    "https://firebasestorage.googleapis.com/v0/b/agr-website-be171.appspot.com/o/logos%2FAGRcrest%20logo.png?alt=media&token=549067aa-2297-43ae-adf7-36fee42e096b";

    const logout = async () => {
      await signOut(auth);
      console.log(auth)
      navigate('/')
    };
  
   
    return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: 1000 }}>
          <Toolbar>

          <Box
              sx={{display: {xs:'block',md:'none'}, flexWrap: "wrap", width: {} }}>
            <NavDrawer title={'AГP'} ></NavDrawer>
          </Box>
        
            <Box
              sx={{
                height: "50px",
                
                mr: 2,
                display: {xs: 'none', sm: "none", md:'block'},
              }}
              component="img"
              src={agrCrestLogo}
              onClick={() => navigate('/')}
            />

            <Box
            
              sx={{justifyContent: 'center', height: "50px", display: { xs: "flex", sm: "flex" ,md: 'none'}, }}
              component="img"
              
              src={agrLogo}
              onClick={() => navigate('/')}
            />

            <Typography
              variant="h6"
              component="div"
              alignItems="center"
              sx={{ flexGrow: 1, display: { xs: "none" , sm: "none", md:"block"} }}
            >
              Alpha Gamma Rho
            </Typography>
            
            <Typography
              variant="h6"
              component="div"
              align="Left"
              sx={{ flexGrow: 1, display: { xs: "block" , sm: "block", md:"none"} }}
            >
            </Typography>

            <Box sx={{ display: {xs:'none',md:'flex'}, flexWrap: "wrap", width: {} }}>
              <NavbarTabs></NavbarTabs>
            </Box>

           
                <IconButton
                 sx={{ ml:1}} onClick={colorMode.toggleColorMode} align="right" color="inherit">
                {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
                </IconButton>

                {user!=null &&

                  <Button onClick={logout}>Logout</Button>
                }
           
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useRef, useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import {auth} from "../firebase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("");
  const [user, setUser] = useState({})

  // const register = async () => {
  //   try{
  //   const User = await createUserWithEmailAndPassword(auth)
  //   } catch(error){
  //       console.log(error)
  //   }
  // };

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      // use {user.email} to confirm
  })


  const logout = async () => {
    await signOut(auth);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginEmail = data.get('email');
    const loginPassword = data.get('password');
    try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user)
         } catch(error){
             setOpenToast(true);
             setToastMessage('Wrong Email or Password!');
             setToastSeverity('error');
         }

    }
   
  
  const handleToastClose = () => {
    setOpenToast(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText="Use your school email (do not include @lsu.edu)"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText="Use your 89 number"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar open={openToast} onClose={handleToastClose}>
        <Alert severity={toastSeverity}>{toastMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;

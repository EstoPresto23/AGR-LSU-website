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
import { createUserWithEmailAndPassword,
   onAuthStateChanged, signOut,
    signInWithEmailAndPassword,
     GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const [openToast, setOpenToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastSeverity, setToastSeverity] = useState('')
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
   console.log(currentUser)
   console.log(user)
    if(currentUser!=null){
      navigate('/updateImages')
    }
    if(currentUser=null){
      navigate('/home')
    }
  });

  const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    setUser(result.user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  const logout = async () => {
    await signOut(auth);
  };

  const login = async (event) => {
    try{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const loginEmail = data.get('email');
      const loginPassword = data.get('password');
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(user)
    }
    catch(error){
      const errorMessage = error.message;
      alert(errorMessage);
    }
    };


   
    
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
        <Box component="form" onSubmit={login} noValidate sx={{ mt: 2 }}>
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
          <Button
            onClick={SignInWithGoogle}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Or Sign In with Google
          </Button>
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar 
        open={openToast}
        onClose={handleToastClose}
      >
        <Alert severity={toastSeverity}>
          {toastMessage}
        </Alert>
      </Snackbar>
      
    </Container>
  );
};

export default SignIn;

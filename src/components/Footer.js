import React, { useEffect, useRef, useState, useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {onAuthStateChanged, getAuth} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";





export default function StickyFooter() {

  let navigate = useNavigate()
const auth = getAuth();
const user = auth.currentUser;
const [showContent , setShowContent] = useState(true)

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        AlphaGammaRho
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

useEffect(() => {
  if(user==null)
  setShowContent(true)
})

const signIn = () => {
  navigate('/SignIn')
}
 

  return (

      <Box
        component="footer"
        display='flex'
        justifyContent={'center'}
        sx={{
            p:4,
          mt: 'auto',
          color: 'primary'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h6" align="center" color="primary">
          AГP
          </Typography>
          <Copyright />
          <Typography variant="body2" color="text.secondary" align="center">
            { showContent?
            <Button onClick={signIn}>
              Admin
            </Button>
            :<></>
          }
          </Typography>
        </Container>
      </Box>
   
  );
}
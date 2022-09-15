import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

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

export default function StickyFooter() {
  
let navigate = useNavigate()

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
            <Button onClick={() => navigate("/SignIn")}>
              Admin
          </Button>
          </Typography>
        </Container>
      </Box>
   
  );
}
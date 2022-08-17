import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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
        </Container>
      </Box>
   
  );
}
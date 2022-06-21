import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AppHeader = function() {
  return (
   
    <AppBar position="absolute" variant="dense" color='primary'>
      
        <Typography variant='h4' color="primary.dark">
          Resume Generator
        </Typography>
        <Typography variant='subtitle1' color="primary.dark">
          Made by Gabriel Hrastovic
        </Typography>
        
    </AppBar>
    
  );
}

export default AppHeader
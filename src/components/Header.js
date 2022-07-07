import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


const AppHeader = function() {
  return (
   
    <AppBar position="absolute" variant="dense" color='primary'>
      
        <Typography variant='h4' color="primary.dark">
          Resume Generator
        </Typography>
        <Typography variant='subtitle1' color="primary.dark">
          MIT © Gabriel Hrastovic 2022
        </Typography>
        
    </AppBar>
    
  );
}

export default AppHeader
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const Personal = function(){
    return (
        
          
      <Grid container spacing={3}>
          
        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='First Name'
          id='first-name'
          color="secondary"
          fullWidth
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Last Name'
          id='last-name'
          color="secondary"
          fullWidth
          
           />
        </Grid>

     <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Email'
          id='email'
          type="email"
          color="secondary"
          fullWidth
          
        />
    </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Phone Number'
          id='phone-number'
          color="secondary"
          fullWidth
          
      />
 </Grid>
</Grid>
        
        
        
        
    )
}

export default Personal
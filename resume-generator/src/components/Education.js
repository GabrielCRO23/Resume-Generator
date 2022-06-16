import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Education = function(){
    return(
<Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder='Name of Organization'
            id='occupation'
            color="secondary"
            fullWidth
            
                />
           </Grid>
  
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder='Certification or degree acquired'
            id='employer'
            color="secondary"
            fullWidth
            
             />
          </Grid>
  
       <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder="mm/dd/yyyy"
            label='Start Date'
            id='start-date'
            color="secondary"
            fullWidth
            
          />
      </Grid>
  
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            label='End Date' 
            placeholder="mm/dd/yyyy"
            id='end-date'
            color="secondary"
            fullWidth
            
        />
   </Grid>
   </Grid>
    )
}

export default Education
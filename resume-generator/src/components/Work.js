import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Work = function({setAddFields}){
    function addFieldsHandler(e){
        console.log(<Work></Work>)
        setAddFields(<Work></Work>)
    }
    return (
        
          
      <Grid container spacing={3}>
          
        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Occupation'
          id='occupation'
          color="secondary"
          fullWidth
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Employer'
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

 <Grid item xs={12} sm={12}>
         <TextField
          variant='filled'
          placeholder="Write about your job duties"
          id='duties'
          color="secondary"
          fullWidth
          multiline
          rows='6'
          
          
      />
 </Grid>
 <Grid item xs={12} sm={12}>
 <Button onClick={addFieldsHandler}variant="contained" color="secondary" sx={{
       marginTop:'2rem'
       }}>


          

  
      Add additional experience</Button>
</Grid>
</Grid>
        
        
        
        
    )
}

export default Work
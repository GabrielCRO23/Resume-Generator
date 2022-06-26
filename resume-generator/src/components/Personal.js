import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const Personal = function({personalInfo, setPersonalInfo}){


    function handleChangeInput(event){
        const values = [...personalInfo];
        values[event.target.name] = event.target.value
        setPersonalInfo(values);
    }


    return (
        
          
      <Grid container spacing={3}>
          
          
        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='First Name'
          name='firstname'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(event)}
          value={personalInfo.firstname}
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Last Name'
          name='lastname'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(event)}
          value={personalInfo.lastname}
          
           />
        </Grid>

     <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Email'
          name='email'
          type="email"
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(event)}
          value={personalInfo.email}
          
        />
    </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Phone Number'
          name='phonenumber'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(event)}
          value={personalInfo.phonenumber}
          
      />
 </Grid>
</Grid>
        
        
        
        
    )
}

export default Personal
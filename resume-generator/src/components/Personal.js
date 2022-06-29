import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const Personal = function({personalInfo, setPersonalInfo}){


    function handleChangeInput(index, event){
        const values = [...personalInfo];
        values[index][event.target.name] = event.target.value
        setPersonalInfo(values);
    }


    return (
        
          
      <Grid container spacing={3}>

{
                personalInfo.map((personal, index) => (
          
          <React.Fragment key={index}>
        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='First Name'
          name='firstname'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.firstname}
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Last Name'
          name='lastname'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.lastname}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Your Title'
          name='title'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.title}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Personal Website'
          name='website'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.website}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Other Website'
          name='websitetwo'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.websitetwo}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Address'
          name='address'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.address}
          
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
          onChange={event => handleChangeInput(index, event)}
          value={personal.email}
          
        />
    </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Phone Number'
          name='phonenumber'
          color="secondary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.phonenumber}
          
      />
 </Grid>
 </React.Fragment>
 ))
}
</Grid>
        
        
        
        
    )
}

export default Personal
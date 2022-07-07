import React from 'react';
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
          color="primary"
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
          color="primary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.lastname}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Your Title (optional)'
          name='title'
          color="primary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.title}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Personal Website (optional)'
          name='website'
          color="primary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.website}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Other Website (optional)'
          name='websitetwo'
          color="primary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.websitetwo}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Social media/optional link (optional)'
          name='websitethree'
          color="primary"
          fullWidth
          onChange={event => handleChangeInput(index, event)}
          value={personal.websitethree}
          
           />
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Address (optional)'
          name='address'
          color="primary"
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
          color="primary"
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
          color="primary"
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
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Work = function({formFields, setFormFields}){
    

    function handleChangeInput(index, event){
        const values = [...formFields];
        values[index][event.target.name] = event.target.value
        setFormFields(values);
    }

    function handleAdd(){
        setFormFields([...formFields, { occupation: "", employer: "", startdate: "", enddate: "", duties: "" }])
    }

    function handleRemove(index){
        const values = [...formFields]
        values.splice(index, 1)
        setFormFields(values)
    }

    

    function handleLog(index){
        
        console.log(formFields[index].occupation)
    }

   

    return (
        
        
    
          
      <Grid container spacing={3}>
          

            
            {
                formFields.map((formField, index) => (
                    
             
        <React.Fragment key={index}>
        <Grid item xs={12} sm={6}>
         <TextField
          
          variant='filled'
          placeholder='Occupation'
          name='occupation'
          color="secondary"
          fullWidth
          value={formField.occupation}
          onChange={event => handleChangeInput(index, event)}
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Employer'
          name='employer'
          color="secondary"
          fullWidth
          value={formField.employer}
          onChange={event => handleChangeInput(index, event)}
           />
        </Grid>

     <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder="mm/dd/yyyy"
          label='Start Date'
          name='startdate'
          color="secondary"
          fullWidth
          value={formField.startdate}
          onChange={event => handleChangeInput(index, event)}
          
        />
    </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          label='End Date' 
          placeholder="mm/dd/yyyy"
          name='enddate'
          color="secondary"
          fullWidth
          value={formField.enddate}
          onChange={event => handleChangeInput(index, event)}
      />
 </Grid>

        <Grid item xs={12} sm={12}>
         <TextField
          variant='filled'
          placeholder="Write about your job duties"
          name='duties'
          color="secondary"
          fullWidth
          multiline
          rows='6'
          value={formField.duties}
          onChange={event => handleChangeInput(index, event)}
          
      />
      <hr></hr>
 </Grid>
 <Grid item xs={12} sm={12}>
       <Button onClick={() => handleRemove(index)}color="primary" variant="contained">Delete</Button>
   </Grid>
 </React.Fragment>
))
}
<Grid item xs={12} sm={12}>
 <Button onClick={() => handleAdd()}variant="contained" color="secondary" sx={{
       margin:'2rem'
       }}>


          

  
      Add experience</Button>
      <Button variant="contained" onClick={() => handleLog()}>Check console log</Button>
      </Grid>    
       

    


</Grid>
         
             
              
    )
}



export default Work
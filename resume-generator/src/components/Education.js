import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Education = function(){

    const [formFields, setFormFields] = useState([
        { school: "", certification: "", startdate: "", enddate: "" },
    ]);

    function handleChangeInput(index, event){
        const values = [...formFields];
        values[index][event.target.name] = event.target.value
        setFormFields(values);
    }

    function handleAdd(){
        setFormFields([...formFields, { school: "", certification: "", startdate: "", enddate: "" }])
    }
    


    return(
<Grid container spacing={3}>
          
                {
                formFields.map((formField, index) => (

        <React.Fragment key={index}>
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder='Name of School'
            name="school"
            color="secondary"
            fullWidth
            value={formField.school}
            onChange={event => handleChangeInput(index, event)}
            
                />
           </Grid>
  
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder='Certification or degree acquired'
            name="certification"
            color="secondary"
            fullWidth
            value={formField.certification}
            onChange={event => handleChangeInput(index, event)}
            
             />
          </Grid>
  
       <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder="mm/dd/yyyy"
            label='Start Date'
            name="startdate"
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
            name="enddate"
            color="secondary"
            fullWidth
            value={formField.enddate}
            onChange={event => handleChangeInput(index, event)}
            
        />
   </Grid>
   </React.Fragment>
))
}



   <Button onClick={() => handleAdd()}variant="contained" color="secondary" sx={{
       margin:'2rem'
     }}>
       
       
       Add additional education</Button>


   </Grid>
    )
}

export default Education
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Education = function({formTwoFields, setFormTwoFields}){


    function handleChangeInput(index, event){
        const values = [...formTwoFields];
        values[index][event.target.name] = event.target.value
        setFormTwoFields(values);
    }

    function handleAdd(){
        setFormTwoFields([...formTwoFields, { school: "", certification: "", startdate: "", enddate: "" }])
    }

    function handleRemove(index){
        const values = [...formTwoFields]
        values.splice(index, 1)
        setFormTwoFields(values)
    }
    


    return(
<Grid container spacing={3}>
          
                {
                formTwoFields.map((formTwoField, index) => (

        <React.Fragment key={index}>
          <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            placeholder='Name of School'
            name="school"
            color="secondary"
            fullWidth
            value={formTwoField.school}
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
            value={formTwoField.certification}
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
            value={formTwoField.startdate}
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
            value={formTwoField.enddate}
            onChange={event => handleChangeInput(index, event)}
            
        />
    
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
       
       
       Add education</Button>

       </Grid>
   </Grid>
    )
}

export default Education
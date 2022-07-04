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
            color="primary"
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
            color="primary"
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
            color="primary"
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
            color="primary"
            fullWidth
            value={formTwoField.enddate}
            onChange={event => handleChangeInput(index, event)}
            
        />
    
   </Grid>

   <Grid item xs={12} sm={6}>
           <TextField
            variant='filled'
            label='Location' 
            placeholder="Location"
            name="location"
            color="primary"
            fullWidth
            value={formTwoField.location}
            onChange={event => handleChangeInput(index, event)}
            
        />
    
   </Grid>

   
   <Grid item xs={12} sm={12}>
       <Button onClick={() => handleRemove(index)} variant="outlined" color="secondary">Delete</Button>
   </Grid>
   </React.Fragment>
))
}


<Grid item xs={12} sm={12}>
   <Button onClick={() => handleAdd()}variant="outlined" color="secondary" sx={{
       
     }}>
       
       
       Add education</Button>

       </Grid>
   </Grid>
    )
}

export default Education
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const Work = function({formFields, setFormFields}){

    




    function handleChangeInput(index, targetName, targetValue){
        const values = [...formFields];
        values[index][targetName] = targetValue
        setFormFields(values);
    }



    function handleAdd(){
        setFormFields([...formFields, { occupation: "", employer: "", startdate: "", enddate: "", location:"", duties: "" }])
        console.log(formFields.length)
        
    }

    function handleRemove(index){
        const values = [...formFields]
        values.splice(index, 1)
        setFormFields(values)
    }

   
    


   

    return (
        
        
    
          
      <Grid container spacing={3}>
          

            
            {
                formFields.map((formField, index) => (
                    
             
        <React.Fragment key={index}>
        <Grid item xs={12} sm={6}>
         <TextField
          
          variant='filled'
          placeholder='Occupation/Title'
          name='occupation'
          color="primary"
          fullWidth
          value={formField.occupation}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
          
              />
         </Grid>

         <Grid item xs={12} sm={6}>
         <TextField
          
          variant='filled'
          placeholder='Location'
          name='location'
          color="primary"
          fullWidth
          value={formField.location}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Employer'
          name='employer'
          color="primary"
          fullWidth
          value={formField.employer}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
           />
        </Grid>

     <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder="mm/dd/yyyy"
          label='Start Date'
          name='startdate'
          color="primary"
          fullWidth
          value={formField.startdate}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
          
        />
    </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          label='End Date' 
          placeholder="mm/dd/yyyy"
          name='enddate'
          color="primary"
          fullWidth
          value={formField.enddate}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
      />
 </Grid>

        <Grid item xs={12} sm={12}>

        <ReactQuill 
                style={{backgroundColor: "white"}} 
                theme="snow" 
                onChange={ value => handleChangeInput(index, 'duties', value) }
                defaultValue = { formField.duties }
    
                placeholder="Write about your experience or project here, be sure to format it how you want it to look on the resume"

            />
      
      
      <hr></hr>
 </Grid>
 <Grid item xs={12} sm={12}>
       <Button onClick={() => handleRemove(index)}variant="outlined" color="secondary" >Delete</Button>
       
   </Grid>
   
 </React.Fragment>
))
}
<Grid item xs={12} sm={12}>
 <Button onClick={() => handleAdd()} variant="outlined" color="secondary" sx={{
       
       }}>


          

  
      Add experience</Button>

            
      
      </Grid>    
       

      


</Grid>
         
             
              
    )
}


/*

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



      <CKEditor
          editor={ClassicEditor}
          data={text}
          onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor1 is ready to use!', editor );
        } }
            
          
          onChange={(editor) => {
              const data = editor.getData()
              setText(data)
          }}
      />

      */


export default Work
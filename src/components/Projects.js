import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const Projects = function({projects, setProjects}){

    




    function handleChangeInput(index, targetName, targetValue){
        const values = [...projects];
        values[index][targetName] = targetValue
        setProjects(values);
    }



    function handleAdd(){
        setProjects([...projects, { projectTitle: "", link: "", tech: "", about: ""}])
        
    }

    function handleRemove(index){
        const values = [...projects]
        values.splice(index, 1)
        setProjects(values)
    }

   
    


   

    return (
        
        
    
          
      <Grid container spacing={3}>
          

            
            {
                projects.map((project, index) => (
                    
             
        <React.Fragment key={index}>
        <Grid item xs={12} sm={6}>
         <TextField
          
          variant='filled'
          placeholder='Project Title'
          name='projectTitle'
          color="primary"
          fullWidth
          value={project.projectTitle}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
          
              />
         </Grid>

         <Grid item xs={12} sm={6}>
         <TextField
          
          variant='filled'
          placeholder='Project Link'
          name='link'
          color="primary"
          fullWidth
          value={project.link}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
          
              />
         </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          variant='filled'
          placeholder='Technology used or additional info'
          name='tech'
          color="primary"
          fullWidth
          value={project.tech}
          onChange={event => handleChangeInput(index, event.target.name, event.target.value)}
           />
        </Grid>


        <Grid item xs={12} sm={12}>

        <ReactQuill 
                style={{backgroundColor: "white"}} 
                theme="snow" 
                onChange={ value => handleChangeInput(index, 'about', value) }
                defaultValue = { project.about }
    
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


          

  
      Add project</Button>

            
      
      </Grid>    
       

      


</Grid>
         
             
              
    )
}

export default Projects
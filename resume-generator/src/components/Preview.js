import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Preview = function({formFields, setFormFields, personalInfo, setPersonalInfo, isToggled, setIsToggled}){

 
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        dark: '#35342f',
      },
      secondary: {
        main: '#37bbe4',
        dark: '#fff',
      },
    },
  });


    return(
      <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
       
        <div>
          
    
              <Typography variant="h5">{personalInfo.firstname}</Typography>
              <Typography variant="h5">{personalInfo.lastname}</Typography>

        
        {
            formFields.map((formField, index) => (

            <React.Fragment key={index}>
              
              <Typography variant="h5">{formField.occupation}</Typography>
              <Typography variant="h5">{formField.employer}</Typography>
              
              
              </React.Fragment>
            ))
          }
          <Button color="secondary" variant="contained" onClick={() => setIsToggled(isToggled)}>Back to editing</Button>
        </div>
        </ThemeProvider>
        </Container>
        
      


     



        
        
        
    )
}

export default Preview
/*

{
    formFields.map((formField) => (
      
      <h1>{formField.occupation}</h1>
      
    ))
  }

  */

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Preview = function({formFields, setFormFields, formTwoFields, setFormTwoFields, personalInfo, setPersonalInfo, isToggled, setIsToggled}){

 
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
        {
            personalInfo.map((personal, index) => (
              <React.Fragment key={index}>
              <Typography variant="h2">{personal.firstname}</Typography>
              <Typography variant="h2">{personal.lastname}</Typography>
              <Typography variant="h5">{personal.email}</Typography>
              <Typography variant="h5">{personal.phonenumber}</Typography>
              </React.Fragment>
              ))
            }
        
              
        
        
        
        {
            formFields.map((formField, index) => (

            <React.Fragment key={index}>
              
              <Typography variant="h5">{formField.occupation}</Typography>
              <Typography variant="h5">{formField.employer}</Typography>
              
              
              </React.Fragment>
            ))
          }



        {
            formTwoFields.map((formTwoField, index) => (

            <React.Fragment key={index}>
              
              <Typography variant="h5">{formTwoField.school}</Typography>
              <Typography variant="h5">{formTwoField.certification}</Typography>
              
              
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

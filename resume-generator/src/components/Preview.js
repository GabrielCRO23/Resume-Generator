import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const Preview = function({formFields, setFormFields, formTwoFields, setFormTwoFields, personalInfo, setPersonalInfo, isToggled, setIsToggled}){

 
  let theme = createTheme({
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
  theme = responsiveFontSizes(theme);


    return(
      <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
       
        <div>
        {
            personalInfo.map((personal, index) => (
              <React.Fragment key={index}>
                <Box mt={5} sx={{display: 'flex', justifyContent: 'center',}}>
              <Typography variant="h3">{personal.firstname}&nbsp;</Typography>
              <Typography color="secondary"variant="h3">{personal.lastname}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="body1">{personal.title}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="subtitle1">{personal.address}</Typography>
              </Box>
              <hr></hr>
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
              <Typography variant="h5">{formField.startdate}</Typography>
              <Typography variant="h5">{formField.enddate}</Typography>
              <Typography variant="h5">{formField.duties}</Typography>
              
              
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

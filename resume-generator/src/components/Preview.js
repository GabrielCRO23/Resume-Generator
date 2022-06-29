import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import parse from 'html-react-parser';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link'
import SkillsHeader from './SkillsHeader'

const Preview = function({formFields, setFormFields, formTwoFields, setFormTwoFields, personalInfo, setPersonalInfo, isToggled, setIsToggled, value, setValue, skills, setSkills}){

 
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
                <Box mt={2.5} sx={{display: 'flex', justifyContent: 'center',}}>
              <Typography variant="h3">{personal.firstname}&nbsp;</Typography>
              <Typography variant="h3">{personal.lastname}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="subtitle1">{personal.title}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="subtitle1">{personal.address}</Typography>
              </Box>
              
              <Box mt={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: {md: '1rem', xs: '0.5rem'}, flexDirection: {xs: 'column', md: 'row'} }}>
              <Typography variant="subtitle2">{personal.phonenumber}</Typography>
              <Divider color="black" orientation="vertical" flexItem></Divider>
              <Typography variant="subtitle2">{personal.email}</Typography>
              <Divider color="black" orientation="vertical" flexItem></Divider>
              <Link href={personal.website} color="#000000" variant="subtitle2">{personal.website}</Link>
              <Divider color="black" orientation="vertical" flexItem></Divider>
              <Link href={personal.websitetwo} color="#000000" variant="subtitle2">{personal.websitetwo}</Link>
              </Box>
              
              </React.Fragment>
              ))
            }


              <React.Fragment>
                <Typography variant="h4" align="left" sx={{fontWeight: 'bold'}}>Skills</Typography>
                <hr></hr>
                <Typography sx={{ lineHeight: 0.5}} variant="subtitle2">{parse(skills)}</Typography>
                <hr></hr>
              </React.Fragment>
              
        
        
        
        
        
        {
            formFields.map((formField, index) => (

            <React.Fragment key={index}>
              
              <Typography variant="h5">{formField.occupation}</Typography>
              <Typography variant="h5">{formField.employer}</Typography>
              <Typography variant="h5">{formField.startdate}</Typography>
              <Typography variant="h5">{formField.enddate}</Typography>
              <Typography color="red" variant="h5">{parse(value)}</Typography>
              
              
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

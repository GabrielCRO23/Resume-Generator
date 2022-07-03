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
import WorkHeader from './WorkHeader'
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';



const Preview = function({formFields, setFormFields, 
  formTwoFields, setFormTwoFields, 
  personalInfo, setPersonalInfo,
  projects, setProjects, 
  isToggled, setIsToggled, 
  skills, setSkills}){

    


 
  let theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        dark: '#35342f',
      },
      secondary: {
        main: '#107206',
        dark: '#fff',
      },
    },
  });
  theme = responsiveFontSizes(theme);


    return(
      
      <ThemeProvider theme={theme}>
       
        <div>
        <Container maxWidth="xl">

          
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
              
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: {md: '1rem', xs: '0.5rem'}, flexDirection: {xs: 'column', md: 'row'} }}>
              <Typography variant="subtitle2">{personal.phonenumber}</Typography>
              <Divider color="#000000" orientation="vertical" flexItem></Divider>
              <Typography variant="subtitle2">{personal.email}</Typography>
              <Divider color="#000000" orientation="vertical" flexItem></Divider>
              <Link href={personal.website} color="#000000" underline="none" variant="subtitle2">{personal.website}</Link>
              <Divider color="#000000" orientation="vertical" flexItem></Divider>
              <Link href={personal.websitetwo} color="#000000" underline="none" variant="subtitle2">{personal.websitetwo}</Link>
              </Box>
              
              </React.Fragment>
              ))
            }


              <React.Fragment>
                
                <Typography variant="h4" align="left">Skills</Typography>
                <hr></hr>
                <Typography ml={5} sx={{ lineHeight: {md: 0.5, xs: 1}}} variant="subtitle2">{parse(skills)}</Typography>
                
              </React.Fragment>
              
        



        <Typography variant="h4" align="left"  > Projects </Typography>
      
       <hr></hr>


{
            projects.map((project, index) => (
              

            <React.Fragment key={index}>
              <Typography ml={5} variant="h5" sx={{fontWeight: 700}}>{project.projectTitle}</Typography>
              <Typography ml={5} variant="h6" sx={{fontStyle: 'italic'}}>{project.link}</Typography>
              <Typography ml={5} variant="h6">{project.tech}</Typography>
              <Typography ml={5} variant="h6">{parse(project.about)}</Typography>
              
              
              
              </React.Fragment>
            ))
          }




              
        <Typography variant="h4" align="left"  > Experience </Typography>
      
              <hr></hr>

              
              


        
        {
            formFields.map((formField, index) => (
              

            <React.Fragment key={index}>
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{fontWeight: 700}}variant="h5">{formField.employer}</Typography>
              <Typography sx={{marginLeft: 'auto'}} variant="h6">{formField.location}</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{fontStyle: 'italic'}}variant="h6">{formField.occupation}</Typography>
              <Typography sx={{marginLeft: 'auto'}} variant="h6">{formField.startdate}&nbsp;-&nbsp;{formField.enddate}</Typography>
              </Box>

              
              
              <Typography ml={5} variant="h6">{parse(formField.duties)}</Typography>
              
              
              
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


      </Container>
        </div>
        <Box className="noprint" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button color="secondary" variant="outlined" onClick={() => setIsToggled(isToggled)}>Back to editing</Button>
          <Button color="secondary" variant="outlined" onClick={()=> window.print()}>
        Download resume as PDF
      </Button>
      </Box>
        </ThemeProvider>
        
        
      


     



        
        
        
    )
}

export default Preview
/*

{
    formFields.map((formField) => (
      
      <h1>{formField.occupation}</h1>
      
    ))
  }

{parse(formField.duties)}


  */

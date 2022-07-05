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
              
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: {md: '1rem', xs: '0.5rem'} }}>
              <Typography variant="subtitle2">{personal.phonenumber}</Typography>
              {personal.email.length > 0 &&
              <Divider orientation="vertical" flexItem></Divider>
              }
              <Typography variant="subtitle2">{personal.email}</Typography>
              {personal.website.length > 0 &&
              <Divider orientation="vertical" flexItem></Divider>
              }
              <Link href={personal.website} color="#000000" underline="none" variant="subtitle2">{personal.website}</Link>
              {personal.websitetwo.length > 0 &&
              <Divider orientation="vertical" flexItem></Divider>
              }
              <Link href={personal.websitetwo} color="#000000" underline="none" variant="subtitle2">{personal.websitetwo}</Link>
              {personal.websitethree.length > 0 &&
              <Divider orientation="vertical" flexItem></Divider>
              }
              <Link href={personal.websitethree} color="#000000" underline="none" variant="subtitle2">{personal.websitethree}</Link>
              
              
              
              </Box>
              
              </React.Fragment>
              ))
            }



{skills.length > 0 && 
              <React.Fragment>
              

                 <Typography sx={{ lineHeight: 0.5, fontWeight: 700}} variant="h6" align="left">Skills</Typography>
                <hr></hr>
                <Typography ml={5} sx={{ lineHeight: 0.5}} variant="h6">{parse(skills)}</Typography>
              
              </React.Fragment>
  }
        
              {projects.length > 0 && 
              <React.Fragment>

        <Typography variant="h6" align="left" sx={{lineHeight: 0.5, fontWeight: 700}}  > Projects </Typography>
      
       <hr></hr>
       </React.Fragment> 
      }

{
            projects.map((project, index) => (
              

            <React.Fragment key={index}>
              <Box sx={{display: 'flex'}}>
              <Typography  ml={5}variant="h6" sx={{lineHeight: 0.5, fontWeight: 700}}>{project.projectTitle}</Typography>
              <Typography sx={{lineHeight: 0.5, marginLeft: 'auto'}} variant="h6">{project.tech}</Typography>
              </Box>
              <Link ml={5} href={project.link} color="#000000" underline="none" sx={{fontStyle: 'italic'}}variant="h6">{project.link}</Link>
              
              <Typography  ml={5}  variant="h6">{parse(project.about)}</Typography>
              
              
              
              </React.Fragment>
            ))
          }


{formFields.length > 0 && 
          <React.Fragment>
        
        <Typography sx={{lineHeight: 0.5, fontWeight: 700}} variant="h6" align="left"  >Work Experience </Typography>
      
              <hr></hr>
        
         </React.Fragment>     
  }    


              
        {
            formFields.map((formField, index) => (
              
              
            <React.Fragment key={index}>
              
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{lineHeight: 0.5, fontWeight: 700}}variant="h6">{formField.employer}</Typography>
              <Typography sx={{lineHeight: 0.5, marginLeft: 'auto'}} variant="h6">{formField.location}</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{lineHeight: 1.5, fontStyle: 'italic'}}variant="h6">{formField.occupation}</Typography>
              <Typography sx={{lineHeight: 1.5, marginLeft: 'auto'}} variant="h6">{formField.startdate}&nbsp;-&nbsp;{formField.enddate}</Typography>
              </Box>

              
              
              <Typography ml={5} variant="h6">{parse(formField.duties)}</Typography>
              
              
              
              </React.Fragment>
              
            ))
          }
        


        {formTwoFields.length > 0 && 
          <React.Fragment>
        
        <Typography sx={{lineHeight: 0.5, fontWeight: 700}}variant="h6" align="left"  > Education </Typography>
      
              <hr></hr>
        
         </React.Fragment>     
  }    





        {
            formTwoFields.map((formTwoField, index) => (

            <React.Fragment key={index}>
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{lineHeight: 0.5, fontWeight: 700}} variant="h6">{formTwoField.school}</Typography>
              <Typography sx={{lineHeight: 0.5, marginLeft: 'auto'}} variant="h6">{formTwoField.location}</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
              <Typography ml={5} sx={{lineHeight: 1.5, }} variant="h6">{formTwoField.certification}</Typography>
              <Typography sx={{lineHeight: 1.5, marginLeft: 'auto'}} variant="h6">{formTwoField.startdate}&nbsp;-&nbsp;{formTwoField.enddate}</Typography>
              </Box>
              
              
              
              
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

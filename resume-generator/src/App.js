import { useState } from 'react'
import './App.css';
import AppHeader from './components/Header'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Personal from './components/Personal'
import PersonalHeader from './components/PersonalHeader'
import WorkHeader from './components/WorkHeader'
import EducationHeader from './components/EducationHeader'
import SkillsHeader from './components/SkillsHeader'
import Education from './components/Education'
import Work from './components/Work'
import Skills from './components/Skills'
import Preview from './components/Preview'
import parse from 'html-react-parser';







import { Routes, Route, Link } from "react-router-dom";


/*
{
                formFields.map((formField) => (
                  
                  <h1>{formField.occupation}</h1>
                  
                ))
              }
*/


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





function App() {


  

  

  const [personalInfo, setPersonalInfo] = useState([
    { firstname: "", lastname: "", title: "", website: "", websitetwo: "", address: "", email: "", phonenumber: "", }
  ])

  const [formFields, setFormFields] = useState([
    { occupation: "", employer: "", startdate: "", enddate: "", duties: "" }
]);

  const [formTwoFields, setFormTwoFields] = useState([
  { school: "", certification: "", startdate: "", enddate: "" },
]);

const [values, setValues] =  useState("")

const [skills, setSkills] = useState("")
  
  const [isToggled, setIsToggled] = useState(false);

//...//

  // have some way to change the preview mode
  // if they are not in preview mode, display the form to change values
  // if they are in preview mode, display your previewing component





if (isToggled){
  document.body.style.backgroundColor = "white"
  return <Preview formFields={formFields} setFormFields={setFormFields}
  values={values} setValues={setValues}
  skills={skills} setSkills={setSkills} 
  formTwoFields={formTwoFields} setFormTwoFields={setFormFields} 
  personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} 
  isToggle={isToggled} setIsToggled={setIsToggled}

  ></Preview>
  
}
  document.body.style.backgroundColor = "#e1e0dd"
  return (
    
    <Container maxWidth="lg" >
    <ThemeProvider theme={theme}>
    
    <div className="App">

      
    <AppHeader></AppHeader>
    
     <Box my={10}>
     <PersonalHeader></PersonalHeader>
     <Personal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}></Personal>
     </Box>
     <hr color="#35342f"></hr>


     <SkillsHeader></SkillsHeader>
     <Skills skills={skills} setSkills={setSkills}></Skills>
     
     
     <hr color="#35342f"></hr>
     <WorkHeader></WorkHeader>
     <Work formFields={formFields} setFormFields={setFormFields} values={values} setValues={setValues}></Work>
     
     
     

     
              


     
     <hr color="#35342f"></hr>
     <EducationHeader></EducationHeader>
     <Education formTwoFields={formTwoFields} setFormTwoFields={setFormTwoFields}></Education>
     
    <hr></hr>
    
    
    <Button color="secondary" variant="contained" onClick={() => setIsToggled(!isToggled)}>Preview Resume</Button>
     
    
    </div>
    
    </ThemeProvider>
    </Container>
  );
}

export default App;

/*

<Routes>
        <Route path="/" element={<Preview />} />
        <Route path="preview" element={<Preview />} />
      </Routes>
{ isToggled && <Preview formFields={formFields} setFormFields={setFormFields}></Preview> }


function handleLog(){
        
  formFields.forEach((formField) => {
      console.log(formField.occupation)
      console.log(formField.employer)
      console.log(formField.startdate)
      console.log(formField.enddate)
      console.log(formField.duties)
  })
  
  
}

      */

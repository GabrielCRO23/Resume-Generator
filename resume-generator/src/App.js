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
import Education from './components/Education'
import Work from './components/Work'
import Preview from './components/Preview'
import AppInit from './AppInit'


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
  
  const [isToggled, setIsToggled] = useState(false);

//...//

  // have some way to change the preview mode
  // if they are not in preview mode, display the form to change values
  // if they are in preview mode, display your previewing component







  return (
    <Container maxWidth="lg">
    <ThemeProvider theme={theme}>
    <div className="App">
    { isToggled ? <Preview></Preview> : <AppInit isToggled={isToggled} setIsToggled={setIsToggled}></AppInit> }
     
    
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

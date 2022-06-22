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
  
  const [formFields, setFormFields] = useState([
    { occupation: "", employer: "", startdate: "", enddate: "", duties: "" },
]);

  const [formTwoFields, setFormTwoFields] = useState([
  { school: "", certification: "", startdate: "", enddate: "" },
]);





  return (
    <Container maxWidth="lg">
    <ThemeProvider theme={theme}>
    <div className="App">
      
     <AppHeader></AppHeader>
     
     <Box my={10}>
     <PersonalHeader></PersonalHeader>
     <Personal></Personal>
     </Box>
     
     <hr color="#35342f"></hr>
     <WorkHeader></WorkHeader>
     <Work formFields={formFields} setFormFields={setFormFields}></Work>
     

     
     


     
     <hr color="#35342f"></hr>
     <EducationHeader></EducationHeader>
     <Education formTwoFields={formTwoFields} setFormTwoFields={setFormTwoFields}></Education>
     
    <hr></hr>
    <Button variant="contained" color="secondary">Preview Resume</Button>
    </div>
    </ThemeProvider>
    </Container>
  );
}

export default App;

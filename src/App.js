import { useState } from "react";
import "./App.css";
import AppHeader from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Personal from "./components/Personal";
import PersonalHeader from "./components/PersonalHeader";
import WorkHeader from "./components/WorkHeader";
import EducationHeader from "./components/EducationHeader";
import SkillsHeader from "./components/SkillsHeader";
import ProjectHeader from "./components/ProjectHeader";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Preview from "./components/Preview";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#35342f",
    },
    secondary: {
      main: "#107206",
      dark: "#fff",
    },
  },
});

function App() {
  const [personalInfo, setPersonalInfo] = useState([
    {
      firstname: "",
      lastname: "",
      title: "",
      website: "",
      websitetwo: "",
      websitethree: "",
      address: "",
      email: "",
      phonenumber: "",
    },
  ]);

  const [formFields, setFormFields] = useState([]);

  const [projects, setProjects] = useState([]);

  const [formTwoFields, setFormTwoFields] = useState([]);

  const [skills, setSkills] = useState("");

  const [isToggled, setIsToggled] = useState(false);

  if (isToggled) {
    document.body.style.backgroundColor = "white";
    return (
      <Preview
        formFields={formFields}
        setFormFields={setFormFields}
        skills={skills}
        setSkills={setSkills}
        projects={projects}
        setProjects={setProjects}
        formTwoFields={formTwoFields}
        setFormTwoFields={setFormFields}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        isToggle={isToggled}
        setIsToggled={setIsToggled}
      ></Preview>
    );
  }
  document.body.style.backgroundColor = "#e4e8ee";
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader></AppHeader>

          <Box my={10}>
            <PersonalHeader></PersonalHeader>
            <Personal
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            ></Personal>
          </Box>
          <hr color="#35342f"></hr>

          <SkillsHeader></SkillsHeader>
          <Skills skills={skills} setSkills={setSkills}></Skills>
          <hr color="#35342f"></hr>

          <ProjectHeader></ProjectHeader>
          <Projects projects={projects} setProjects={setProjects}></Projects>
          <hr color="#35342f"></hr>

          <WorkHeader></WorkHeader>
          <Work formFields={formFields} setFormFields={setFormFields}></Work>
          <hr color="#35342f"></hr>

          <EducationHeader></EducationHeader>
          <Education
            formTwoFields={formTwoFields}
            setFormTwoFields={setFormTwoFields}
          ></Education>

          <hr></hr>

          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setIsToggled(!isToggled)}
          >
            Preview Resume
          </Button>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;

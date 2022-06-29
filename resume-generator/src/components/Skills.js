import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Skills = function({skills, setSkills}){
    return(
        <ReactQuill style={{backgroundColor: "white"}} theme="snow" onChange={setSkills} defaultValue={skills} placeholder="Write your skills here..."
        />
    )
}

export default Skills
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Skills = function({skills, setSkills}){
    return(
        <ReactQuill style={{backgroundColor: "white"}} theme="snow" onChange={setSkills}  defaultValue={skills} placeholder="Write your skills here, be sure to format it how you want it to look on the resume"
        />
    )
}

export default Skills
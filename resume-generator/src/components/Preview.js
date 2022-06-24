import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Preview = function({formFields, setFormFields}){

 



    return(

       
       
        <div>
       

        {
            formFields.map((formField, index) => (

            <React.Fragment key={index}>

              <h1>{formField.occupation}</h1>
              
              </React.Fragment>
            ))
          }
        </div>
        
        
      


     



        
        
        
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

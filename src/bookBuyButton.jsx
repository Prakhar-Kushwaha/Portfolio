import React from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function(){
    return (
       <Stack direction= "row" spacing={1.5} sx={{padding : 2 , margin:2}}>
        <Button variant="outlined"
        sx={{
          backgroundColor : "#FFE3A9",
          color : "#0B1D51"
        }}
        href="https://www.amazon.in/Beings-Humanity-Prakhar-Kushwaha/dp/9370465480/" target="_blank">
          Buy Paperback(India) 
        </Button>
        <br></br>
         <Button variant="outlined"
         
         sx={{
          backgroundColor : "#FFE3A9",
          color : "#0B1D51"
        }}
        href="https://mybook.to/BeingsOfHumanity_Paper" target="_blank">
          Buy Paperback
        </Button>
        <Button variant="contained"
        sx={{
          backgroundColor : "#FFE3A9",//"#8CCDEB",
          color : "#0B1D51"
        }}
        href="https://mybook.to/BeingsOfHumanity" target="_blank">
          Read E-Book
        </Button>
        
       </Stack> 
    );
}
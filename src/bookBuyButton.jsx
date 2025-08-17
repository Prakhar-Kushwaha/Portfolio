import React from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function(){
    return (
       <Stack direction= "row" sx={{padding : 2 , margin:2}}>
         <Button variant="outlined" href="https://mybook.to/BeingsOfHumanity_Paper" target="_blank">
          Buy Paperback
        </Button>
        <Button variant="contained" href="https://mybook.to/BeingsOfHumanity" target="_blank">
          Read E-Book
        </Button>
       </Stack> 
    );
}
import {React , useState} from "react";
import { Container, Paper, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function(){
    return(
        <Container sx={{backgroundColor : "transparent"}}>
                    <Typography variant="h6"
                    sx={{
                    fontFamily: "Actor",
                    fontOpticalSizing: "auto",
                    fontWeight: 500,
                    fontStyle: "normal",
                    }}
                    
                    gutterBottom>A soul divided between poetry and Programming. My heart belongs to Literature , my mind belongs to code. I've published books , written countless verses ( too shy to share them ) and now I am mastering Java to weave stories in the Language of Machines.
                         </Typography>

               
        </Container>
    )
}
import {React , useState} from "react";
import { Container, Paper, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "./bookBuyButton.jsx"

export default function({images , title}){
  
  
    return (
      <Container sx={{backgroundColor : "transparent"}}>
      <Typography variant="h6"
      sx={{
      fontFamily: "Actor",
      fontOpticalSizing: "auto",
      fontWeight: 500,
      fontStyle: "normal",
      color : "#ffffff",
      textAlign: "left"
      }}
      
      gutterBottom>
        Welcome to GitBucket, a custom version control system built in Java using the Spring Framework.<br></br>
Inspired by Git, but tailored for custom storage and workflows using Cloudflare R2 and MongoDB.
<br></br>
<br></br>
<b>Tech Stack</b>

<ul>
  <li>Spring Boot - Backend framework</li>
   <li>Spring Shell - Interactive shell-based CLI</li>
   <li>Cloudflare R2 - Cloud object storage for file versions</li>
    <li>MongoDB Atlas - User authentication and metadata storage</li>
</ul>
           </Typography>

 
</Container>
    )

}
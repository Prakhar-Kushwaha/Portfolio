import {React , useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AppBar, Toolbar, Typography } from "@mui/material";
import RedditIcon from '@mui/icons-material/Reddit';


// export default function Footer (){
//     return (
//         <Box 
//         component = "footer"
//         sx={
//             {
//                 // position : "fixed",
//                 bottom: 0,
//                 left : 0, 
//                 backgroundColor :  "#2C28A1dd" ,//"#2a5a83ee" ,// "#2C28A1" , 
//                 py: 2,
//                 display : "flex",
//                 justifyContent : "center",
//                 width: "100%"
//                 }
//                 } >
//             <Box>
//                 <ContactStack></ContactStack>
//                 <Typography variant = "body2" sx={{color : "#000000" , mb : "2px"}}>
//                     ©Prakhar Kushwaha. All Rights Reserved 
//                 </Typography>
//             </Box>
//         </Box>
//     )
// }



export default function Footer() {
  return (
    <AppBar 
      component="footer" 
      position="static" 
      sx={{ 
         mx: "auto",  mr: 0, px: 0,
         width : "100dvw",
         ml: { xs: 0, md: "calc(-50vw + 50%)" }, // shift out of centered #root
        backgroundColor: "#0B1D51",//"#2C28A1ca",
        borderTop: "2px solid #ffffff",
        
      }}
    >
      <Toolbar sx={{ flexDirection: "column", alignItems: "center", py: 1 }}>
        <ContactStack />
        <Typography variant="body2" sx={{ color:  "#9c27b0" }}>
          © 2025 Prakhar Kushwaha. All Rights Reserved
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
}



export function ContactStack(){
    return(
        <Stack direction= "row"  spacing ={2} sx={{padding:1 , margin: 1}}>
                    <IconButton aria-label="instagram" onClick= {()=> window.open("https://www.instagram.com/prakhar_149")}>
                        <InstagramIcon sx={{ color: "#ffffff" ,
                            "&:hover": {
                                color: "#E1306C", // Instagram brand color on hover
                            },
                         }}></InstagramIcon>
                    </IconButton>
                    <IconButton aria-label="linkedin" onClick = {()=> window.open("https://www.linkedin.com/in/prakhar-kushwaha-53542834a/")} >
                        <LinkedInIcon sx={{ color: "#ffffff",
                             "&:hover": {
                                color: "#0077B5", // LinkedIn brand color on hover
                            },
                         }}></LinkedInIcon>
                    </IconButton>
                    <IconButton aria-label="reddit"   onClick={()=> window.open("https://www.reddit.com/u/Sudden-Jellyfish9686/s/v6oR4CmuH8")} >
                        <RedditIcon   sx={{ color: "#ffffff" ,
                             "&:hover": {
                                color: "#FF4500", // Reddit brand color on hover
                            },
                        }}></RedditIcon>
                    </IconButton>
                    <IconButton aria-label="github"   onClick={()=> window.open("https://github.com/Prakhar-Kushwaha")}>
                        <GitHubIcon   sx={{ color: "#ffffff" ,
                            "&:hover": {
                                color: "#6cc644", // GitHub green color on hover
                            },
                        }}></GitHubIcon>
                    </IconButton>
                </Stack>
    )
}
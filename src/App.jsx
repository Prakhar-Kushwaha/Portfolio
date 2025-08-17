import { useState } from 'react'

import './App.css'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import Reader from './bookReader.jsx'
import Footer, { ContactStack } from "./footer.jsx";
import Section from "./EmptyBar.jsx"
import About from "./about.jsx"
import Link from "./bookBuyButton.jsx"
import  Box  from "@mui/material/Box";
import GitHubClone from "./Projects.jsx"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
 
  const [darkTheme , setTheme] = useState(true);

  const pages = [
    "./Pg01.jpg",
    "./Pg02.jpg",
    "./Pg03.jpg",
    "./Pg04.jpg",
    "./Pg05.jpg",
    "./Pg06.jpg",
    "./Pg07.jpg",
    "./Pg08.jpg",
    "./Pg09.jpg",
    "./Pg10.jpg",
    "./Pg11.jpg",
    "./Pg12.jpg",
    "./Pg13.jpg",

  ];
  const openBook = [
    "OpenBookPg01.jpg",
    "OpenBookPg02.jpg",
    "OpenBookPg03.jpg",
    "OpenBookPg04.jpg",
    "OpenBookPg05.jpg",
    "OpenBookPg06.jpg",
    "OpenBookPg07.jpg",
    "OpenBookPg08.jpg",
    "OpenBookPg09.jpg",
    "OpenBookPg10.jpg",
    "OpenBookPg11.jpg",
    "OpenBookPg12.jpg",
    "OpenBookPg13.jpg",
    "OpenBookPg14.jpg",
  ];

  const gitHubLink =  <Button 
  sx={{
    marginTop : 2.5
  }}
  variant="contained" href="https://github.com/Prakhar-Kushwaha/githubClone/tree/main" target="_blank">
  Open Code
</Button>

  const videoBox = <Box
sx={{
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  overflow: "hidden",
}}
>
   <iframe
     src="https://www.youtube.com/embed/sUgeazAe4wU"
     title="Version Control CLI Model"
     style={{
       position: "absolute",
       top: 0,
       left: 0,
       width: "100%",
       height: "100%",
     }}
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
   />
  </Box>

  return (
    <>
   <Header darkTheme= {darkTheme}  toggleTheme = {()=>setTheme(!darkTheme)}></Header>

    <Box   display="flex" flexDirection="column" minHeight="100vh">
          <Intro></Intro>
          <Section  title = "About Me">
            {
              <About></About>
            }
          </Section>
          <Section  title = "Publications">
                  <Stack
                    direction={{ xs: "column", md: "row" }}   // column on mobile, row on desktop
                    spacing={4}                               // gap between items
                    sx={{ alignItems: "start", justifyContent: "center" }}
                  >
                    <Reader 
                      title="Beings Of Humanity (Living the Life of Conditioning)" 
                      images={pages} 
                      Link={<Link />} 
                    />
                    <Reader 
                      title="Catalogue of Human Darkness (Open Book)" 
                      images={openBook} 
                      Link={<ContactStack />} 
                    />
                  </Stack>
          </Section>

          <Section  title = "Projects">
            {
              
              [
              <GitHubClone></GitHubClone> , 
              <Reader title = "Verison Control (Scratch CLI Model)" 
              images = {["./img.png" , "img_1.png"]}
              Link= {gitHubLink}>
                
              </Reader>  , 
              // videoBox
            
              ]
            }
          
          </Section> 
        
          

    </Box>
    <Footer></Footer>

    </>
  )
}

export default App




import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



export default function Intro() {
  return (
    <Box component="section" sx = {{textAlign: "center" , padding: 4 , color : "#FFE3A9"}}>
        <Typography variant="subtitle1"
        sx={{
          color : "#8CCDEB"
        }} gutterBottom>Hello I'm</Typography>
        <Typography variant="h4"
         sx={{
          fontFamily: "Playfare Display",
          fontOpticalSizing: "auto",
          fontWeight: 500,
          fontStyle: "normal",
          color: "#725CAD"
        }}
        gutterBottom >Prakhar Kushwaha</Typography>
        <Stack direction="row" 
        spacing={2} 
        justifyContent="center" 
        flexWrap = "wrap"
        sx={{ marginTop: 2 }}>
                <Chip label="Writer"  color="secondary" variant="outlined" />
                <Chip label="Author" color="secondary" variant="outlined" />
                <Chip label="Poet"color="secondary" variant="outlined" />
                <Chip label="Full Stack Developer" color="secondary" variant="outlined" />       
        </Stack>
        <Typography variant="body1"
        sx={{
          fontFamily: "Playfair", 
          fontOpticalSizing: "auto",
          fontWeight: 500,
          fontStyle: "normal",
          color : "#FFE3A9"
        }}
        gutterBottom>If I dont know the names of emotions , would I still know How to Judge?
                    </Typography>
        <Typography variant="body2" gutterBottom sx={{}}> ~ Pen of Despair</Typography>
        

    </Box>
  );
}
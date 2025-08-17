// import React from 'react';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper' ;

// export default function({component , title}){
//     return(
//         <Box sx={{backgroundColor : "transparent" , 
//             width :"100%",
//             left : 0,
//             paddingTop : "5px"
//         }}>
//             <Paper elevation={3} sx={{backgroundColor : "transparent"}}>
//                 <Typography variant="h4" sx={{color : "#800080" , paddingTop : "4px" ,mb : "2px" , mt: "2px" ,left : "5px"}}>
//                   {title}
//                 </Typography>
//                 {component}
//             </Paper>
//         </Box>
//     )
// }
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function ({ title, children }) {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",

      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "transparent",
          padding: "16px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color:  "#991b99cf",
            marginBottom: "12px",
            fontFamily: "Domine",
            fontOpticalSizing: "auto",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          {title}
        </Typography>
        <Box sx={{paddingBottom : "4pxs"}}>
          {children}
        </Box>
      </Paper>
    </Box>
  );
}


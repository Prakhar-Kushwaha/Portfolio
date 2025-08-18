import {React , useState} from "react";
import { Container, Paper, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function({images , title , Link}){
  
  const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
      if (currentPage < images.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
            <Container
            maxWidth="sm"
            sx={{
              py: 2,
              // mb : 3,
              // minHeight: 400,
              // maxHeight: 600,
              height : "auto" , 
              objectFit: "cover",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: "#725CAD",//"#FFE3A9",//'#FAF3E0',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant = "h6" sx={{color : "#FFE3A9" , mb : "2px", 
                  fontFamily: "Actor",
                  fontOpticalSizing: "auto",
                  fontWeight: 500,
                  fontStyle: "normal",

            }}>
             {title}
            </Typography>
            <Paper
              elevation={3}
              sx={{
                mb: 2,
                overflow: 'hidden',
                borderRadius: 2,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
            >
              <Box
                component="img" 
                src={images[currentPage]}
                alt={`Page ${currentPage + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',//cover
                }}
              />
            </Paper>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={handlePrev}
                disabled={currentPage === 0}
                sx={{
                  backgroundColor : "#8CCDEB",//"#ffe3a9",
                  color: "#00000",
                }}
              >
                Previous
              </Button>
              <Typography variant="h6" sx={{color: "black"}}>
              Page No : {currentPage + 1}
              </Typography>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={currentPage === images.length - 1}
                sx={{
                  backgroundColor : "#8CCDEB",//"#ffe3a9",
                  color: "#000000",
                }}
              >
                Next
              </Button>
            </Stack>
            {Link}
            {/* <Link></Link> */}
          </Container>
    )

}
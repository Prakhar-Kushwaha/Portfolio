import {React , useState} from "react";
import { Container, Paper, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "./bookBuyButton.jsx"

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
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#FAF3E0',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant = "h5" sx={{color : "black" , mb : "2px"}}>
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
                  objectFit: 'contain',
                }}
              />
            </Paper>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={handlePrev}
                disabled={currentPage === 0}
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
              >
                Next
              </Button>
            </Stack>
            {Link}
            {/* <Link></Link> */}
          </Container>
    )

}
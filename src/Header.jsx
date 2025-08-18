import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid';

export default function Header({ darkTheme, toggleTheme }) {
    return (
        <Box>
            <AppBar sx={{ backgroundColor:"#0B1D51", //"rgba(15, 152, 189, 0.91)",
             padding: "8px 16px" }}>
                <Grid container alignItems="center">
                    {/* Left Grid for Name */}
                    <Grid item xs={10} sx={{ textAlign: "left" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FAF3E0",// "#2a5a83dd",
                                // fontWeight: "bold",
                                marginLeft: "8px",
                                
                                    fontFamily: "Playfare Display",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 600,
                                    fontStyle: "normal"
                                  
                            }}
                        >
                            Prakhar Kushwaha
                        </Typography>
                    </Grid>

                    {/* Right Grid for Theme Toggle */}
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {/* <IconButton onClick={toggleTheme}>
                            {darkTheme ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton> */}
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}
import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import profilePic from '../assets/profile-pic.jpg'; 
import KeywordCloud from '../components/KeywordCloud';


const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 300, height: 300, mb: 2 }} />
        {/* <Typography variant="h4" gutterBottom>
          About Me
        </Typography> */}
        <Typography variant="body1" align="center" sx={{ maxWidth: '600px' }}>
          Hi, I'm Minto Joseph. I'm a Cloud Architect with a passion for Opensource. I live in Potsdam, Germany.
          <p/>
        </Typography>
        <KeywordCloud />
      </Box>
    </Container>
  );
};

export default About;
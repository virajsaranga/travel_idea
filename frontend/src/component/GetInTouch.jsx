import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import getImage from '../assets/getImage.jpeg'; 
const GetInTouch = () => {
  return (
    <Box
      sx={{
        py: 4, // Reduced padding
        height: '25vh', 
        textAlign: 'center',
        position: 'relative', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4%', 
        overflow: 'hidden', 
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${getImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1, 
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(39, 54, 40, 0.7)', 
          zIndex: 2, // Ensure the overlay is above the background
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 3 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'white', // White text
          }}
        >
          GET IN TOUCH
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: 'white', // White text
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Feel free to contact me if you have any questions, comments, or suggestions. I'll try to get back to you.
        </Typography>

        {/* Contact Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#eceff1',
            color: 'black',
            fontSize: '1.2rem',
            padding: '12px 40px',
            borderRadius: '50px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          CONTACT ME
        </Button>
      </Container>
    </Box>
  );
};

export default GetInTouch;
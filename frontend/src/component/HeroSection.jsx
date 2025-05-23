import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroVideo from '../assets/hero-video.mp4'; 

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1.5,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Gradient at Bottom */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 0,
        }}
      />

      {/* Text Overlay */}
      <Box sx={{ zIndex: 1, maxWidth: '800px', px: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
            mb: 2,
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
          }}
        >
          EXPLORE DREAM DISCOVER
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: { xs: '0.4rem', sm: '0.2rem', md: '0.9rem' },
            mb: 4,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          This is a work travel blog featuring beautiful destinations, new
          experiences, and hidden places around the globe.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            fontSize: '1.2rem',
            padding: '12px 40px',
            borderRadius: '50px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: '#ffb84d',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          START EXPLORING
        </Button>
      </Box>

      
        
      
    </Box>
  );
};

export default HeroSection;
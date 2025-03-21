import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Viraj from '../assets/david-leiter.jpeg'; // Import the profile photo

const ThanksPage = () => {
  return (
    <Box
      sx={{
        width: '100%', // Ensure the Box takes the full width
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // Ensure the background is white
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                alt="Viraj"
                src={Viraj}
                sx={{
                  width: '100%', // Make the image responsive
                  maxWidth: '440px', // Set a maximum width for the image
                  height: 'auto', // Maintain aspect ratio
                  boxShadow: '10px 14px 22px 10px rgba(59, 54, 54, 0.2)', // Corrected shadow
                  borderColor: 'primary.main',
                  borderRadius: '2px', // Optional: Add slight rounded corners
                  objectFit: 'cover', // Ensure the image covers the box without distortion
                }}
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* Heading */}
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'black',
                }}
              >
                Thanks For Looking!
              </Typography>

              {/* Subheading */}
              <Typography
  variant="h5"
  component="h2"
  sx={{
    mb: 4,
    color: 'text.secondary',
  }}
>
  I'm{' '}
  <span style={{ color: '#ffa726', fontWeight: 'bold' }}>
    Viraj Ridiyagama
  </span>
  , the guy behind this website.
</Typography>

              {/* Body Text */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                I'm an Sri Lankan who's been traveling the world full time for 3 years now. I started this travel blog in 2022 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                All of the writing and pictures on this site come from my own personal experience. I'm currently based in colombo, Sri Lanka.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                Together friends, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited some spectacular castles, temples, and monuments around the world. As a Software Engineer When i getting vacation most of time i like to go new places .
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                I haven't been everywhere, but it's on my list. I hope this world travel blog can help and inspire you in your own journeys as well!
              </Typography>

              {/* Call-to-Action Button */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '1.2rem',
                  padding: '12px 40px',
                  borderRadius: '50px',
                  border: '2px solid black',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                READ MORE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThanksPage;
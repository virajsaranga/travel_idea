import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Newsletter = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'black',
          }}
        >
          Newsletter
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Subscribe to my newsletter for the latest blog posts, tips & travel guides. Let's stay updated!
        </Typography>

        {/* Email Input and Subscribe Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Email..."
            fullWidth
            sx={{
              backgroundColor: 'white',
              borderRadius: '50px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '0px',
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '1.2rem',
              padding: '12px 40px',
              borderRadius: '50px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: 'black',
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
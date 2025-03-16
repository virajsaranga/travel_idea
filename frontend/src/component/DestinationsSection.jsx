import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/destination/d1.jpg';
import image2 from '../assets/destination/d2.jpg';
import image3 from '../assets/destination/d3.jpg';
import image4 from '../assets/destination/d4.jpg';
import image5 from '../assets/destination/d5.jpg';
import image6 from '../assets/destination/d6.jpg';
import image7 from '../assets/destination/d7.jpg'; 
import image8 from '../assets/destination/d8.jpg';
import image9 from '../assets/destination/d9.jpg';

const DestinationsSection = () => {
  const navigate = useNavigate();

  // Destination data
  const destinations = [
    {
      id: 1,
      name: 'MADULSIMA',
      image: image1 ,
    },
    {
      id: 2,
      name: 'MANDARAM NUWARA',
      image: image2 ,
    },
    {
      id: 3,
      name: 'GONGALA',
      image: image3 ,
    },
    {
      id: 4,
      name: 'MEEMURE',
      image: image4 ,
    },
    {
      id: 5,
      name: 'NALLUR KOVIL',
      image: image5 ,
    },
    {
      id: 6,
      name: 'ARUGAM BAY',
      image: image6 ,
    },
    {
      id: 7,
      name: 'POTHUVIL',
      image: image7 ,
    },
    {
      id: 8,
      name: 'SINHARAJA FOREST',
      image: image8 ,
    },
    {
      id: 9,
      name: 'NUCKELS MOUNTAIN',
      image: image9 ,
    },
  ];

  // Handle click to navigate to destination details page
  const handleClick = (id) => {
    navigate(`/destination-details/${id}`);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, backgroundColor: 'background.paper' }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          color: 'primary.main',
        }}
      >
        Destinations
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          textAlign: 'center',
          mb: 6,
          color: 'text.secondary',
        }}
      >
        Pick a Place in Sri Lanka and start exploring!
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <Grid item xs={12} sm={6} md={4} key={destination.id}>
            <Card
              onClick={() => handleClick(destination.id)}
              sx={{
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={destination.image}
                alt={destination.name}
                sx={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  {destination.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DestinationsSection;
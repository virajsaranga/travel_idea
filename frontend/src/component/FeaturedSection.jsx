import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import blogImage from '../assets/blog-image.jpg'; // Import images
import destinationsImage from '../assets/destinations-image.jpg';
import aboutImage from '../assets/about-image.jpg';

const FeaturedSection = () => {
  const featuredItems = [
    {
      title: 'TRAVEL BLOG',
      description: 'Explore our latest travel stories and tips from around the world.',
      image: blogImage,
      link: '/blog',
    },
    {
      title: 'DESTINATIONS',
      description: 'Discover beautiful destinations and plan your next adventure.',
      image: destinationsImage,
      link: '/destinations',
    },
    {
      title: 'ABOUT',
      description: 'Learn more about our mission and the team behind the blog.',
      image: aboutImage,
      link: '/about',
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, backgroundColor: 'background.paper' }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          color: 'black',
        }}
      >
        Featured
      </Typography>
      <Grid container spacing={4}>
        {featuredItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 44px rgba(0, 0, 0, 0.2)',
                }, 
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {item.title}
                </Typography>
               
                
                
               
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
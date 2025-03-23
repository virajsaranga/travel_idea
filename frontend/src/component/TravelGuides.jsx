import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';
import image7 from '../assets/7.jpeg';
import image8 from '../assets/8.jpeg';
import image9 from '../assets/9.jpeg';
import image10 from '../assets/10.jpeg';
import image11 from '../assets/11.jpeg';
import image12 from '../assets/12.jpeg';

const TravelGuides = () => {
  const navigate = useNavigate();

  const travelGuides = [
    { id: 1, title: 'HOW TO VISIT THE DOWN SOUTH ', image: image1 },
    { id: 2, title: 'kINDOM SIGIRIYA AT DAMBULLA', image: image2 },
    { id: 3, title: 'INCRETBLE JOURNEY AT GALLE', image: image3 },
    { id: 4, title: 'DUNHIDA WATERFALL AT ELLA SRI LANKA', image: image4 },
    { id: 5, title: 'BEAUTIFULL CANEL AT THE DOWN SOUTH', image: image5 },
    { id: 6, title: 'KUBALWELA ASAPUWA AT KUBALWELA', image: image6 },
    { id: 7, title: 'ONE OF THE EVENING I SPENT IN THE PADDY FEILD', image: image7 },
    { id: 8, title: 'NIGHT VIBE IN COLOMBO SRI LANKA', image: image8 },
    { id: 9, title: 'JETHAWANARAMAYA AT ANURADPURA SRI LANKA', image: image9 },
    { id: 10, title: 'SIGIRIYA SRI LANKA', image: image10 },
    { id: 11, title: 'ELLA SRI LANKA', image: image11 },
    { id: 12, title: 'FUN NIGHT AT SLIIT', image: image12 },
  ];

  const handleClick = (id) => {
    navigate(`/travel-details/${id}`);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, backgroundColor: 'background.paper' }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
        Travel Guides
      </Typography>
      <Typography variant="h6" component="h3" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
        Popular travel blog posts & guides
      </Typography>
      <Grid container spacing={4}>
        {travelGuides.map((guide) => (
          <Grid item xs={12} sm={6} md={4} key={guide.id}>
            <Card
              onClick={() => handleClick(guide.id)}
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
              <CardMedia component="img" image={guide.image} alt={guide.title} sx={{ height: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  {guide.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TravelGuides;

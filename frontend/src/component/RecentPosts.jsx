import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import davidLeiter from '../assets/david-leiter.jpeg'; // Import the profile photo
import post1 from '../assets/1.jpeg'; // Import post images
import post2 from '../assets/2.jpeg';
import post3 from '../assets/3.jpeg';
import post4 from '../assets/4.jpeg';

const RecentPosts = () => {
  const navigate = useNavigate();

  
  const recentPosts = [
    {
      id: 1,
      categories: ['Asia', 'Sri Lanka', 'Down South',],
      title: 'Sun set of the one of the down south place in sri lanka',
      image: post1,
    },
    {
      id: 2,
      categories: ['Asia', 'Bucket List', 'Itineraries', 'Dambulla', 'Sigiriya', 'Sri Lanka'],
      title: 'The Ultimate 3-Day Sri Lanka Itinerary',
      image: post2,
    },
    {
      id: 3,
      categories: ['Galle', 'Sr Lanka', 'Travel Tips'],
      title: 'Galle Fort: A Complete Travel Guide',
      image: post3,
    },
    {
      id: 4,
      categories: ['Dunhind waterfall', 'Asia',  'Bucket List'],
      title: 'Dunhinda Falls: A Complete Travel Guide',
      image: post4,
    },
  ];

  // Handle click to navigate to post details page
  const handleClick = (id) => {
    navigate(`/post-details/${id}`);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, backgroundColor: 'background.paper' }}>
      <Grid container spacing={4}>
        {/* Recent Posts Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
            RECENT POSTS
          </Typography>
          <Grid container spacing={4}>
            {recentPosts.map((post) => (
              <Grid item xs={12} sm={6} key={post.id}>
                <Card
                  onClick={() => handleClick(post.id)}
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
                    image={post.image}
                    alt={post.title}
                    sx={{
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {post.categories.join(' • ')}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {post.title}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      READ MORE
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* About Me Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
            ABOUT ME
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              alt="David Leiter"
              src={davidLeiter}
              sx={{
                width: 150,
                height: 150,
                mb: 2,
                border: '4px solid primary.main',
              }}
            />
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', lineHeight: 1.6 }}>
              Hey there! I'm Viraj Ridiyagama 
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', lineHeight: 1.6 }}>
            a passionate traveler, storyteller, and adventurer. For the past 3 years, I’ve been exploring the Sri Lanka, one destination at a time, and documenting my journeys along the way. From bustling cities to remote villages, from towering mountains to serene beaches, I’ve made it my mission to uncover the hidden gems and share the stories that make each place unique.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.primary', lineHeight: 1.6 }}>
              Please tag along!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main' }}>
                FACEBOOK
              </Button>
              <Button variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main' }}>
                INSTAGRAM
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentPosts;
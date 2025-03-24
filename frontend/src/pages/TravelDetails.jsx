import React from 'react';
import { useParams } from 'react-router-dom';

const TravelDetails = () => {
  const { id } = useParams(); // Get the travel guide ID from the URL

  // Fetch travel guide details based on the ID (you can replace this with actual data)
  const travelGuide = {
    id: 1,
    title: 'HOW TO VISIT THE PYRAMIDS IN EGYPT',
    image: '/images/pyramids.jpg',
    description: 'A detailed guide on visiting the Pyramids in Egypt...',
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        {travelGuide.title}
      </Typography>
      <Box
        component="img"
        src={travelGuide.image}
        alt={travelGuide.title}
        sx={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          mb: 4,
          borderRadius: '12px',
        }}
      />
      <Typography variant="body1" sx={{ lineHeight: 1.6, maxWidth: '800px', mx: 'auto' }}>
        {travelGuide.description}
      </Typography>
    </Box>
  );
};

export default TravelDetails;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', marginTop: 0 }}>
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          TRAVEL IDEA 
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2,  }}>
          <Button color="inherit" href="/">
            HOME
          </Button>
          <Button color="inherit" href="#FeaturedSection">
          Featured
          </Button>
          <Button color="inherit" href="#Guids">
            Guids
          </Button>
          <Button color="inherit" href="#DestinationsSection">
          Destinations
          </Button>
        
          <Button color="inherit" href="#RecentPosts">
          Recent Posts
          </Button>
          <Button color="inherit" href="/contact">
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
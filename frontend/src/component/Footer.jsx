import React from 'react';
import { Box, Typography, Link, Container, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: 'black',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        {/* Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Affiliate Disclosure */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff9100',
              }}
            >
              Affiliate Disclosure
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                lineHeight: 1.6,
              }}
            >
              Some of the links on this site are affiliate links, meaning I may earn a commission if you click on them and make a purchase. This comes at no extra cost to you and helps support the blog. I only recommend products and services that I genuinely believe in.
            </Typography>
          </Box>

          {/* Privacy Policy */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff9100',
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                lineHeight: 1.6,
              }}
            >
              Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you visit this site. By using this site, you agree to the terms outlined in this policy.
            </Typography>
          </Box>

          {/* Terms of Use */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff9100',
              }}
            >
              Terms of Use
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                lineHeight: 1.6,
              }}
            >
              By accessing and using this site, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, please do not use this site.
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 4 }} />

        {/* Copyright Notice */}
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          © {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
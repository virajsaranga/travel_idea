import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  InputAdornment
} from '@mui/material';
import { LocationOn, AccessTime, DirectionsCar } from '@mui/icons-material';

const cars = [
  {
    name: 'Mini Car',
    rate: 110,
    usd: 0.37,
    people: 2,
    bags: 2
  },
  {
    name: 'Sedan Car',
    rate: 125,
    usd: 0.42,
    people: 3,
    bags: 3
  },
  {
    name: 'SUV Car',
    rate: 135,
    usd: 0.45,
    people: 3,
    bags: 3
  }
];

const BookRidePage = () => {
  return (
    <Box sx={{ bgcolor: '#29448dff', minHeight: '100vh', py: 4 }}>
      <Box
        sx={{
          bgcolor: 'white',
          mx: 'auto',
          width: '90%',
          maxWidth: '1200px',
          borderRadius: 2,
          p: 3,
          boxShadow: 4
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 3, color: 'teal' }}>
          Book Your Ride
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ color: 'red', mr: 1 }} />
              <Typography>Total Distance</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTime sx={{ color: 'green', mr: 1 }} />
              <Typography>Total Time</Typography>
            </Box>

            <TextField
              label="Enter Pickup Location"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Enter Destination Location"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              type="date"
              fullWidth
              label="Select Date"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              type="time"
              fullWidth
              label="Select Time"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField type="number" label="Adult" fullWidth defaultValue={1} />
              </Grid>
              <Grid item xs={4}>
                <TextField type="number" label="Children" fullWidth defaultValue={0} />
              </Grid>
              <Grid item xs={4}>
                <TextField type="number" label="Baggages" fullWidth defaultValue={0} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <iframe
              title="Sri Lanka Map"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=Sri+Lanka&key=YOUR_GOOGLE_MAPS_API_KEY"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>

        {/* Car Options */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {cars.map((car, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6">{car.name}</Typography>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                    alt={car.name}
                    height="50"
                    style={{ marginBottom: 10 }}
                  />
                  <Typography color="green">
                    Per Km {car.rate.toFixed(2)} LKR ({car.usd.toFixed(2)} USD)
                  </Typography>
                  <Typography>👤 {car.people} &nbsp; 🧳 {car.bags}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="secondary">
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Details */}
        <Typography variant="h5" align="center" sx={{ mt: 6, color: 'purple' }}>
          CONTACT DETAILS
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="E-mail Address" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Contact number" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Comments"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary">
            PROCEED
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookRidePage;

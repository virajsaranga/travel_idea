import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };
//sample data 
  const faqData = [
    {
      question: "Do I need a visa to travel to this destination?",
      answer:
        "Visa requirements vary by country. Please check your local embassy website for the most accurate and updated information.",
    },
    {
      question: "What’s the best time to visit?",
      answer:
        "The best time to visit depends on the season and local festivals. Generally, the dry months between December and April offer the most pleasant weather.",
    },
    {
      question: "Is it safe for solo travelers?",
      answer:
        "Yes, it’s considered safe. However, it’s always recommended to stay alert, avoid isolated areas at night, and keep your belongings secure.",
    },
    {
      question: "Can I use my credit card there?",
      answer:
        "Most hotels and restaurants accept credit cards. However, it’s a good idea to carry some local currency for small shops or street food stalls.",
    },
  ];

  const travelChecklist = [
    "Passport & Visa documents",
    "Travel insurance",
    "Boarding passes / flight tickets",
    "Chargers & power adapters",
    "Comfortable clothes & shoes",
    "Sunscreen and sunglasses",
    "Reusable water bottle",
    "Camera or phone with storage space",
  ];

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        my: 6,
        px: 3,
        py: 4,
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 3, color: "#1976d2" }}
      >
        Travel FAQ & Checklist
      </Typography>

      {/* FAQ Section */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Frequently Asked Questions
      </Typography>

      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Travel Checklist Section */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Travel Packing Checklist
      </Typography>

      <Grid container spacing={1}>
        {travelChecklist.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems[item] || false}
                  onChange={() => handleCheck(item)}
                  color="primary"
                />
              }
              label={item}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FaqChecklist;

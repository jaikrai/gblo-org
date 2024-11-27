import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const worksDetails = [
  {
    title: "Our Publications",
    description: `Our Publications include a collection of works that highlight Bhutanese literature, culture, and heritage. 
    We aim to preserve and promote our rich history through various literary forms.`,
    image: "/path/to/our-publications.jpg", // Replace with actual image path
  },
  {
    title: "Online Nepali School",
    description: `Our Online Nepali School is a platform designed to teach the Nepali language and promote cultural preservation among younger generations.`,
    image: "/path/to/online-nepali-school.jpg", // Replace with actual image path
  },
  {
    title: "GICC Events",
    description: `The Global Intercultural and Community Celebration (GICC) Events bring communities together through cultural programs, art exhibitions, and other activities.`,
    image: "/path/to/gicc-events.jpg", // Replace with actual image path
  },
];

const OurWorks = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Our Works
      </Typography>
      <Grid container spacing={4}>
        {worksDetails.map((work, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                alt={work.title}
                height="200"
                image={work.image} // Ensure image paths are correct
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {work.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorks;

import React from "react";
import { Typography, Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          About Us
        </Typography>
        <Typography variant="body1">
          Oxfam is a global movement of people working together to fight
          inequality, end poverty, and create lasting change. We focus on
          empowering communities and supporting people to claim their rights.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src="https://via.placeholder.com/600x400"
          alt="About Us"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          Our mission is to tackle the root causes of poverty and social
          injustice, providing immediate assistance where needed and building a
          sustainable future for all.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

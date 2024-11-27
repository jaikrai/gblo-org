import React from "react";
import { Typography, Grid, Button } from "@mui/material";

const WaysToGive = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Ways to Give
        </Typography>
        <Typography variant="body1">
          There are many ways to support our mission. Make a one-time donation,
          set up a recurring gift, or explore corporate sponsorship
          opportunities.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" fullWidth>
          Donate Now
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined" color="secondary" fullWidth>
          Monthly Giving
        </Button>
      </Grid>
    </Grid>
  );
};

export default WaysToGive;

import React from "react";
import { Typography, Grid, Button } from "@mui/material";

const GetInvolved = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Get Involved
        </Typography>
        <Typography variant="body1">
          Join us in making a difference! Whether through volunteering,
          advocacy, or donations, your support can transform lives.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" fullWidth>
          Volunteer
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined" color="secondary" fullWidth>
          Fundraise
        </Button>
      </Grid>
    </Grid>
  );
};

export default GetInvolved;

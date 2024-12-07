import React, { useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import karna from "../assets/karna.webp";

const trustee = [
  {
    name: "Alice Johnson",
    title: "Senior Trustee",
    image: karna,
    bio: "Alice has over 20 years of experience in environmental policy and advocacy. She has been instrumental in implementing sustainable practices globally.",
  },
  {
    name: "Bob Williams",
    title: "Financial Trustee",
    image: "https://via.placeholder.com/300x400",
    bio: "Bob is a seasoned financial consultant with expertise in non-profit fundraising and financial planning. He has helped raise millions for global causes.",
  },
  {
    name: "Catherine Lee",
    title: "Technical Trustee",
    image: "https://via.placeholder.com/300x400",
    bio: "Catherine is a tech visionary with a focus on leveraging technology to solve complex global issues. She has worked with top tech companies worldwide.",
  },
];

const BoardOfTrstee = () => {
  const [hoveredTrutee, setHoveredTrustee] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Board of Trustees
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {trustee.map((trustee, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            onMouseEnter={() => setHoveredTrustee(index)}
            onMouseLeave={() => setHoveredTrustee(null)}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Advisor Image */}
            <Box
              sx={{
                width: "312px",
                height: "381px",
                backgroundImage: `url(${trustee.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Biography Popup */}
              {hoveredTrutee === index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "100%",
                    transform: "translate(10px, -50%)",
                    width: "300px",
                    height: "300px",
                    backgroundColor: "rgba(240, 240, 240, 0.95)",
                    padding: 3,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: 2,
                    zIndex: 10,
                    opacity: 0,
                    animation: "fadeIn 0.3s forwards",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {trustee.bio}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Name and Title */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {trustee.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {trustee.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translate(10px, -60%);
            }
            to {
              opacity: 1;
              transform: translate(10px, -50%);
            }
          }
        `}
      </style>
    </Container>
  );
};

export default BoardOfTrstee;

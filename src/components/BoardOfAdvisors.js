import React, { useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import karna from "../assets/karna.webp";

const advisors = [
  {
    name: "Alice Johnson",
    title: "Senior Advisor",
    image: karna,
    bio: "Alice has over 20 years of experience in environmental policy and advocacy. She has been instrumental in implementing sustainable practices globally.",
  },
  {
    name: "Bob Williams",
    title: "Financial Consultant",
    image: "https://via.placeholder.com/300x400",
    bio: "Bob is a seasoned financial consultant with expertise in non-profit fundraising and financial planning. He has helped raise millions for global causes.",
  },
  {
    name: "Catherine Lee",
    title: "Technical Advisor",
    image: "https://via.placeholder.com/300x400",
    bio: "Catherine is a tech visionary with a focus on leveraging technology to solve complex global issues. She has worked with top tech companies worldwide.",
  },
];

const BoardOfAdvisors = () => {
  const [hoveredAdvisor, setHoveredAdvisor] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Board of Advisors
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {advisors.map((advisor, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            onMouseEnter={() => setHoveredAdvisor(index)}
            onMouseLeave={() => setHoveredAdvisor(null)}
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
                backgroundImage: `url(${advisor.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Biography Popup */}
              {hoveredAdvisor === index && (
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
                    {advisor.bio}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Name and Title */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {advisor.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {advisor.title}
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

export default BoardOfAdvisors;

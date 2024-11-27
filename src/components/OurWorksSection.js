import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/gep_official.png"; // Replace with actual image paths
import image2 from "../assets/svakarokti.png";
import image3 from "../assets/nepali.png";
import image4 from "../assets/gicc.png";
import OurWorks from "../assets/Our Works.png";

const ourWorks = [
  {
    id: 1,
    title: "Nepali Online Class",
    description:
      "Write a couple of sentences describing your plans for the coming year.",
    image: image1,
    route: "/works/nepali-online-class",
  },
  {
    id: 2,
    title: "Svikarokti Foundation",
    description:
      "Write a couple of sentences describing your plans for the coming year.",
    image: image2,
    route: "/works/svikarokti-foundation",
  },
  {
    id: 3,
    title: "E-Online Nepali Portal",
    description:
      "Write a couple of sentences describing your plans for the coming year.",
    image: image3,
    route: "/works/e-online-nepali-portal",
  },
  {
    id: 4,
    title: "Gicc Events",
    description:
      "Write a couple of sentences describing your plans for the coming year.",
    image: image4,
    route: "/works/gicc-events",
  },
  {
    id: 4,
    title: "Publication",
    description:
      "Write a couple of sentences describing your plans for the coming year.",
    image: image4,
    route: "/works/gicc-events",
  },
];

const OurWorksSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fafafa" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: "#31576A", // Adjust color to match your design
        }}
      >
        <img src={OurWorks} alt="Logo" style={{ height: 50, padding: 2 }} />
      </Typography>

      <Grid container spacing={4}>
        {ourWorks.map((work) => (
          <Grid item xs={12} sm={6} md={3} key={work.id}>
            <Box
              sx={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={() => navigate(work.route)}
            >
              <Box
                component="img"
                src={work.image}
                alt={work.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  padding: "5px",
                }}
              />
              <Box sx={{ padding: "15px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#31576A" }}
                >
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ margin: "10px 0", color: "#555" }}
                >
                  {work.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFC107",
                    color: "#000",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#FFB300" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorksSection;

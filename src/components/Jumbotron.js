import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

const Jumbotron = ({ slides }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Carousel
        interval={3000}
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            onClick={() => navigate(slide.link)}
            sx={{
              position: "relative",
              width: "100%",
              cursor: "pointer",
            }}
          >
            {/* Slide Image */}
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: "100%",
                height: "auto", // Maintain aspect ratio
                display: "block", // Ensures no extra space below images
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "30px", // Text on the left side
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Highlight background
                color: "#fff",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "40%", // Restricts the text box width
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "18px", sm: "24px", md: "30px" },
                  marginBottom: "10px",
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
              >
                {slide.description}
              </Typography>
            </Box>

            {/* Overlay for Image */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text visibility
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Jumbotron;

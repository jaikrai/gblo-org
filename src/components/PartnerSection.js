import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo1 from "../assets/image2.png"; // Replace with actual logo paths
import logo2 from "../assets/image1.png";
import logo3 from "../assets/one.png";
import ourEssential from "../assets/ourEssential.png";

const partners = [
  {
    logos: [logo1, logo2, logo3],
  },
];

const CustomArrow = ({ onClick, direction }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        ...(direction === "left" ? { left: "-10px" } : { right: "-10px" }),
      }}
    >
      {direction === "left" ? (
        <ArrowBackIosNewIcon fontSize="large" />
      ) : (
        <ArrowForwardIosIcon fontSize="large" />
      )}
    </IconButton>
  );
};

const PartnerSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
          color: "#31576A",
        }}
      >
        <img src={ourEssential} alt="Logo" style={{ height: 50, padding: 2 }} />
      </Typography>

      {partners.map((partner, index) => (
        <Box key={index} sx={{ marginBottom: "50px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "20px",
              color: "#444",
            }}
          >
            {partner.title}
          </Typography>

          <Box sx={{ position: "relative" }}>
            <Slider {...sliderSettings}>
              {partner.logos.map((logo, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt={`${partner.title} logo ${idx + 1}`}
                    sx={{
                      maxWidth: "150px",
                      height: "auto",
                      objectFit: "contain",
                      border: "1px solid #ddd",
                      borderRadius: "3px",
                      padding: "3px",
                      backgroundColor: "#fff",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      ))}

      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF4081",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px 30px",
            fontSize: "18px",
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#E73370",
            },
          }}
        >
          Donate
        </Button>
      </Box>
    </Box>
  );
};

export default PartnerSection;

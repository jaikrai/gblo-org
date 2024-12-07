import React, { useEffect } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import update from "../assets/update1.jpg";
import amstadam from "../assets/amsterdam.png";
import gep from "../assets/gep.png";
import Jumbotron from "./Jumbotron"; // Import the Jumbotron component
import "../styles/home.css";
import OurWorksSection from "./OurWorksSection";
import PartnerSection from "./PartnerSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MissionSection from "./MissionSection"; // Update the path as needed

const Home = () => {
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset (distance) from the original trigger point
      once: false, // Run animation only once
    });
  }, []);

  const sliderContent = [
    {
      id: 1,
      title: "Preserving Culture and Literature",
      description:
        "Join us in our journey to promote Bhutanese culture and literature through various programs and events.",
      image: update,
      link: "/culture-literature",
    },
    {
      id: 2,
      title: "Online Nepali School",
      description:
        "Learn the Nepali language and preserve our heritage with our online learning platform.",
      image: gep,
      link: "/nepali-school",
    },
    {
      id: 3,
      title: "Community Events and Gatherings",
      description:
        "Experience the vibrant community spirit through our cultural events and gatherings.",
      image: amstadam,
      link: "/community-events",
    },
  ];

  const updates = [
    {
      id: 1,
      title: "Krishna Kashyap's Second Poetry Collection Released",
      description:
        "Krishna Kashyap's second poetry collection 'Sarab' was launched at a grand event. This poetry highlights the essence of culture and life.",
      image: "/path/to/large-image.jpg",
      route: "/news/krishna-kashyap-poetry",
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Annual Report Released",
      description: "Discover the highlights of our achievements and events.",
      image: "/path/to/press-release-image.jpg",
      route: "/press/annual-report",
    },
  ];

  return (
    <Box>
      {/* Jumbotron Section */}
      <Box
        sx={{
          marginBottom: "20px",
          width: "100%",
          height: "100vh", // Full viewport height
          position: "relative",
          overflow: "hidden",
          padding: "0px",
        }}
        data-aos="fade-up"
      >
        <Jumbotron slides={sliderContent} />
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Container maxWidth="lg" sx={{ padding: "0 20px" }}>
          {/* News Updates and Press Releases */}
          <Box data-aos="fade-up">
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Latest Updates
            </Typography>
            <Box
              sx={{
                width: "100%",
                borderBottom: "1px solid #8f8b8a",
                marginBottom: 2,
              }}
            ></Box>
            <Grid container spacing={4}>
              {/* News Updates Section */}
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  News Updates
                </Typography>
                {updates.map((update) => (
                  <Box
                    key={update.id}
                    onClick={() => navigate(update.route)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#f9f9f9",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: "#f2f2f2" },
                      cursor: "pointer",
                      marginBottom: "15px",
                    }}
                    data-aos="zoom-in"
                  >
                    <Box
                      component="img"
                      src={update.image}
                      alt={update.title}
                      sx={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {update.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "10px" }}>
                      {update.description}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginTop: "10px",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                ))}
              </Grid>

              {/* Press Releases Section */}
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  Press Releases
                </Typography>
                {pressReleases.map((press) => (
                  <Box
                    key={press.id}
                    onClick={() => navigate(press.route)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#f9f9f9",
                      padding: "10px",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: "#f2f2f2" },
                      cursor: "pointer",
                      marginBottom: "15px",
                    }}
                    data-aos="fade-up"
                  >
                    <Box
                      component="img"
                      src={press.image}
                      alt={press.title}
                      sx={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {press.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "10px" }}>
                      {press.description}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        marginTop: "10px",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>

          {/* Other sections with animations */}
          <Box data-aos="fade-up">
            <MissionSection />
          </Box>
          <Box data-aos="fade-right">
            <OurWorksSection />
          </Box>
          <Box data-aos="fade-left">
            <PartnerSection />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

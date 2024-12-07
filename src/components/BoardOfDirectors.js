import React, { useState } from "react";
import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

// Import images dynamically
const importImages = (context) => {
  const images = {};
  context.keys().forEach((key) => {
    const imageName = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
    images[imageName] = context(key);
  });
  return images;
};
const images = importImages(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

// Directors data
const directors = [
  {
    name: "Karna Gurung",
    title: "Chairperson",
    image: images["president"], // Matches the file name "president.png"
    socialMedia: {
      facebook: "https://facebook.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      youtube: "https://youtube.com/janedoe",
    },
  },
  {
    name: "Mamta Tamang",
    title: "Sr. Vice President",
    image: images["mamta"], // Matches the file name "mamta.png"
    socialMedia: {
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      youtube: "https://youtube.com/johnsmith",
    },
  },
  {
    name: "Aavash Rikham Magar",
    title: "Vice President",
    image: images["avash"],
    socialMedia: {
      facebook: "https://facebook.com/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      youtube: "https://youtube.com/emilyjohnson",
    },
  },
  {
    name: "Gopal Poudyel",
    title: "Vice President",
    image: images["gopal"],
    socialMedia: {
      facebook: "https://facebook.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      youtube: "https://youtube.com/janedoe",
    },
  },
  {
    name: "Patalo Antare",
    title: "General Secretary",
    image: images["patalo"],
    socialMedia: {
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      youtube: "https://youtube.com/johnsmith",
    },
  },
  {
    name: "Diyalo Susan Majhi",
    title: "Finance Secretary",
    image: images["susan"],
    socialMedia: {
      facebook: "https://facebook.com/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      youtube: "https://youtube.com/emilyjohnson",
    },
  },
  {
    name: "Lucky Rashi",
    title: "Secretary",
    image: images["lucky"],
    socialMedia: {
      facebook: "https://facebook.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      youtube: "https://youtube.com/janedoe",
    },
  },
  {
    name: "Arjun Pardhan",
    title: "Press Secretary",
    image: images["arjun"],
    socialMedia: {
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      youtube: "https://youtube.com/johnsmith",
    },
  },
  {
    name: "Emily Johnson",
    title: "Board Member",
    image: "https://via.placeholder.com/300",
    socialMedia: {
      facebook: "https://facebook.com/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      youtube: "https://youtube.com/emilyjohnson",
    },
  },
];

const BoardOfDirectors = () => {
  const [hoveredDirector, setHoveredDirector] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Board of Directors
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {directors.map((director, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            onMouseEnter={() => setHoveredDirector(index)}
            onMouseLeave={() => setHoveredDirector(null)}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Director Image */}
            <Box
              sx={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(${director.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            ></Box>

            {/* Name and Title */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {director.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {director.title}
            </Typography>

            {/* Social Media Icons with Animation */}
            <Box
              sx={{
                mt: 2,
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.3s ease",
                transform:
                  hoveredDirector === index
                    ? "translateY(0)"
                    : "translateY(20px)",
                opacity: hoveredDirector === index ? 1 : 0,
                pointerEvents: hoveredDirector === index ? "auto" : "none",
              }}
            >
              <IconButton
                component="a"
                href={director.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#4267B2" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href={director.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#1DA1F2" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href={director.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#FF0000" }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardOfDirectors;

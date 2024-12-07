import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/gblo1.png"; // Replace with the path to your logo

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 4,
        fontSize: "0.875rem",
      }}
    >
      <Grid container spacing={2} alignItems="flex-start">
        {/* Logo and Name Section */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <Box>
              <img src={logo} alt="Logo" style={{ height: 90, padding: 10 }} />
            </Box>
          </Box>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {/* Organization Section */}
            <Grid item xs={6} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Organization
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <MuiLink href="/home" color="inherit" underline="hover">
                  Home
                </MuiLink>
                <MuiLink href="/about" color="inherit" underline="hover">
                  About
                </MuiLink>
                <MuiLink href="/newsletter" color="inherit" underline="hover">
                  Newsletter
                </MuiLink>
                <MuiLink
                  href="/board-of-directors"
                  color="inherit"
                  underline="hover"
                >
                  Board of Directors
                </MuiLink>
                <MuiLink
                  href="/board-of-trustees"
                  color="inherit"
                  underline="hover"
                >
                  Board of Trustees
                </MuiLink>
                <MuiLink href="/advisors" color="inherit" underline="hover">
                  Advisors
                </MuiLink>
              </Box>
            </Grid>

            {/* Useful Links Section */}
            <Grid item xs={6} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Useful Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <MuiLink href="/svakirotkti" color="inherit" underline="hover">
                  Svakirotkti
                </MuiLink>
                <MuiLink href="/store" color="inherit" underline="hover">
                  Store
                </MuiLink>
                <MuiLink href="/library" color="inherit" underline="hover">
                  Library
                </MuiLink>
                <MuiLink href="/our-works" color="inherit" underline="hover">
                  Our Works
                </MuiLink>
              </Box>
            </Grid>

            {/* Related and Legal Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Related and Legal
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <MuiLink href="/bylaws" color="inherit" underline="hover">
                  Bylaws
                </MuiLink>
                <MuiLink
                  href="/privacy-policy"
                  color="inherit"
                  underline="hover"
                >
                  Privacy Policy
                </MuiLink>
                <MuiLink href="/contact-us" color="inherit" underline="hover">
                  Contact Us
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Divider Line */}
      <Divider
        sx={{
          backgroundColor: "white",
          my: 2,
        }}
      />

      {/* Social Media Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          gap: 1,
        }}
      >
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
          aria-label="YouTube"
        >
          <YouTubeIcon />
        </IconButton>
      </Box>

      {/* Copyright Section */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.8rem",
          mt: 1,
        }}
      >
        © {new Date().getFullYear()} Global Bhutanese Literary Organisation. All
        rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

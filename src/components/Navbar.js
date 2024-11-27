import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Donate icon
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/new_lo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [aboutMenuAnchor, setAboutMenuAnchor] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  // Dropdown Handlers
  const handleAboutMenuOpen = (event) =>
    setAboutMenuAnchor(event.currentTarget);
  const handleAboutMenuClose = () => setAboutMenuAnchor(null);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Our Work", link: "/our-work" },
    { text: "Get Involved", link: "/get-involved" },
    { text: "Store", link: "/store" },
  ];

  const aboutDropdownItems = [
    { text: "GBLO History", link: "/about/history" },
    { text: "Board of Directors", link: "/about/directors" },
    { text: "Advisor Board", link: "/about/advisors" },
    { text: "Board of Trustees", link: "/about/trustees" },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#235918" }}>
        <Toolbar sx={{ flexDirection: "column", alignItems: "center" }}>
          {/* Top Row: Logo and Right-aligned Buttons */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box sx={{ marginLeft: 15 }}>
              <img src={logo} alt="Logo" style={{ height: 90, padding: 10 }} />
            </Box>

            {/* Right Section: Donate and Login Buttons */}
            <Box
              sx={{ display: "flex", alignItems: "center", marginRight: 16 }}
            >
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                component={Link}
                to="/donate"
                sx={{
                  textTransform: "none",
                  marginRight: 2,
                  backgroundColor: "#e91e63",
                  "&:hover": { backgroundColor: "#d81b60" },
                }}
              >
                Donate
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />}
                component={Link}
                to="/members-login"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Login
              </Button>
            </Box>

            {/* Hamburger Menu */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Horizontal Line */}
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid #fff",
              marginTop: 1,
            }}
          ></Box>

          {/* Bottom Row: Nav Items */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                variant="button"
                component={Link}
                to={item.link}
                sx={{
                  position: "relative",
                  color: "#fff",
                  textDecoration: "none",
                  marginLeft: 3,
                  paddingBottom: "4px",
                  fontWeight:
                    location.pathname === item.link ? "bold" : "normal",
                  "&:hover::after": { width: "100%" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: location.pathname === item.link ? "100%" : "0", // Active item underline
                    height: "2px",
                    backgroundColor: "white",
                    bottom: "0",
                    left: "0",
                    transition: "width 0.3s ease-in-out",
                  },
                }}
              >
                {item.text}
              </Typography>
            ))}

            {/* About Us with Dropdown */}
            <Box
              onMouseEnter={handleAboutMenuOpen}
              onMouseLeave={handleAboutMenuClose}
              sx={{ position: "relative", marginLeft: 3 }}
            >
              <Typography
                variant="button"
                color="inherit"
                sx={{
                  position: "relative",
                  fontWeight: location.pathname.includes("/about")
                    ? "bold"
                    : "normal",
                  "&:hover::after": { width: "100%" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: location.pathname.includes("/about") ? "100%" : "0", // Active item underline
                    height: "2px",
                    backgroundColor: "white",
                    bottom: "0",
                    left: "0",
                    transition: "width 0.3s ease-in-out",
                  },
                  cursor: "pointer",
                }}
              >
                About Us
              </Typography>
              <Menu
                anchorEl={aboutMenuAnchor}
                open={Boolean(aboutMenuAnchor)}
                onClose={handleAboutMenuClose}
                MenuListProps={{ onMouseLeave: handleAboutMenuClose }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{ mt: 1 }}
              >
                {aboutDropdownItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => {
                      navigate(item.link);
                      handleAboutMenuClose();
                    }}
                    sx={{
                      "&:hover": { backgroundColor: "#e0f7fa" },
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText
                primary="About Us"
                primaryTypographyProps={{
                  style: { fontWeight: "bold" },
                }}
              />
              <List>
                {aboutDropdownItems.map((item) => (
                  <ListItem
                    button
                    component={Link}
                    to={item.link}
                    key={item.text}
                  >
                    <ListItemText
                      primary={item.text}
                      sx={{
                        textAlign: "left",
                        marginLeft: 2,
                        fontSize: "0.9rem",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </ListItem>
            {menuItems.map((item) => (
              <ListItem button component={Link} to={item.link} key={item.text}>
                <ListItemText
                  primary={item.text}
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

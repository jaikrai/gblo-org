import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const MemberAuthPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
        boxShadow: 3,
        padding: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Member Access
      </Typography>

      {/* Tabs for Login/Signup */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ marginBottom: 3 }}
      >
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>

      {activeTab === 0 ? (
        /* Login Form */
        <Box>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1.5 }}
          >
            Login
          </Button>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Forgot Password? <a href="/reset-password">Reset here</a>
            </Typography>
          </Box>
        </Box>
      ) : (
        /* Signup Form */
        <Box>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1.5 }}
          >
            Signup
          </Button>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <a href="#" onClick={() => setActiveTab(0)}>
                Login here
              </a>
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default MemberAuthPage;

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import OurMission from "../assets/OurMission.png";

const MissionSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f8ff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#31576A",
              marginBottom: "20px",
            }}
          >
            <img
              src={OurMission}
              alt="Logo"
              style={{ height: 50, padding: 2 }}
            />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            Our mission is to provide compassionate care, innovative solutions,
            and unwavering support to families and communities. Together, we aim
            to create a world where everyone feels cared for, valued, and
            empowered to thrive.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MissionSection;

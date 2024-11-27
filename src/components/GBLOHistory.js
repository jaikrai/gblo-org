import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const historyData = [
  {
    year: "2009",
    title: "Founded GBLO",
    description:
      "GBLO was officially established with a mission to preserve cultural heritage.",
  },
  {
    year: "2010",
    title: "First Major Project",
    description: "Launched the community cultural preservation initiative.",
  },
  {
    year: "2011",
    title: "Digital Expansion",
    description: "Started the Online Nepali School to reach global audiences.",
  },
  {
    year: "2012",
    title: "Global Recognition",
    description:
      "Recognized internationally for promoting culture and education.",
  },
  {
    year: "2013",
    title: "Founded GBLO",
    description:
      "GBLO was officially established with a mission to preserve cultural heritage.",
  },
  {
    year: "2014",
    title: "First Major Project",
    description: "Launched the community cultural preservation initiative.",
  },
  {
    year: "2015",
    title: "Digital Expansion",
    description: "Started the Online Nepali School to reach global audiences.",
  },
  {
    year: "2016",
    title: "Global Recognition",
    description:
      "Recognized internationally for promoting culture and education.",
  },
  {
    year: "2017",
    title: "First Major Project",
    description: "Launched the community cultural preservation initiative.",
  },
  {
    year: "2018",
    title: "Digital Expansion",
    description: "Started the Online Nepali School to reach global audiences.",
  },
  {
    year: "2019",
    title: "Global Recognition",
    description:
      "Recognized internationally for promoting culture and education.",
  },
  {
    year: "2020",
    title: "Founded GBLO",
    description:
      "GBLO was officially established with a mission to preserve cultural heritage.",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Launched the community cultural preservation initiative.",
  },
  {
    year: "2022",
    title: "Digital Expansion",
    description: "Started the Online Nepali School to reach global audiences.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description:
      "Recognized internationally for promoting culture and education.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description:
      "Recognized internationally for promoting culture and education.",
  },
];

const GBLOHistory = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        GBLO History
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginY: 4,
        }}
      >
        {historyData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginY: 4,
              position: "relative",
            }}
          >
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: "2px",
                height: "100%",
                backgroundColor: "#ccc",
                transform: "translateX(-50%)",
                zIndex: -1,
              }}
            ></Box>

            {/* Left Content */}
            <Box
              sx={{
                flex: 1,
                paddingX: 2,
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "right",
              }}
            >
              {index % 2 === 0 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {item.description}
                  </Typography>
                </motion.div>
              )}
            </Box>

            {/* Dot */}
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                position: "relative",
                marginX: 3,
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 200 }}
              ></motion.div>
            </Box>

            {/* Right Content */}
            <Box
              sx={{
                flex: 1,
                paddingX: 2,
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
            >
              {index % 2 !== 0 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {item.description}
                  </Typography>
                </motion.div>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default GBLOHistory;

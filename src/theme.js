// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h2: { fontFamily: "'Poppins', sans-serif", fontWeight: 500 },
    body1: { fontFamily: "'Roboto', sans-serif", fontWeight: 300 },
  },
  // Add any other theme customizations here (like colors, spacing, etc.)
});

export default theme;

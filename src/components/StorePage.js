import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Slider,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "../styles/store.css";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Audio CD Set",
    author: "Vernon Horton",
    price: 130.9,
    oldPrice: null,
    rating: 4,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Everybody's Fool",
    author: "Byron Kelly",
    price: 23.99,
    oldPrice: 59.99,
    rating: 5,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Everyone Brave is Forgiven",
    author: "Stephanie Moreno",
    price: 16.46,
    oldPrice: 30.46,
    rating: 5,
  },
];

const authors = ["Vernon Horton", "Byron Kelly", "Stephanie Moreno"];

const StorePage = () => {
  const [priceRange, setPriceRange] = useState([10, 150]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Filters and Cart Section */}
      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              CART
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }}>
              No products in the cart.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
              FILTER BY PRICE
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              min={10}
              max={150}
              valueLabelDisplay="auto"
            />
            <Typography variant="body2" sx={{ mb: 4 }}>
              Price: ${priceRange[0]} — ${priceRange[1]}
            </Typography>
            <Button variant="contained" sx={{ mb: 4 }}>
              Filter
            </Button>

            <Typography variant="h6" sx={{ mb: 2 }}>
              FILTER BY AUTHOR
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {authors.map((author) => (
                <Chip key={author} label={author} clickable color="success" />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Product Grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    position: "relative",
                    boxShadow: 3,
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  {product.oldPrice && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        backgroundColor: "primary.main",
                        color: "#fff",
                        px: 2,
                        py: 0.5,
                        borderRadius: "12px",
                        fontSize: "12px",
                      }}
                    >
                      SALE!
                    </Box>
                  )}
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      BY {product.author.toUpperCase()}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                        mb: 2,
                        gap: 0.5,
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          fontSize="small"
                          color={i < product.rating ? "warning" : "disabled"}
                        />
                      ))}
                    </Box>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      ${product.price.toFixed(2)}
                      {product.oldPrice && (
                        <Typography
                          component="span"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.disabled",
                            fontSize: "0.9em",
                            ml: 1,
                          }}
                        >
                          ${product.oldPrice.toFixed(2)}
                        </Typography>
                      )}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StorePage;

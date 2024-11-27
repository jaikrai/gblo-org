import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Dummy data for store items
const storeItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Book Title 1",
    description: "An insightful book on literary art.",
    price: "$20",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Book Title 2",
    description: "A masterpiece on cultural heritage.",
    price: "$25",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Book Title 3",
    description: "A must-read for modern literature enthusiasts.",
    price: "$30",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    title: "Book Title 4",
    description: "An exceptional work exploring diverse cultures.",
    price: "$18",
  },
];

const StorePage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title} added to cart!`);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      {/* Store Header */}
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
      >
        Our Store
      </Typography>

      {/* Grid for Items */}
      <Grid container spacing={4}>
        {storeItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />

              {/* Content */}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mt: 2, fontWeight: "bold", color: "primary.main" }}
                >
                  {item.price}
                </Typography>
              </CardContent>

              {/* Actions */}
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(item)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
                <IconButton
                  size="large"
                  color="secondary"
                  onClick={() => alert(`Buying ${item.title}`)}
                >
                  Buy
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StorePage;

"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/api/fetch";
import { Product } from "@/interface";
import { useCart } from "@/context/CartContext";

export default function MultiActionAreaCard({
  products,
}: {
  products: Product[];
}) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      {products?.map((items: Product) => (
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          key={items.id}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={items.image}
              alt="green iguana"
              sx={{
                height: 200,
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {items.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {items.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "red" }}>
              Price: {items.price}
            </Typography>
            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={() => handleAddToCart(items)}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

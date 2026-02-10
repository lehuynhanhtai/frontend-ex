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
import Rating from "@mui/material/Rating";
import { Product } from "@/interface";
import { useCart } from "@/context/CartContext";

export default function MultiActionAreaCard({
  products,
}: {
  products: Product[];
}) {
  const { addToCart } = useCart();
  const [value, setValue] = useState<number | null>(5);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-20 mx-2">
      {products?.map((items: Product) => (
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            ":hover": {
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
          key={items.id}
        >
          <CardActionArea>
            {/* <CardMedia
              component="img"
              image={items.image}
              alt="green iguana"
              sx={{
                height: 350,
                objectFit: "cover",
                transition: "transform 0.3s ease, filter 0.3s ease",
                ":hover": {
                  transform: "scale(1.04)",
                },
              }}
            /> */}
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                // Glass shine sweep on hover
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 60%)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "200% 0%",
                  transition: "background-position 0.6s ease",
                  pointerEvents: "none",
                  zIndex: 2,
                },
                "&:hover::after": {
                  backgroundPosition: "-100% 0%",
                },
                // Glassy overlay
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0)",
                  WebkitBackdropFilter: "blur(0px)",
                  transition: "background 0.4s ease, backdrop-filter 0.4s ease",
                  pointerEvents: "none",
                  zIndex: 1,
                },
                "&:hover::before": {
                  background: "rgba(255,255,255,0.12)",
                  WebkitBackdropFilter: "blur(4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={items.image}
                alt="green iguana"
                sx={{
                  height: 300,
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                px: 2,
                justifyContent: "space-between",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {items.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {items.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
                <Rating name="read-only" value={value} readOnly />
                <Typography sx={{ fontWeight: "bold", mt: 1 }}>5.0</Typography>
              </Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.8rem", mt: 2 }}
              >
                ${items.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ padding: "16px" }}>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(items)}
              sx={{
                textTransform: "none",
                width: "100%",
                height: "48px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

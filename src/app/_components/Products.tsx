"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/api/fetch";
import { Product } from "@/interface";

export default function MultiActionAreaCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchProducts();
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      {products?.map((items: Product) => (
        <Card sx={{ width: "100%" }} key={items.id}>
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
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {items.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="small" color="success" variant="contained">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

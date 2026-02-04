"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Link from "next/link";
import Shoping_Cart from "@/app/_components/Shoping_Cart";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { cartCount } = useCart();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        color: "text.primary",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 4 },
          height: 70,
          justifyContent: "space-between",
          maxWidth: 2000,
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="800"
          sx={{
            letterSpacing: "-0.5px",
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Link href="/">ShopCart</Link>
        </Typography>

        <IconButton
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{
            bgcolor: "rgba(0,0,0,0.04)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.08)" },
            borderRadius: 2,
          }}
        >
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Shoping_Cart open={open} toggleDrawer={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

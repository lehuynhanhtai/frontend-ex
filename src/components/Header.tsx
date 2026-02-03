"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Stack,
  Button,
  ListItemIcon,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: { xs: "100vw", sm: 400 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%)",
      }}
      role="presentation"
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Your Cart
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1, pt: 1 }}>
        {["Product 1", "Product 2", "Product 3"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ py: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    mr: 2,
                  }}
                >
                  {index + 1}
                </Box>
              </ListItemIcon>
              <ListItemText primary={text} secondary="$99.00" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 3, bgcolor: "white" }}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography variant="subtitle1" color="text.secondary">
            Total
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            $297.00
          </Typography>
        </Stack>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            py: 1.5,
            textTransform: "none",
            fontSize: "1.1rem",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          }}
          // onClick={toggleDrawer(false)}
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </Box>
    </Box>
  );

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
          <Badge badgeContent={3} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              borderRadius: "20px 0 0 20px",
            },
          }}
        >
          {DrawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

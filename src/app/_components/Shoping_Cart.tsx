"use client";

import {
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
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Shoping_Cart = ({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: any;
}) => {
  return (
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
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              fontSize: "1.1rem",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            }}
          >
            <Link href="/checkout">Checkout</Link>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Shoping_Cart;

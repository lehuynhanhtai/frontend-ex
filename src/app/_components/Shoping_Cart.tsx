"use client";

import { IconButton, Typography, Drawer, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const Shoping_Cart = ({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: any;
}) => {
  const { cartItems, updateQuantity, cartTotal } = useCart();
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
          width: { xs: "100vw", sm: 500 },
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            p: 2,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  padding: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      style={{
                        borderRadius: 3,
                        objectFit: "cover",
                        width: "100px", // fixed rendered width
                        height: "100px", // fixed rendered height
                        minWidth: "100px", // prevents shrinking
                        flexShrink: 0, // prevents flex container from squishing it
                      }}
                    />
                    <Box sx={{ mr: 2 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>

                    <Typography
                      sx={{
                        textAlign: "center",
                        minWidth: "20px",
                      }}
                    >
                      X{item.quantity}
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Box>
                  <Typography variant="body1">
                    {item.price * item.quantity}$
                  </Typography>
                </Box>
              </Box>
            ))}
            {cartItems.length === 0 && (
              <Typography
                sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}
              >
                Your cart is empty
              </Typography>
            )}
          </Box>
          {cartItems.length > 0 && (
            <Box
              sx={{ py: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" fontWeight="bold">
                {cartTotal}$
              </Typography>
            </Box>
          )}

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

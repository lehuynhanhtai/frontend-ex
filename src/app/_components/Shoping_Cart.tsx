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
import Image from "next/image";

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
                  src="https://picsum.photos/200/300"
                  alt="name"
                  width={200}
                  height={200}
                  style={{
                    borderRadius: 3,
                    objectFit: "cover",
                    minWidth: "100px",
                    height: "100px",
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
                    name kaf skfjai aksffuaisf jasfh asifh asfashfas
                    jfashfasuifhsf sf sfs fs fsfhasuifask asfa sfhas hasf haskfh
                    aksf
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    description
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
                <Button variant="outlined">+</Button>
                <Typography
                  sx={{
                    textAlign: "center",
                    minWidth: "20px",
                  }}
                >
                  1
                </Typography>
                <Button variant="outlined">-</Button>
              </Box>
              <Typography variant="body1">123$</Typography>
            </Box>
          </Box>

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

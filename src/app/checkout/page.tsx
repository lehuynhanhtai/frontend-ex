"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { addOrders } from "@/api/fetch";

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    paymentMethod: "",
    termsAccepted: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      termsAccepted: e.target.checked,
    }));
  };

  const handleCheckout = async () => {
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      const orderData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        payment_method: formData.paymentMethod,
        total_price: cartTotal,
        notes: formData.notes,
        orderItems: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };

      //call api create order
      const response = await addOrders(orderData);

      if (response.status === 201) {
        console.log("Order placed successfully!");
        clearCart();
        alert("Order placed successfully!");
        // Redirect or show success message
      } else {
        console.error("Failed to place order");
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
        Your cart is empty
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={7} sx={{ pr: 5 }}>
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              my: 2,
            }}
          >
            Shipping Information
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              mt: 4,
              mb: 2,
            }}
          >
            Additional information
          </Typography>
          <TextareaAutosize
            name="notes"
            aria-label="minimum height"
            minRows={3}
            placeholder="Notes regarding the order, for example: full address, delivery time, delivery during business hours, outside business hours, etc."
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 10,
            }}
            value={formData.notes}
            onChange={handleChange}
          />
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              mt: 4,
              mb: 2,
            }}
          >
            Payment methods
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Bank transfer"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Payment upon delivery"
              />
            </RadioGroup>
          </Box>
          <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
            Your personal data will be used to process orders, support your
            experience on this website, and for other purposes described in our
            privacy policy.
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
              />
            }
            label="I have read and agree to the terms and conditions of the website."
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Checkout"}
          </Button>
        </Grid>
        <Grid size={5}>
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              my: 2,
            }}
          >
            Your Order
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Product</Typography>
              <Typography>Price</Typography>
            </Box>
            <Divider />
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
                    <Typography
                      sx={{
                        textAlign: "center",
                        minWidth: "20px",
                      }}
                    >
                      X{item.quantity}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {item.price * item.quantity}$
                  </Typography>
                </Box>
              </Box>
            ))}

            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">{cartTotal}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;

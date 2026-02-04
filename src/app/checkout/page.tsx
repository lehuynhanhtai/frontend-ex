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

const CheckoutPage = () => {
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
            <TextField label="Full Name" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Phone" variant="outlined" />
            <TextField label="Address" variant="outlined" />
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
            aria-label="minimum height"
            minRows={3}
            placeholder="Notes regarding the order, for example: full address, delivery time, delivery during business hours, outside business hours, etc."
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 10,
            }}
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
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
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
            control={<Checkbox defaultChecked />}
            label="I have read and agree to the terms and conditions of the website."
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
            // onClick={handleCheckout}
          >
            Checkout
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
                      jfashfasuifhsf sf sfs fs fsfhasuifask asfa sfhas hasf
                      haskfh aksf
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontWeight: "bold",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      name kaf skfjai aksffuaisf jasfh asifh asfashfas
                      jfashfasuifhsf sf sfs fs fsfhasuifask asfa sfhas hasf
                      haskfh aksf
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
                    x 1
                  </Typography>
                  <Button variant="outlined">-</Button>
                </Box>
                <Typography variant="body1">123$</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">123$</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;

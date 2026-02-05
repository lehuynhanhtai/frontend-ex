import axios from "./axios";

export const fetchProducts = async () => {
  const response = await axios.get("/products");
  return response;
};

export const addOrders = async (orderData: any) => {
  const response = await axios.post("/orders", JSON.stringify(orderData), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

// const response = await fetch("http://localhost:8080/orders", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(orderData),
// });

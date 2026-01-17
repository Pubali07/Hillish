import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const CheckoutButton = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const cartDetails = Object.entries(cartItems).map(([id, qty]) => {
      const item = food_list.find((food) => food._id === id);
      return {
        name: item.name,
        price: item.price,
        quantity: qty,
        image: "https://via.placeholder.com/150",
      };
    });

    const res = await fetch(
      "http://localhost:5001/api/payment/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartDetails }),
      }
    );

    const data = await res.json();

    // Redirect to Stripe Checkout URL
    window.location.href = data.url;

    setLoading(false);
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? "Processing..." : "PROCEED TO PAYMENT"}
    </button>
  );
};

export default CheckoutButton;

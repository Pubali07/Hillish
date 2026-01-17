import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import CheckoutButton from "../../components/CheckoutButton";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={userData.street}
          onChange={handleChange}
        />

        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={userData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={userData.state}
            onChange={handleChange}
          />
        </div>

        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            name="zip"
            value={userData.zip}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={userData.country}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rs{" "}
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          {/* ✅ Add Checkout Button here */}
          <CheckoutButton />
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

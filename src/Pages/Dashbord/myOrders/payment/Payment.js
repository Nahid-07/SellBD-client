import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../../../Loader/Loader";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
    const {price,productName} = data;
    if(navigation.state === "loading"){
        return <Loader></Loader>
    }
  return (
    <div>
      <h1>You are Payment for {productName}</h1>
      <p>{price}</p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

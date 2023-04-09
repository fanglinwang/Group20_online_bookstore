require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  //   console.log(event);
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "create payment intent",
  };
};

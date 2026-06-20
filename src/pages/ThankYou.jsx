import React from "react";
import { useLocation, Link } from "react-router-dom";

const ThankYou = () => {

  const location = useLocation();

  const data = location.state;

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center my-25 p-4">

      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Payment Successful 🎉
          </h1>

          <p className="text-gray-500 mb-8">
            Thank you for your payment.
          </p>

        </div>

        <div className="space-y-4">

          <div className="border rounded-xl p-4">
            <strong>Name:</strong> {data?.name}
          </div>

          <div className="border rounded-xl p-4">
            <strong>Email:</strong> {data?.email}
          </div>

          <div className="border rounded-xl p-4">
            <strong>Mobile:</strong> {data?.mobile}
          </div>

          <div className="border rounded-xl p-4">
            <strong>Amount:</strong> ₹{data?.amount}
          </div>

          <div className="border rounded-xl p-4">
            <strong>Payment ID:</strong> {data?.paymentId}
          </div>

          <div className="border rounded-xl p-4">
            <strong>Order ID:</strong> {data?.orderId}
          </div>

        </div>

        <div className="mt-8 text-center">

          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl inline-block"
          >
            Go To Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ThankYou;
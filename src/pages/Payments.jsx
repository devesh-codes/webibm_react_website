import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Minus,
  Copy,
  CheckCircle,
} from "lucide-react";

import qrImage from "../assets/payment.webp";



const Payments = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState("bank");
  const [copied, setCopied] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    paymentFor: "",
    amount: "",
    companyName: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const bankDetails = {
    bank: "Unity Small Finance Bank",
    accountName: "Santoshi Piplani",
    accountNo: "060321250000021",
    ifsc: "IUNBA0000603 ",
    branch: "Tilak Nagar",
  };

  const upiId = "santoshlji@unitypay";

  const handleCopy = (text, type) => {

    navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.amount
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {

      const response = await fetch(
        "https://inbizmart.in/api/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: formData.amount,
          }),
        }
      );

      const order = await response.json();

      console.log(order);

      if (!order.id) {
        alert("Order creation failed");
        return;
      }

      const options = {

        key: import.meta.env.VITE_RAZORPAY_KEY,

        amount: order.amount,

        currency: order.currency,

        order_id: order.id,

        name: "India Business Mart",

        description: formData.paymentFor,

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },

        notes: {
          company: formData.companyName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
        },

        handler: function (response) {

        navigate("/thank-you", {
       state: {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          amount: formData.amount,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
        },
  });
},

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },

        theme: {
          color: "#dc2626",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* MAIN SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 my-10 py-6 sm:py-10 px-3 sm:px-4">

        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10">

          {/* HEADER */}
          <div className="text-center mb-8 sm:mb-10">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Payment Options
            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Fast, secure & trusted payment methods
            </p>

          </div>

          {/* PAYMENT METHODS */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">

            {[
              "Visa",
              "MasterCard",
              "RuPay",
              "UPI",
              "Paytm",
              "Net Banking",
            ].map((item) => (

              <div
                key={item}
                className="px-3 sm:px-5 py-2 sm:py-3 rounded-xl border bg-gray-50 shadow-sm hover:shadow-md transition font-medium text-sm sm:text-base text-gray-700"
              >
                {item}
              </div>

            ))}

          </div>

          {/* PAY NOW BUTTON */}
          <div className="flex justify-center mb-8 sm:mb-10">

            <button
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 transition text-white px-6 sm:px-10 py-3 rounded-xl font-semibold shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              Pay Now
            </button>

          </div>

          {/* NET BANKING */}
          <div className="border rounded-2xl overflow-hidden mb-6 shadow-sm">

            <button
              onClick={() =>
                setOpenSection(openSection === "bank" ? "" : "bank")
              }
              className="w-full flex items-center justify-between bg-red-500 text-white px-4 sm:px-6 py-3 sm:py-4"
            >

              <span className="font-semibold text-sm sm:text-lg">
                Net Banking Option
              </span>

              {openSection === "bank" ? <Minus /> : <Plus />}

            </button>

            {openSection === "bank" && (

              <div className="p-4 sm:p-6 bg-white">

                <div className="text-center mb-6">

                  <h2 className="text-2xl sm:text-3xl font-bold italic text-yellow-500">
                    Unity Small Finance Bank
                  </h2>

                </div>

                <div className="overflow-x-auto">

                  <table className="min-w-[600px] w-full border border-gray-200 rounded-xl overflow-hidden">

                    <tbody>

                      <tr className="border-b">

                        <td className="font-semibold bg-gray-50  p-4 w-1/3">
                          Bank Name
                        </td>

                        <td className="p-4">
                          {bankDetails.bank}
                        </td>

                      </tr>

                      <tr className="border-b">

                        <td className="font-semibold bg-gray-50 p-4">
                          Account Name
                        </td>

                        <td className="p-4">
                          {bankDetails.accountName}
                        </td>

                      </tr>

                      <tr className="border-b">

                        <td className="font-semibold bg-gray-50 p-4">
                          Account Number
                        </td>

                        <td className="p-4 flex items-center gap-3">

                          {bankDetails.accountNo}

                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(
                                bankDetails.accountNo,
                                "account"
                              )
                            }
                            className="text-blue-600 hover:text-blue-800"
                          >

                            {copied === "account" ? (
                              <CheckCircle size={18} />
                            ) : (
                              <Copy size={18} />
                            )}

                          </button>

                        </td>

                      </tr>

                      <tr className="border-b">

                        <td className="font-semibold bg-gray-50 p-4">
                          IFSC Code
                        </td>

                        <td className="p-4 flex items-center gap-3">

                          {bankDetails.ifsc}

                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(bankDetails.ifsc, "ifsc")
                            }
                            className="text-blue-600 hover:text-blue-800"
                          >

                            {copied === "ifsc" ? (
                              <CheckCircle size={18} />
                            ) : (
                              <Copy size={18} />
                            )}

                          </button>

                        </td>

                      </tr>

                      <tr>

                        <td className="font-semibold bg-gray-50 p-4">
                          Branch
                        </td>

                        <td className="p-4">
                          {bankDetails.branch}
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            )}

          </div>

          {/* UPI PAYMENT */}
          <div className="border rounded-2xl overflow-hidden shadow-sm">

            <button
              onClick={() =>
                setOpenSection(openSection === "upi" ? "" : "upi")
              }
              className="w-full flex items-center justify-between bg-red-500 text-white px-4 sm:px-6 py-3 sm:py-4"
            >

              <span className="font-semibold text-sm sm:text-lg">
                Payment Through UPI
              </span>

              {openSection === "upi" ? <Minus /> : <Plus />}

            </button>

            {openSection === "upi" && (

              <div className="p-4 sm:p-8 bg-white">

                <div className="flex flex-col items-center">

                  <div className="bg-gray-50 border rounded-3xl p-4 sm:p-5 shadow-md">

                    <img
                      src={qrImage}
                      alt="UPI QR Code"
                      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain rounded-2xl"
                    />

                  </div>

                  <p className="mt-5 text-gray-500 text-sm text-center">
                    Scan this QR code using any UPI app
                  </p>

                </div>

                <div className="mt-8 flex justify-center">

                  <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-100 px-4 sm:px-6 py-4 rounded-2xl">

                    <span className="font-semibold text-sm sm:text-lg text-gray-700">
                      {upiId}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(upiId, "upi")
                      }
                      className="text-blue-600 hover:text-blue-800"
                    >

                      {copied === "upi" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Copy size={20} />
                      )}

                    </button>

                  </div>

                </div>

              </div>

            )}

          </div>
        </div>
      </div>

      {/* PAYMENT FORM MODAL */}
      {showForm && (

        <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">

          <div className="min-h-screen flex items-start justify-center p-3 sm:p-4 py-6 sm:py-10">

            <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl relative max-h-[95vh] overflow-y-auto">

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl z-10"
              >
                ✕
              </button>

              {/* HEADER */}
              <div className="bg-gradient-to-r from-red-400 to-red-300 text-white px-4 sm:px-8 py-4 sm:py-6 rounded-t-2xl sm:rounded-t-3xl">

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Online Payment Form
                </h2>

              </div>

              {/* FORM */}
              <div className="p-4 sm:p-6 md:p-8">

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                  <div className="md:col-span-2">

                    <label className="block mb-2 font-medium text-gray-700">
                      Payment For
                    </label>

                    <input
                      type="text"
                      name="paymentFor"
                      value={formData.paymentFor}
                      onChange={handleChange}
                      placeholder="Service/Product Name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Amount (INR)
                    </label>

                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter Amount"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      Office Address
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Office Address"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium text-gray-700">
                      State
                    </label>

                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3"
                    >

                      <option value="">Select State</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                      <option>Punjab</option>
                      <option>Manipur</option>
                      <option>Gujrat</option>
                      <option>Assam</option>
                      <option>Nagaland</option>

                    </select>

                  </div>

                  <div className="md:col-span-2 flex justify-center mt-4">

                    <button
                      type="button"
                      onClick={handlePayment}
                      className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition text-sm sm:text-base w-full sm:w-auto"
                    >
                      Proceed To Payment
                    </button>

                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default Payments;
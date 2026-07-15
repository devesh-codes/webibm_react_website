import { useState } from "react";
import axios from "axios";
import {
  X,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function PopUpForm({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Business Growth Consultation",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: `Business Growth Consultation Request

Company: ${formData.company || "Not Provided"}

Customer is interested in discussing digital solutions for their business.`,
    };

    try {
      await axios.post(
        "https://inbizmart.in/api/contact",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Thank you! Our team will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Business Growth Consultation",
        message: "",
      });

      onClose();
    } catch (err) {
      console.error(err);
      alert("Unable to submit your request. Please try again.");
    }

    setLoading(false);
  };

  return (
   <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex  items-center justify-center p-4">

    <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
      >
        <X size={18} />
      </button>

      <div className="grid h-full md:grid-cols-[40%_60%]">

        {/* Left Image */}
        <div className="hidden md:block h-full">
          <img
            src="https://inbizmart.in/api/uploads/subcategory/main/1784026541_ChatGPT%20Image%20Jul%2014,%202026,%2003_17_40%20PM.png"
            alt="Business Consultation"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex h-full flex-col justify-center p-8 lg:p-10 overflow-y-auto">

         

          {/* Heading */}
          <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
            Grow Your Business
            <span className="block text-indigo-600">
              with WebIBM
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-6">
            Tell us about your business and our experts will help you
            choose the right website, SEO, branding or digital marketing
            solution.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <button
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-orange-400 to-pink-600 py-3.5 text-lg font-semibold text-white transition hover:scale-[1.02]"
            >
              {loading ? "Submitting..." : "Request Free Consultation"}
            </button>

          </form>

          <p className="mt-5 text-center text-xs text-gray-500">
            We respect your privacy. No spam, ever.
          </p>

          <button
            onClick={onClose}
            className="mt-4 text-center text-sm text-gray-500 hover:text-indigo-600"
          >
            Maybe Later →
          </button>

        </div>

      </div>

    </div>

  </div>
  );
}
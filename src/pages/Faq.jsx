import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Globe,
  Lock,
  CreditCard,
  Headphones,
  HelpCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const faqData = [
  {
    icon: <Shield size={20} />,
    question: "How secure is my personal information?",
    answer:
      "We use industry-standard encryption and security measures to protect your personal data and ensure complete privacy.",
  },
  {
    icon: <Globe size={20} />,
    question: "Do you collect cookies and tracking data?",
    answer:
      "Yes, we use cookies and similar technologies to improve user experience, analyze website traffic, and personalize content.",
  },
  {
    icon: <Lock size={20} />,
    question: "Can I request deletion of my data?",
    answer:
      "Absolutely. You can contact us anytime to request deletion or modification of your personal information.",
  },
  {
    icon: <CreditCard size={20} />,
    question: "Do you share payment information with third parties?",
    answer:
      "No, your payment information is processed securely through trusted payment gateways and is never shared directly.",
  },
  {
    icon: <Headphones size={20} />,
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through email or the contact form available on our website anytime.",
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-zinc-800">
            {item.question}
          </h3>
        </div>

        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="text-zinc-500" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pl-[88px] text-zinc-600 leading-7">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-zinc-50 py-20 px-4 sm:px-6 font-[Outfit]">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-500 px-4 py-2 rounded-full mb-6">
            <HelpCircle size={18} />
            <span className="font-medium">Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
            Got Questions?
            <span className="text-red-500"> We've Answers</span>
          </h2>

          <p className="text-zinc-600 text-lg leading-8">
            Find quick answers to common questions about our services,
            privacy, security, and customer support.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid lg:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-[32px] p-10 text-center text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Still have questions?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any additional
              questions or concerns.
            </p>

             <NavLink to="/contact">
                <button className="bg-white text-red-500 font-semibold px-8 py-4 rounded-2xl hover:bg-zinc-100 transition-all duration-300 shadow-lg">
              Contact Support
            </button> </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
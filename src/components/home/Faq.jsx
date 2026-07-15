import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What services does WebIBM provide?",
    answer:
      "WebIBM offers a complete range of digital solutions, including Website Development, E-commerce Development, SEO, Google Ads (PPC), Social Media Marketing, Mobile App Development, CRM Development, Graphic Design, and Branding. We help businesses establish a strong online presence and achieve measurable growth.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the project's complexity. A basic business website typically takes 1–2 weeks, while custom websites, e-commerce stores, or web applications may require 3–8 weeks. We provide a clear timeline before the project begins.",
  },
  {
    question:
      "Do you provide SEO and digital marketing services after website development?",
    answer:
      "Yes. We offer comprehensive digital marketing services, including Search Engine Optimization (SEO), Google Ads, Social Media Marketing, Content Marketing, and Local SEO. Our goal is to help your website attract more visitors and generate quality leads.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-friendly?",
    answer:
      "Absolutely. Every website we develop is fully responsive, optimized for mobile devices, and built following modern SEO best practices. This ensures a better user experience and improves your website's visibility on search engines like Google.",
  },
  {
    question: "Can I update my website after it is launched?",
    answer:
      "Yes. We develop websites with user-friendly content management systems whenever required, allowing you to update text, images, blogs, and other content easily. We also provide ongoing maintenance and support if you prefer us to manage your website.",
  },
  {
    question: "Why should I choose WebIBM?",
    answer:
      "WebIBM combines technical expertise with result-driven digital marketing strategies. We focus on delivering high-quality solutions, transparent communication, timely project delivery, and continuous support to help businesses grow online. Our team is committed to creating customized solutions tailored to your business goals.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl bg-[white] shadow-sm ring-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{item.question}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
            isOpen
              ? "bg-[#321E48] text-white"
              : "bg-[#321E48] text-white"
          }`}
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-black-700/80">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative overflow-hidden bg-[#FFF5F0] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
       

        <h2 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Frequently asked{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
            questions
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {leftColumn.map((item) => {
              const index = faqs.indexOf(item);
              return (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5">
            {rightColumn.map((item) => {
              const index = faqs.indexOf(item);
              return (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
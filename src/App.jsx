import { useState, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";

import logo from "./assets/logo.webp";

// =========================
// Lazy Loaded Pages
// =========================
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

const ServicePage = lazy(() => import("./pages/ServicePage"));
const SubcategoryPage = lazy(() => import("./pages/SubcategoryPage"));
const Payments = lazy(() => import("./pages/Payments"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Faq = lazy(() => import("./pages/Faq"));
const Google_partner_in_india = lazy(() => import("./pages/google_partner_in_india"));
const ThankYou = lazy(() => import("./pages/ThankYou"));


// =========================
// Lazy Loaded WhatsApp
// =========================
const FloatingWhatsApp = lazy(() =>
  import("react-floating-whatsapp").then((module) => ({
    default: module.FloatingWhatsApp,
  }))
);

// =========================
// Loader Component
// =========================
function PageLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);

  return (
     <>
    {/* Navbar */}
    <Navbar logoRef={logoRef} />

    <ScrollToTop />
    <ScrollTopButton />

    {/* Routes */}
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:categorySlug"
          element={<ServicePage />}
        />
        <Route
          path="/services/:categorySlug/:subcategorySlug"
          element={<SubcategoryPage />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/payments" element={<Payments />} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
        <Route
          path="/google-partner-in-india"
          element={<Google_partner_in_india />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />
      </Routes>
    </Suspense>

    {/* Footer */}
    <Footer />

    {/* WhatsApp */}
    <Suspense fallback={null}>
      <FloatingWhatsApp
        phoneNumber="919971515539"
        accountName="InBizMart"
        avatar={logo}
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello 👋 How can we help you?"
        placeholder="Type a message..."
        allowEsc
        allowClickAway
      />
    </Suspense>
  </>
  );
}

export default App;
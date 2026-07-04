import React, {
  lazy,
  Suspense,
} from "react";

import { Helmet } from "react-helmet-async";

// ✅ Keep Hero normal (LCP)
import Hero from "../components/Hero";

// ✅ Lazy load below-the-fold sections
const About = lazy(() =>
  import("../components/home/About")
);

// const StoryServices = lazy(() =>
//   import("../components/StoryServices.jsx")
// );

const Services = lazy(() =>
  import("../components/home/Services")
);

const Recognition = lazy(() =>
  import("../components/home/Recognition")
);

const Products = lazy(() =>
  import("../components/home/Products")
);

const Testimonials = lazy(() =>
  import("../components/home/Testimonials")
);



const Industries = lazy(() =>
  import("../components/home/Industries")
);

// ✅ Small section loader
function SectionLoader() {
  return (
    <div className="py-20 flex justify-center">
      <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          WebIBM | Web Development &
          Digital Marketing Company
        </title>

        <meta
          name="description"
          content="WebIBM provides professional web development, SEO, branding, UI/UX, and digital marketing services for businesses."
        />

        <meta
          name="keywords"
          content="web development, seo services, digital marketing, branding, ui ux design"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="WebIBM"
        />

        <meta
          property="og:description"
          content="Professional web development and digital marketing company."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://react.webibm.com/"
        />

        <meta
          property="og:image"
          content="https://react.webibm.com/preview.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="WebIBM"
        />

        <meta
          name="twitter:description"
          content="Professional web development company."
        />

        <link
    rel="canonical"
    href="https://react.webibm.com/"
        />
      </Helmet>

      {/* HERO FIRST */}
      <Hero />

      {/* BELOW THE FOLD */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      {/* <Suspense fallback={<SectionLoader />}>
        <StoryServices />
      </Suspense> */}

      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Recognition />
      </Suspense>
{/* 
      <Suspense fallback={<SectionLoader />}>
        <Products />
      </Suspense> */}

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      {/* <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense> */}

      <Suspense fallback={<SectionLoader />}>
        <Industries />
      </Suspense>
    </>
  );
};

export default Home;
import React, {
  lazy,
  Suspense,
} from "react";




import SEO from "../components/SEO/SEO"
import homeSchema from "../components/SEO/schemas/HomeSchema";


import Hero from "../components/Hero";


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

      {/* comments test */}
        <SEO
        title="WebIBM | Web Development & Digital Marketing Company"
        description="WebIBM provides professional web development..."
        keywords="web development, seo services..."
        canonical="https://webibm.com/"
        image="https://webibm.com/preview.jpg"
        schema={homeSchema}
      />

      

  
      
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
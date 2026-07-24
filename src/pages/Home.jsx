import React, {
  lazy,
  Suspense,
  useState,
  useEffect,
} from "react";



import SEO from "../components/SEO/SEO"
import homeSchema from "../components/SEO/schemas/HomeSchema";
import PopUpForm from "../components/home/PopUpForm";
import MouseCursor from "../components/MouseCursor";
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
const WhyChooseUs = lazy(() =>
  import("../components/home/WhyChooseUs")
);



const Industries = lazy(() =>
  import("../components/home/Industries")
);
const Blogs = lazy(() =>
  import("../components/home/Blogs")
);
const Faq = lazy(() =>
  import("../components/home/Faq")
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

  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 1000); // Show after 3 seconds

  return () => clearTimeout(timer);
}, []);
  return (
    <>
      {/* SEO */}

      {/* comments test */}
        <SEO
        title="Best Digital Marketing Agency in Delhi, India | WebIBM"
        description="WebIBM is a leading digital marketing agency in Delhi offering SEO, PPC, website design, social media marketing, web development, and lead generation services."
        keywords="Best Digital Marketing Agency in India, Digital Marketing Agency in India, SEO Company in India, Website Design Company in India, Web Development Company in India, PPC Services in India, Social Media Marketing Agency in India, Local SEO Services India, Digital Marketing Services India
"
        canonical="https://webibm.com/"
        image="https://webibm.com/preview.jpg"
        schema={homeSchema}
      />

      
      <MouseCursor/>
  
      
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

      <Suspense fallback={<SectionLoader />}>
        <Products />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Blogs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Industries />
      </Suspense>
      <PopUpForm
       isOpen={showPopup}
  onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default Home;
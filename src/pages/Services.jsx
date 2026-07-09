import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import ServicesHero from "../components/services/ServicesHero";
import Industries from "../components/home/Industries";
import Testimonials from "../components/home/Testimonials";
import { Helmet } from "react-helmet-async";
gsap.registerPlugin(ScrollTrigger);

function Services() {

  const [categories, setCategories] = useState([]);

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | FETCH CATEGORIES
  |--------------------------------------------------------------------------
  */

  const fetchCategories = async () => {

    try {

      const response = await fetch(`${API}/categories`);

      const result = await response.json();

      if (result.status) {

        setCategories(result.data);
      }

    } catch (error) {

      console.log(error);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchCategories();

  }, []);

 
 
  return (

    <>


     <Helmet>
            <title> WebIBM | Web Development & Digital Marketing Company</title>
    
            <meta
              name="description"
              content=" WebIBM, our mission, our team, and how we help businesses grow through web development, SEO, and digital marketing."
            />
    
            <link
              rel="canonical"
              href="https://react.webibm.com/services"
            />
          </Helmet>

      {/* GOOGLE FONT */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps&display=swap');

          body {
            font-family: 'Outfit', sans-serif;
            background: #0b0a0a;
          }

          .elsie-font {
            font-family: 'Outfit', serif;
          }
        `}
      </style>

      <div className="bg-[#0b0a0a] overflow-x-hidden">

        <ServicesHero />

        {/* HEADING */}
        <div className="text-center pt-24 px-6">

          <h1 className="
            text-[#ff355d]
            uppercase
            tracking-[6px]
            
            text-2xl
          ">
            Professional Digital Marketing & Web Development Services

          </h1>

          <h1 className="
            text-white
            text-5xl
            md:text-7xl
            font-bold
            mt-6
            leading-tight
          ">
            Explore Our 
            Services
          </h1>

          <p className="
            text-[#9e9e9e]
            max-w-3xl
            mx-auto
            mt-6
            text-xl
            leading-8
          ">
            We build modern digital experiences through
            creative design, scalable development,
            and performance-focused strategies.
          </p>
        </div>

        {/* SERVICES */}
       {/* SERVICES */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0b0a0a] ">

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8  ">

      {categories.map((category) => (

        <div
          key={category.id}
          className="
            group
            bg-white/[0.03]
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            hover:border-[#ff355d]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-[0_20px_60px_rgba(255,53,93,0.25)]
          "
        >

          {/* IMAGE */}

          <div className="overflow-hidden">

            <img
              src={`${API}/uploads/category/main/${category.main_image}`}
              alt={category.title}
              className="
                w-full
                h-64
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          {/* CONTENT */}

          <div className="p-8">

            <span
              className="
                inline-block
                text-xs
                uppercase
                tracking-[3px]
                text-[#ff355d]
                mb-3
              "
            >
              Digital Service
            </span>

            <h3
              className="
                text-3xl
                font-bold
                text-white
                mb-4
              "
            >
              {category.title}
            </h3>

            <p
              className="
                text-gray-400
                leading-7
                line-clamp-3
                mb-6
              "
            >
              {category.description}
            </p>

            <NavLink
            to={`/services/${category.slug || category.id}`}
            >
              <button
              className="
                flex
                items-center
                gap-2
                text-[#ff355d]
                font-semibold
                group-hover:gap-4
                transition-all
              "
            >
              Learn More
              <span>→</span>
            </button>
</NavLink>
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      </div>

      <Testimonials />

    </>
  );
}

export default Services;
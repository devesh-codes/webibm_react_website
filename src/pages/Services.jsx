import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServicesHero from "../components/services/ServicesHero";
import Industries from "../components/home/Industries";
import Testimonials from "../components/home/Testimonials";

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

  /*
  |--------------------------------------------------------------------------
  | GSAP ANIMATIONS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    if (!categories.length) return;

    categories.forEach((_, index) => {

      gsap.to(`.reveal-circle-${index}`, {

        scrollTrigger: {
          trigger: `.service-section-${index}`,
          start: "top center",
          end: "bottom center",
          scrub: 2,
        },

        attr: {
          r: 380,
        },
      });

      gsap.from(`.title-${index}`, {

        scrollTrigger: {
          trigger: `.service-section-${index}`,
          start: "top 80%",
        },

        y: 120,
        opacity: 0,
        duration: 1.2,
      });

      gsap.from(`.desc-${index}`, {

        scrollTrigger: {
          trigger: `.service-section-${index}`,
          start: "top 80%",
        },

        y: 60,
        opacity: 0,
        duration: 1,
      });

    });

  }, [categories]);

  return (

    <>

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

          <span className="
            text-[#ff355d]
            uppercase
            tracking-[6px]
            
            text-2xl
          ">
            Premium Digital Solutions
          </span>

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
        <section className="
          relative
          py-24
          md:py-40
          px-6
          md:px-12
          lg:px-20
        ">

          <div className="space-y-[180px]">

            {categories.map((category, index) => {

              const isLeft = index % 2 === 0;

              return (

                <div
                  key={category.id}
                  className={`
                    service-section-${index}
                    min-h-screen
                    flex
                    items-center
                    justify-center
                  `}
                >

                  <div
                    className={`
                      grid
                      lg:grid-cols-2
                      gap-14
                      lg:gap-24
                      items-center
                      w-full
                      max-w-[1450px]
                    `}
                  >

                    {/* TEXT CONTENT */}
                    <div
                      className={`
                        relative
                        z-10
                        ${!isLeft ? "lg:order-2" : ""}
                      `}
                    >

                      {/* LABEL */}
                      <div
                        className="
                          text-[#ff355d]
                          uppercase
                          tracking-[5px]
                          text-xs
                          md:text-sm
                          font-medium
                          mb-5
                        "
                      >
                        Digital Excellence
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`
                          title-${index}
                          elsie-font
                          text-white
                          text-[42px]
                          sm:text-[60px]
                          md:text-[80px]
                          lg:text-[95px]
                          leading-[0.9]
                          mb-8
                          drop-shadow-[0_0_40px_rgba(255,53,93,0.2)]
                        `}
                      >
                        {category.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className={`
                          desc-${index}
                          text-[#f3d7e3]
                          text-[15px]
                          md:text-[17px]
                          leading-8
                          max-w-[580px]
                          mb-7
                          font-light
                        `}
                      >
                        {category.description}
                      </p>

                      {/* META DESCRIPTION */}
                      <p
                        className="
                          text-[#9e9e9e]
                          text-[15px]
                          md:text-[16px]
                          leading-8
                          max-w-[580px]
                          mb-10
                          font-light
                        "
                      >
                        {category.meta_description}
                      </p>

                      {/* BUTTON */}
                      <button
                        className="
                          group
                          px-8
                          py-4
                          rounded-full
                          border
                          border-[#ff355d]
                          text-white
                          bg-[#ff355d]/10
                          hover:bg-[#ff355d]
                          transition-all
                          duration-500
                          tracking-wide
                          text-sm
                          md:text-base
                          shadow-[0_0_30px_rgba(255,53,93,0.2)]
                        "
                      >

                        <span className="
                          flex
                          items-center
                          gap-3
                          group-hover:gap-5
                          transition-all
                          duration-300
                        ">
                          Explore More →
                        </span>

                      </button>

                    </div>

                    {/* IMAGE SECTION */}
                    <div
                      className={`
                        relative
                        flex
                        justify-center
                        ${!isLeft ? "lg:order-1" : ""}
                      `}
                    >

                      <div className="relative w-full max-w-[520px]">

                        <svg
                          width="100%"
                          height="650"
                          viewBox="0 0 520 650"
                          xmlns="http://www.w3.org/2000/svg"
                          className="overflow-visible"
                        >

                          <defs>

                            <filter id={`sandy-${index}`}>

                              <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.03"
                                numOctaves="3"
                                result="noise"
                              />

                              <feDisplacementMap
                                in="SourceGraphic"
                                in2="noise"
                                scale="60"
                                xChannelSelector="R"
                                yChannelSelector="G"
                              />

                            </filter>

                            <mask id={`circleMask-${index}`}>

                              <circle
                                cx="260"
                                cy="325"
                                r="0"
                                fill="white"
                                className={`reveal-circle-${index}`}
                                style={{
                                  filter: `url(#sandy-${index})`,
                                }}
                              />

                            </mask>

                          </defs>

                          <image
                            href={`${API}/uploads/category/main/${category.main_image}`}
                            width="520"
                            height="650"
                            preserveAspectRatio="xMidYMid slice"
                            mask={`url(#circleMask-${index})`}
                            style={{
                              filter:
                                "brightness(120%) contrast(110%)",
                            }}
                          />

                        </svg>

                        {/* PREMIUM GLOW */}
                        <div
                          className="
                            absolute
                            inset-0
                            rounded-[40px]
                            shadow-[0_0_120px_rgba(255,53,93,0.25)]
                            pointer-events-none
                          "
                        ></div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

      </div>

      <Testimonials />

    </>
  );
}

export default Services;
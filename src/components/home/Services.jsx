import { useEffect, useRef, useState  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import {NavLink} from "react-router-dom";
import webdevImg from "../../assets/webd.webp";
import appdevImg from "../../assets/app.webp";
import webImg from "../../assets/web-dev.webp";
import digitalImg from "../../assets/digital.webp";
import graphicImg from "../../assets/graphic.webp";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);

  const [services, setServices] = useState([]);

 useEffect(() => {
  fetch("https://inbizmart.in/api/categories")
    .then((res) => res.json())
    .then((result) => {
      if (result.status) {
        setServices(result.data);
      }
    })
    .catch((err) => console.error(err));
}, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HEADING
      gsap.fromTo(
        ".services-heading > *",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // CARDS
      gsap.fromTo(
        ".service-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[#050505]
        py-24
        px-6
        md:px-20
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-red-500/20
        blur-[120px]
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-red-500/10
        blur-[120px]
        rounded-full
      "></div>

      {/* HEADING */}
      <div className="
        services-heading
        text-center
        relative
        z-10
        mb-20
      ">

        <span className="
          text-red-500
          uppercase
          tracking-[5px]
          text-sm
          font-semibold
        ">
          Services We Offer
        </span>

        <h2 className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          leading-tight
          mt-6
        ">
          From Building Websites <br />
          To Bringing Customers
        </h2>

        <p className="
          text-gray-400
          text-lg
          max-w-3xl
          mx-auto
          mt-6
          leading-relaxed
        ">
          We combine design, development, branding,
          and marketing strategies to create
          powerful digital experiences that help
          businesses grow faster.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="
        services-grid
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-8
        relative
        z-10
      ">

        {services.map((service, i) => (
          <div
            key={i}
            className="
              service-card
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-4
              hover:border-red-500/40
              transition-all
              duration-500
              hover:-translate-y-3
            "
          >

            {/* TOP GLOW */}
            <div className="
              absolute
              -top-20
              -right-20
              w-40
              h-40
              bg-red-500/10
              rounded-full
              blur-3xl
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            "></div>

            {/* ICON */}
            <div className="
              w-24
              h-24
              rounded-2xl
              bg-gradient-to-br
              from-red-500/20
              to-red-500/5
              border
              border-red-500/20
              flex
              items-center
              justify-center
              mb-8
            ">

              <img
                src={`https://inbizmart.in/api/uploads/category/main/${service.main_image}`}
                alt={service.title}
                className="
                  w-16
                  h-16
                  object-contain
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />
            </div>

            {/* TITLE */}
            <h3 className="
              text-2xl
              font-bold
              text-white
              mb-5
            ">
              {service.title}
            </h3>

            {/* DESC */} 
            <p className="
              text-gray-400
              leading-relaxed
              text-lg
              mb-8
            ">
              {service.desc}
            </p>
 
            {/* BUTTON */}
           <NavLink to={`/services/${service.slug}`} > <button
              className="
                flex
                items-center
                gap-3
                text-red-500
                font-medium
                group-hover:gap-5
                transition-all
                duration-300
              "
            >
              Explore Service
 
              <ArrowUpRight
                size={20}
                className="
                  group-hover:rotate-45
                  transition
                  duration-300
                "
              />
            </button></NavLink>

            {/* CARD NUMBER */}
            <span className="
              absolute
              top-6
              right-6
              text-6xl
              font-bold
              text-white/5
            ">
              0{i + 1}
            </span>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
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
      {/* SERVICES GRID */}
<div
  className="
    services-grid
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-5
    sm:gap-4
    lg:gap-8
    relative
    z-10
  "
>
  {services.map((service, i) => (
    <div
      key={i}
      className="
        service-card
        group
        relative
        overflow-hidden
        rounded-2xl
        lg:rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
        sm:p-6
        hover:border-red-500/40
        transition-all
        duration-500
        hover:-translate-y-2
        lg:hover:-translate-y-3
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-32
          h-32
          sm:w-40
          sm:h-40
          bg-red-500/10
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      {/* ICON */}
      <div
        className="
          w-16
          h-16
          sm:w-20
          sm:h-20
          lg:w-24
          lg:h-24
          rounded-xl
          lg:rounded-2xl
          bg-gradient-to-br
          from-red-500/20
          to-red-500/5
          border
          border-red-500/20
          flex
          items-center
          justify-center
          mb-5
          sm:mb-6
          lg:mb-8
        "
      >
        <img
          src={`https://inbizmart.in/api/uploads/category/main/${service.main_image}`}
          alt={service.title}
          className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            lg:w-16
            lg:h-16
            object-contain
            group-hover:scale-110
            transition
            duration-500
          "
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          text-xl
          sm:text-2xl
          font-bold
          text-white
          mb-3
          sm:mb-4
        "
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-400
          text-sm
          sm:text-base
          lg:text-lg
          leading-6
          mb-6
        "
      >
        {service.desc}
      </p>

      {/* BUTTON */}
      <NavLink to={`/services/${service.slug}`}>
        <button
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            text-red-500
            text-sm
            sm:text-base
            font-medium
            group-hover:gap-4
            transition-all
            duration-300
          "
        >
          Explore Service

          <ArrowUpRight
            size={18}
            className="
              group-hover:rotate-45
              transition
              duration-300
            "
          />
        </button>
      </NavLink>

      {/* CARD NUMBER */}
      <span
        className="
          absolute
          top-4
          right-4
          sm:top-6
          sm:right-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          text-white/5
        "
      >
        {String(i + 1).padStart(2, "0")}
      </span>
    </div>
  ))}
</div>
    </section>
  );
}

export default Services;
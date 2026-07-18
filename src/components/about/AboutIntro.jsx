import Industries from "../home/Industries";
import Services from "../home/Services";
import WhyChooseUs from "../home/WhyChooseUs";

import abtImg1 from "../../assets/abt-5.webp";
import abtImg2 from "../../assets/abt-6.webp";
import growthImg from "../../assets/growth.webp";
import aboutImg from "../../assets/logo-abt.webp";
import Blogs from "../home/Blogs";
import Faq from "../home/Faq";

import {
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { NavLink } from "react-router-dom";

function AboutIntro() {
  return (
    <>

     <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8fb] via-white to-[#f4f0ff] py-8 px-6 lg:px-20">

  {/* Background Blur */}
  
  <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div className="relative">

      <img
        src={abtImg2}
        alt="About"
        className="w-full rounded-[35px] shadow-2xl  mb-14 "
      />

      {/* Floating Image */}

      <div className="
      absolute
      -bottom-12
      right-6
      bg-white
      p-2
      rounded-3xl
      shadow-2xl
      ">

        <img
          src={abtImg1}
          alt=""
          className="w-[250px] rounded-2xl"
        />

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div>

      <span className="text-red-700 font-semibold uppercase tracking-[3px]">
        About WebIBM
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900">

        We're a team of{" "}
        <span className="text-red-500">
          digital craftsmen
        </span>

      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">

        WebIBM is a full-service web design, development, and digital
        marketing agency helping businesses grow through innovative digital
        solutions. We combine strategy, creativity, and technology to build
        websites that deliver measurable results.

      </p>

      {/* CARDS */}

      <div className="grid sm:grid-cols-2 gap-6 mt-10">

        {[
          {
            title: "Innovation First",
            text: "Creative ideas backed by modern technologies.",
            color: "bg-blue-100",
            icon: "💡",
          },
          {
            title: "Client-Centric",
            text: "We work as an extension of your business.",
            color: "bg-pink-100",
            icon: "👥",
          },
          {
            title: "Quality Assured",
            text: "Pixel-perfect websites with clean code.",
            color: "bg-green-100",
            icon: "🛡️",
          },
          {
            title: "Results Driven",
            text: "Focused on traffic, leads and conversions.",
            color: "bg-yellow-100",
            icon: "📈",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="
            bg-white
            rounded-3xl
            p-7
            shadow-lg
            hover:-translate-y-2
            hover:shadow-2xl
            transition
            duration-300
            "
          >

            <div
              className={`
              ${item.color}
              h-14
              w-14
              rounded-2xl
              flex
              items-center
              justify-center
              text-2xl
              mb-5
              `}
            >
              {item.icon}
            </div>

            <h3 className="font-bold text-lg text-gray-900">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              {item.text}
            </p>

          </div>

        ))}

      </div>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-5 mt-10">
        <NavLink to={"/services"} >

        
        <button className="
        px-8
        py-4
        rounded-full
        bg-[#cf1616]
        hover:bg-[#851b1b]
        text-white
        font-semibold
        transition
        ">
          Our Services →
        </button>
</NavLink>
        <NavLink to={"/contact-us"} >
          <button className="
        px-8
        py-4
        rounded-full
        border-2
        border-[gray]
        text-black
        hover:border-[#C62828]
        
        font-semibold
        transition
        ">
          Contact Us
        </button>
          </NavLink>
      </div>

    </div>

  </div>

</section>

      <WhyChooseUs />
      <Industries />
      <Faq/>
      <Blogs/>
    </>
  );
}

export default AboutIntro;
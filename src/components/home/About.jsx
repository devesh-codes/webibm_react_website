import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import visionImg from "../../assets/abt-3.webp";
import growthImg from "../../assets/abt-2.webp";
import aboutImg from "../../assets/abt-1.webp";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT IMAGE
      gsap.fromTo(
        ".about-image",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
          },
        }
      );

      // RIGHT CONTENT
      gsap.fromTo(
        ".about-content > *",
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
            trigger: ".about-content",
            start: "top 80%",
          },
        }
      );

      // VISION CARD
      gsap.fromTo(
        ".vision-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-card",
            start: "top 85%",
          },
        }
      );

      // MISSION CARD
      gsap.fromTo(
        ".mission-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-card",
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
        bg-[#f7f7f7]
        py-24
        px-6
        md:px-20
        overflow-hidden
        relative
      "
    >

      {/* TOP SECTION */}
      <div className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
      ">

        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
<div className="about-image">

  <div className="grid grid-cols-2 gap-4 max-w-[520px] mx-auto">

    {/* Large Left Image */}
    <div className="row-span-2">
      <img
        src={growthImg}
        alt="About"
        className="w-full h-full min-h-[500px] object-cover rounded-3xl"
      />
    </div>

    {/* Top Right */}
    <div>
      <img
        src={visionImg}
        alt="About"
        className="w-full h-[240px] object-cover rounded-3xl"
      />
    </div>

    {/* Bottom Right */}
    <div>
      <img
        src={aboutImg}
        alt="About"
        className="w-full h-[240px] object-cover rounded-3xl"
      />
    </div>

  </div>

</div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="
            text-red-500
            uppercase
            tracking-[4px]
            font-semibold
          ">
            About Webibm
          </span>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            text-gray-900
            mt-5
            mb-8
          ">
            Best Digital Marketing Company 

          </h1>

          <div className="
            space-y-6
            text-gray-600
            text-lg
            leading-relaxed
          ">

            <p>
              Webibm transforms ideas into powerful digital experiences that help businesses establish a strong brand presence and achieve sustainable online growth.
            </p>

            <p>
              We design and develop customized, responsive, and high-performance websites that enhance user engagement, strengthen credibility, and deliver seamless experiences across all devices.

            </p>

            <p>
              Specializing in website designing, web development, SEO, SMO, eCommerce solutions, and custom web applications, Webibm delivers innovative digital solutions tailored to modern business requirements.

            </p>
          </div>

          {/* BUTTONS */}
          <div className="
            flex
            flex-wrap
            gap-5
            mt-10
          ">

          <NavLink to="/services" >  <button className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-8
              py-4
              rounded-full
              font-medium
              transition
              duration-300
              shadow-lg
            ">
              Explore Services
            </button></NavLink>
              <NavLink to="/contact-us" >
            <button className="
              border-2
              border-gray-300
              hover:border-red-500
              hover:text-red-500
              text-gray-700
              px-8
              py-4
              rounded-full
              font-medium
              transition
              duration-300
            ">
              Contact Us
            </button></NavLink>
          </div>

        </div>
      </div>

      {/* VISION + MISSION */}
   {/* VISION + MISSION */}
<div
  className="
    grid
    md:grid-cols-2
    gap-10
    mt-28
  "
>

  {/* VISION */}
  <div
    className="
      vision-card
      relative
      overflow-hidden
      rounded-3xl
      p-10
      shadow-2xl
      text-white
      min-h-[420px]
      flex
      flex-col
      justify-between
    "
  >

    {/* BACKGROUND IMAGE */}
    <div
      className="
        absolute
        inset-0
        opacity-10
      "
    >
      <img
        src={visionImg}
        alt="vision"
        className="
          w-full
          h-full
          object-cover
        "
      />
    </div>

    {/* OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#5f160c]
        to-[#bd1802]

      "
    ></div>

    {/* CONTENT */}
    <div className="relative z-10">

      <h3 className="
        text-4xl
        font-bold
        mb-8
      ">
        Our Vision
      </h3>

      <ul className="
        space-y-5
        text-lg
        leading-relaxed
      ">

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Build stronger brands through impactful digital strategies.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Deliver powerful scalable solutions for long-term growth.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Enhance how brands connect with their audience online.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Make digital growth simple consistent and result-focused.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Create meaningful digital experiences for modern brands.
          </span>
        </li>

      </ul>
    </div>
  </div>

  {/* MISSION */}
  <div
    className="
      mission-card
      relative
      overflow-hidden
      rounded-3xl
      p-10
      shadow-2xl
      text-white
      min-h-[420px]
      flex
      flex-col
      justify-between
    "
  >

    {/* BACKGROUND IMAGE */}
    <div
      className="
        absolute
        inset-0
        opacity-10
      "
    >
      <img
        src={growthImg}
        alt="mission"
        className="
          w-full
          h-full
          object-cover
        "
      />
    </div>

    {/* OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-gray-900
        to-black
      "
    ></div>

    {/* CONTENT */}
    <div className="relative z-10">

      <h3 className="
        text-4xl
        font-bold
        mb-8
      ">
        Our Mission
      </h3>

      <ul className="
        space-y-5
        text-lg
        leading-relaxed
      ">

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Deliver digital solutions with quality leads and real results.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Connect businesses with the right audience effectively.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Improve online visibility with clear effective approaches.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Maintain performance that supports growth and conversions.
          </span>
        </li>

        <li className="flex gap-3">
          <span>✔</span>
          <span>
            Provide reliable support for consistent brand growth.
          </span>
        </li>

      </ul>
    </div>
  </div>

</div>
    </section>
  );
}

export default About;
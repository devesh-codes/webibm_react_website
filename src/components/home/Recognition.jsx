import { useState } from "react";
import { ArrowRight } from "lucide-react";

import htmlImg from "../../assets/html.webp";
import cssImg from "../../assets/css.webp";
import jsImg from "../../assets/js.webp";
import bootstrapImg from "../../assets/bootstrap.webp";
import reactImg from "../../assets/react.webp";
import nodeImg from "../../assets/node.webp";
import mongoImg from "../../assets/mongo.png";
import sqlImg from "../../assets/sql.webp";
import flutterImg from "../../assets/flutter.webp";
import reactNativeImg from "../../assets/react.webp";
import firebaseImg from "../../assets/firebase.webp";
import figmaImg from "../../assets/figma.webp";
import photoshopImg from "../../assets/photoshop.webp";
import illustratorImg from "../../assets/illustrator.webp";
import laptopImg from "../../assets/laptop.webp";
import { NavLink } from "react-router-dom";

function Recognition() {
  const tabs = [
    "Website Designing",
    "Website Development",
    "App Development",
    "Graphic Designing",
  ];

  const techData = {
    "Website Designing": [
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "JavaScript", img: jsImg },
      { name: "Bootstrap", img: bootstrapImg },
      { name: "React", img: reactImg },
    ],

    "Website Development": [
      { name: "Node.js", img: nodeImg },
      { name: "MongoDB", img: mongoImg },
      { name: "MySQL", img: sqlImg },
      { name: "React JS", img: reactImg },
    ],

    "App Development": [
      { name: "Flutter", img: flutterImg },
      { name: "React Native", img: reactNativeImg },
      { name: "Firebase", img: firebaseImg },
    ],

    "Graphic Designing": [
      { name: "Figma", img: figmaImg },
      { name: "Photoshop", img: photoshopImg },
      { name: "Illustrator", img: illustratorImg },
    ],
  };

  const [activeTab, setActiveTab] =
    useState("Website Designing");

  return (
    <section className="bg-[#f8fafc] overflow-hidden">

      {/* RECOGNITION */}
      <div
        className="
          py-16
          sm:py-20
          lg:py-24
          px-4
          sm:px-6
          lg:px-20
          relative
        "
      >

        {/* BG GLOW */}
        <div
          className="
            absolute
            top-0
            left-0
            w-72
            h-72
            sm:w-96
            sm:h-96
            bg-red-500/10
            blur-[120px]
            rounded-full
          "
        ></div>

        {/* HEADING */}
        <div className="text-center relative z-10">

          <span
            className="
              text-red-500
              uppercase
              tracking-[4px]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Our Global Recognition
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              mt-5
              leading-tight
            "
          >
            We Are Trailblazers <br />
            In The IT Industry
          </h2>

          <p
            className="
              text-gray-600
              text-base
              sm:text-lg
              max-w-3xl
              mx-auto
              mt-6
              leading-relaxed
            "
          >
            Delivering innovative digital experiences
            with world-class technologies and
            customer-focused solutions.
          </p>
        </div>

        {/* RECOGNITION CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-8
            mt-14
            lg:mt-20
            relative
            z-10
          "
        >

          {[
            "Clutch",
            "Trustpilot",
            "GoodFirms",
            "Google",
          ].map((item, i) => (

            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white/80
                backdrop-blur-xl
                p-8
                sm:p-10
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  bg-red-500/10
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              ></div>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-gray-900
                  mb-4
                "
              >
                {item}
              </h3>

              <p
                className="
                  text-yellow-500
                  text-2xl
                  tracking-wider
                "
              >
                ★★★★★
              </p>

              <p
                className="
                  text-gray-600
                  mt-4
                "
              >
                Trusted by global businesses.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div
        className="
          relative
          py-16
          sm:py-20
          lg:py-24
          px-4
          sm:px-6
          lg:px-20
          overflow-hidden
        "
      >

        {/* GRADIENT BG */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-red-50
            to-orange-50
          "
        ></div>

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <span
              className="
                uppercase
                tracking-[4px]
                text-xs
                sm:text-sm
                font-semibold
                text-red-500
              "
            >
              Create A Legacy Of Success
            </span>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                text-gray-900
                leading-tight
                mt-5
                mb-8
              "
            >
              Strengthen Your Business With Webibm
            </h2>

            <p
              className="
                text-gray-600
                text-base
                sm:text-lg
                leading-relaxed
                max-w-2xl
                mx-auto
                lg:mx-0
              "
            >
              Empower your business with modern
              digital strategies, innovative technologies,
              and scalable solutions that drive
              real growth and long-term success.
            </p>

            {/* BUTTON */}
           <NavLink to="/contact" className="mt-10">
             <button
              className="
                mt-10
                flex
                items-center
                justify-center
                gap-3
                bg-red-500
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-red-600
                hover:gap-5
                transition-all
                duration-300
                shadow-lg
                w-full
                sm:w-fit
                mx-auto
                lg:mx-0
              "
            >

              Get A Quote

              <ArrowRight size={20} />
            </button>
           </NavLink>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-red-200/40
                blur-3xl
                rounded-full
              "
            ></div>

            <img
              src={laptopImg}
              alt="laptop"
              className="
                relative
                z-10
                w-full
                max-w-[600px]
                mx-auto
                drop-shadow-2xl
                rounded-3xl
              "
            />
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div
        className="
          py-16
          sm:py-20
          lg:py-24
          px-4
          sm:px-6
          lg:px-20
          relative
        "
      >

        {/* HEADING */}
        <div className="text-center">

          <span
            className="
              text-red-500
              uppercase
              tracking-[4px]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Building Brands Faster Than AI
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              mt-5
              leading-tight
            "
          >
            Technologies We Work With
          </h2>

          <p
            className="
              text-gray-600
              text-base
              sm:text-lg
              max-w-3xl
              mx-auto
              mt-6
              leading-relaxed
            "
          >
            Leveraging modern frameworks,
            tools, and technologies to deliver
            powerful digital products.
          </p>
        </div>

        {/* TABS */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
            mt-12
            lg:mt-14
          "
        >

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5
                sm:px-6
                py-3
                rounded-full
                transition-all
                duration-300
                border
                text-sm
                sm:text-base
                ${
                  activeTab === tab
                    ? "bg-red-500 border-red-500 text-white shadow-lg"
                    : "border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-500"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TECH GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-5
            sm:gap-6
            lg:gap-8
            mt-14
            lg:mt-20
          "
        >

          {techData[activeTab].map((tech, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                sm:p-8
                lg:p-10
                flex
                flex-col
                items-center
                justify-center
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-red-500/40
                transition-all
                duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  bg-red-500/10
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              ></div>

              <img
                src={tech.img}
                alt={tech.name}
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  object-contain
                  mb-6
                  relative
                  z-10
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />

              <p
                className="
                  text-gray-900
                  text-sm
                  sm:text-lg
                  font-medium
                  relative
                  z-10
                  text-center
                "
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recognition;
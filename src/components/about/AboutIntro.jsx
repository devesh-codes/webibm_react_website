import Industries from "../home/Industries";
import Services from "../home/Services";
import WhyChooseUs from "../home/WhyChooseUs";

import visionImg from "../../assets/vision.webp";
import growthImg from "../../assets/growth.webp";
import aboutImg from "../../assets/logo-abt.webp";
import Blogs from "../home/Blogs";
import Faq from "../home/Faq";

function AboutIntro() {
  return (
    <>

      <section className="bg-gray-100 py-20 px-6 md:px-20 relative overflow-hidden">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="about"
              className="
                w-full
                max-w-[500px]
                mx-auto
                rounded-3xl
                shadow-2xl
                object-cover
              "
            />

            
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="
              text-red-500
              font-semibold
              uppercase
              tracking-widest
            ">
              About WebIBM
            </span>

            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight 
              mt-4
              mb-8
              text-gray-900
            ">
              Digital Marketing And Website Designing Company
            </h1>

            <div className="
              text-gray-600
              space-y-6
              text-lg
              leading-relaxed
            ">

              <p>
                <span className="text-red-500 font-semibold">
                  WebIBM
                </span>{" "}
                transforms ideas into powerful digital experiences that help
                businesses build a strong online presence and achieve sustainable growth.
              </p>

              <p>
                We create responsive, high-performance websites and applications
                designed to improve user engagement, strengthen brand credibility,
                and deliver seamless experiences across all devices.
              </p>

              <p>
                From website designing and development to SEO, eCommerce solutions,
                and digital marketing, our team delivers innovative strategies tailored
                to modern business needs.
              </p>

              <p>
                Our goal is simple — help brands attract more customers, increase
                visibility, and grow consistently in the digital world.
              </p>

            </div>
          </div>
        </div>

        {/* BACKGROUND */}
        <div className="
          absolute
          inset-0
          opacity-10
          bg-[url('./world-map.png')]
          bg-center
          bg-no-repeat
          bg-contain
          pointer-events-none
        "></div>

        {/* VISION + MISSION */}
        {/* VISION + MISSION */}
<div className="grid md:grid-cols-2 gap-8 mt-20">

  {/* VISION CARD */}
  <div
    className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      border
      border-gray-100
      hover:shadow-2xl
      transition-all
      duration-300
    "
  >

    <div className="flex items-center gap-5 mb-6">

      <div className="
        bg-red-100
        p-4
        rounded-2xl
      ">
        <img
          src={visionImg}
          alt="vision"
          className="w-14 h-14 object-contain"
        />
      </div>

      <div>
        <h3 className="
          text-2xl
          font-bold
          text-gray-900
        ">
          Our Vision
        </h3>

        <p className="text-gray-500 text-sm">
          Future-focused digital innovation
        </p>
      </div>
    </div>

    <ul className="
      space-y-4
      text-gray-600
      leading-relaxed
    ">
      <li>✔ Build strong and impactful digital brands.</li>
      <li>✔ Deliver scalable solutions for business growth.</li>
      <li>✔ Create meaningful user experiences online.</li>
      <li>✔ Help brands connect with the right audience.</li>
      <li>✔ Make digital growth simple and result-driven.</li>
    </ul>
  </div>

  {/* MISSION CARD */}
  <div
    className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      border
      border-gray-100
      hover:shadow-2xl
      transition-all
      duration-300
    "
  >

    <div className="flex items-center gap-5 mb-6">

      <div className="
        bg-green-100
        p-4
        rounded-2xl
      ">
        <img
          src={growthImg}
          alt="mission"
          className="w-14 h-14 object-contain"
        />
      </div>

      <div>
        <h3 className="
          text-2xl
          font-bold
          text-gray-900
        ">
          Our Mission
        </h3>

        <p className="text-gray-500 text-sm">
          Helping businesses grow digitally
        </p>
      </div>
    </div>

    <ul className="
      space-y-4
      text-gray-600
      leading-relaxed
    ">
      <li>✔ Deliver digital solutions with real results.</li>
      <li>✔ Improve visibility and customer engagement.</li>
      <li>✔ Build strategies focused on conversions.</li>
      <li>✔ Maintain long-term business growth support.</li>
      <li>✔ Provide reliable and innovative digital services.</li>
    </ul>
  </div>

</div>
      </section>

      <WhyChooseUs />
      <Industries />
      <Blogs/>
      <Faq/>
    </>
  );
}

export default AboutIntro;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chooseImg from "../../assets/choose.webp"

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 Heading animation
      gsap.fromTo(
        ".why-heading > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 🔥 Left side animation
      gsap.fromTo(
        ".why-left .why-item",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 🔥 Right side animation
      gsap.fromTo(
        ".why-right .why-item",
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 🌊 Center image scale + parallax
      gsap.fromTo(
        ".why-image",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(".why-image", {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    // 🔥 Fix Lenis sync
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-20 px-6 md:px-20"
    >
      
      {/* Heading */}
      <div className="why-heading text-center mb-16">
        <p className="text-red-500 text-sm tracking-wide mb-2">
          WHY CHOOSE US?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          How WEBIBM Helps You?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT */}
        <div className="why-left space-y-12">
          
          {["Digital Experience", "Integrated Solutions", "Methodology"].map(
            (title, i) => (
              <div key={i} className="why-item relative">
                <span className="absolute text-7xl font-bold text-gray-200 opacity-20 -top-6 -left-4 z-0">
                  {`0${i + 1}`}
                </span>
                <div className="relative z-10">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">
                    High-quality solutions for your business growth.
                  </p>
                </div>
              </div>
            )
          )}

        </div>

        {/* CENTER */}
        <div className="flex justify-center why-image">
          <div className="w-[350px] h-[250px]  rounded-full flex items-center justify-center">
            <span className="text-gray-400"><img src={chooseImg} alt="" /></span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="why-right space-y-12">
          
          {["Fast And Reliable", "Better Branding", "Increase Visibility"].map(
            (title, i) => (
              <div key={i} className="why-item relative">
                <span className="absolute text-7xl font-bold text-gray-200 opacity-20 -top-6 -left-4 z-0">
                  {`0${i + 4}`}
                </span>
                <div className="relative z-10">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">
                    Smart strategies to grow your business efficiently.
                  </p>
                </div>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
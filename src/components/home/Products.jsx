import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesImg from "../../assets/services.webp"


// ✅ Register plugin
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const items = [
    "CRM",
    "HRMS",
    "Inventory",
    "ERP",
    "EDU",
    "Fleet",
    "Medical",
  ];

  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");

      // 🔥 Section heading animation
      gsap.fromTo(
        ".products-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 🔥 Cards animation (stagger)
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 🌊 Parallax for image
      gsap.to(".products-image", {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    // 🔥 Important for Lenis sync
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      
      {/* Heading */}
      <h2 className="products-heading text-center text-3xl md:text-4xl font-bold mb-16">
        Crafting Softwares For Tomorrow's Solutions
      </h2>

      <div className="flex items-center gap-6">
        
        {/* 🔹 Left Image */}
        <div className="products-image hidden md:flex w-[500px] h-[300px]  rounded-xl items-center justify-center">
          <span className="text-gray-500"><img src={servicesImg} alt="" /></span>
        </div>

        {/* 🔹 Cards */}
        <div className="flex gap-3 flex-1 h-[300px]">
          
          {items.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className={`product-card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
                ${
                  isActive
                    ? "flex-[3] bg-white text-black"
                    : "flex-[0.6] bg-zinc-800 text-white"
                }`}
              >
                
                {/* Expanded */}
                {isActive ? (
                  <div className="h-full flex flex-col justify-center items-center text-center p-6">
                    
                    <h3 className="text-xl font-semibold mb-3 text-red-500">
                      WEBIBM {item}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      Smart business solution to manage and scale efficiently.
                    </p>

                    <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
                      Let’s Talk
                    </button>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="rotate-[-90deg] text-sm tracking-wide font-medium">
                      WEBIBM {item}
                    </span>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Products;
import { useEffect, useRef } from "react";
import logo1 from "../../assets/clients/logo-1.webp"
import logo2 from "../../assets/clients/logo-2.webp"
import logo3 from "../../assets/clients/logo-3.webp"
import logo4 from "../../assets/clients/logo-4.webp"
import logo5 from "../../assets/clients/logo-5.webp"
import logo6 from "../../assets/clients/logo-6.webp"
import logo7 from "../../assets/clients/logo-7.jpeg"
import logo8 from "../../assets/clients/logo-8.webp"
import logo9 from "../../assets/clients/logo-9.webp"
import logo10 from "../../assets/clients/logo-10.png"
import logo11 from "../../assets/clients/logo-11.png"
import logo12 from "../../assets/clients/logo-12.png"
import logo13 from "../../assets/clients/logo-13.webp"
import logo14 from "../../assets/clients/logo-14.webp"




function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
  },[])

  // 🔥 Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += 0.5; // speed
      scrollContainer.scrollLeft = scrollAmount;

      // loop
      if (
        scrollAmount >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-20 ">
      
      {/* 🔹 CLIENTS */}
      <div className="text-center mb-16">
        <p className="text-red-500 text-xl mb-2">
          A LIST OF
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Our Trusted Clients
        </h2>

        {/* Scrolling Logos */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden whitespace-nowrap "
        >
          <div className="flex gap-12">
            
            {/* Duplicate logos for infinite scroll */}
            {[
              logo1,
              logo2,
              logo4,
              logo5,
              logo6,
              logo3,
              logo7,
            ].concat([
              logo8,
              logo9,
              logo10,
              logo11,
              logo12,
              logo13,
              logo14,
            ]).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="client"
                className="h-12 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}

          </div>
        </div>
      </div>

      {/* 🔹 TESTIMONIALS */}
      <div className="text-center mb-20 hidden sm:block">
        <p className="text-red-500 text-xl mb-2 ">
          TESTIMONIALS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Clients Say About Us?
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 lg:grid gap-8 hidden sm:block ">
        
        {/* Card */}
        {[
          {
            text: "We got our company's website revamped through WEBIBM. They understood our requirements perfectly.",
            name: "Fatima Rangraiz",
          },
          {
            text: "The team delivered a creative website and took care of our vision. Amazing experience!",
            name: "Shivansh Dixit",
          },
          {
            text: "They built a user-friendly application with great design and functionality.",
            name: "Anuj Kumar",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-zinc-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-600 text-sm mb-6">
              "{item.text}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <span className="font-semibold">{item.name}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;
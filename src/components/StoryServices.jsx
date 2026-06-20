import { useEffect, useRef, useState } from "react";

export default function ArchScroll() {

  const [portfolio, setPortfolio] =
    useState([]);

  const scrollRef = useRef(null);

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | FETCH PORTFOLIO
  |--------------------------------------------------------------------------
  */

  const fetchPortfolio = async () => {

    try {

      const response = await fetch(
        `${API}/portfolio`
      );

      const result =
        await response.json();

      if (result.status) {

        setPortfolio(
          result.data.slice(0, 6)
        );
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

    fetchPortfolio();

  }, []);

  /*
  |--------------------------------------------------------------------------
  | AUTO SCROLL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const container =
      scrollRef.current;

    if (!container) return;

    let scrollAmount = 0;

    const autoScroll = () => {

      scrollAmount += 1;

      container.scrollLeft =
        scrollAmount;

      // LOOP
      if (
        scrollAmount >=
        container.scrollWidth / 2
      ) {

        scrollAmount = 0;
      }
    };

    const interval =
      setInterval(autoScroll, 20);

    return () =>
      clearInterval(interval);

  }, [portfolio]);

  return (

    <section className="
      bg-[#F7F7F7]
      py-20
      overflow-hidden
    ">

      {/* HEADING */}
      <div className="
        text-center
        mb-14
        px-5
      ">

        <span className="
          text-red-500
          uppercase
          tracking-[4px]
          text-xs
          font-semibold
        ">
          Our Portfolio
        </span>

        <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
          mt-4
        ">
          Trusted By Modern Brands
        </h2>

      </div>

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        className="
          flex
          overflow-hidden
          whitespace-nowrap
          px-5
        "
      >

        <div className="
          flex
          gap-6
        ">

          {[...portfolio, ...portfolio].map(
            (item, index) => (

              <div
                key={index}
                className="
                  min-w-[280px]
                  sm:min-w-[320px]
                  bg-[#111111]
                  rounded-2xl
                  overflow-hidden
                  border
                  border-white/10
                  hover:border-red-500/40
                  transition-all
                  duration-300
                  group
                  flex-shrink-0
                "
              >

                {/* IMAGE */}
                <div className="
                  h-[200px]
                  overflow-hidden
                ">

                  <img
                    src={`${API}/uploads/portfolio/${item.image}`}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-all
                      duration-500
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="
                  p-5
                ">

                  <h3 className="
                    text-lg
                    font-semibold
                    text-white
                    mb-3
                    line-clamp-1
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-gray-400
                    text-sm
                    leading-6
                    line-clamp-3
                    mb-4
                  ">
                    {item.description}
                  </p>

                  <button className="
                    text-red-500
                    text-sm
                    font-medium
                    hover:text-red-400
                    transition
                  ">
                    View Project →
                  </button>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}
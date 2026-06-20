
import { useEffect, useState } from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";

function Portfolio() {

  const [works, setWorks] = useState([]);

  const API =
    "https://inbizmart.in/api";




  const fetchPortfolio = async () => {

    try {

      const response = await fetch(
        `${API}/portfolio`
      );

      const result = await response.json();

      console.log(result);

      if (result.status) {

        setWorks(result.data);
      }

    } catch (error) {

      console.log(error);
    }
  };




  useEffect(() => {

    fetchPortfolio();

  }, []);




  return (
    <>
      <PortfolioHero />

      <section className="bg-gray-900 text-white py-20 px-6 md:px-20">

        <div className="grid md:grid-cols-2 gap-10">

          {works.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl"
            >

              {/* Main Image */}

              <img
                src={`${API}/uploads/portfolio/${item.image}`}
                alt={item.title}
                className="
                  w-full
                  h-[300px]
                  object-cover
                  
                  transition
                  duration-500
                "
              />



              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/60
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex
                  flex-col
                  justify-end
                  p-6
                "
              >

                <p className="text-sm text-red-400 mb-1">

                  {item.company_name}

                </p>

                <h3 className="text-xl font-semibold mb-2">

                  {item.title}

                </h3>



                {/* Website Button */}

                <a
                  href={item.website_link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    bg-red-500
                    hover:bg-red-600
                    px-4
                    py-2
                    rounded-md
                    text-sm
                    w-fit
                  "
                >
                  Visit Website
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Portfolio;


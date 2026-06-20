import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicesPageHero from "../components/services/ServicesPageHero";
import StoryServices from "../components/StoryServices.jsx";

function SubcategoryPage() {

  const { categorySlug, subcategorySlug } =
    useParams();

  const [subcategory, setSubcategory] =
    useState(null);

  const [category, setCategory] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | FETCH DATA
  |--------------------------------------------------------------------------
  */

  const fetchData = async () => {

    try {

      const response = await fetch(
        `${API}/categories`
      );

      const result =
        await response.json();

      if (result.status) {

        const matchedCategory =
          result.data.find(
            (item) =>
              item.slug ===
              categorySlug
          );

        if (matchedCategory) {

          setCategory(matchedCategory);

          const matchedSubcategory =
            matchedCategory.subcategories.find(
              (sub) =>
                sub.slug ===
                subcategorySlug
            );

          setSubcategory(
            matchedSubcategory
          );
        }
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  /*
  |--------------------------------------------------------------------------
  | USE EFFECT
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchData();

  }, [categorySlug, subcategorySlug]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-4xl
          font-bold
        "
      >

        Loading...

      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!subcategory) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-4xl
          font-bold
          text-red-500
        "
      >

        Service Not Found

      </div>
    );
  }

  return (

    <>

      {/* HERO */}

      <ServicesPageHero
        title={category.title}
        breadcrumb={category.title}
      />

      {/* MAIN SECTION */}

      <section
        className="
          bg-[#f5f5f5]
          py-24
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
          "
        >

          {/* TOP SECTION */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
              mb-24
            "
          >

            {/* LEFT CONTENT */}

            <div>

              <p
                className="
                  uppercase
                  tracking-[3px]
                  text-green-500
                  text-sm
                  font-bold
                  mb-4
                "
              >

                BUILD BUSINESS WITH
                CUTTING EDGE TECHNOLOGY

              </p>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  leading-tight
                  text-[#111]
                  mb-6
                "
              >

                {subcategory.title}

              </h1>

              <div
                className="
                  text-gray-600
                  leading-8
                  text-lg
                  space-y-5
                "
              >

               

                  {
                    subcategory.short_description
                  }

               

                <p>

                  We provide premium
                  development solutions
                  using modern
                  technologies and
                  scalable architecture
                  for business growth.

                </p>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div>

              <img
                src={`${API}/uploads/subcategory/main/${subcategory.main_image}`}
                alt={subcategory.title}
                className="
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

          {/* SECOND SECTION */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
            "
          >

            {/* IMAGE */}

            <div>

              <img
                src={`${API}/uploads/subcategory/icons/${subcategory.main_image}`}
                alt={subcategory.title}
                className="
                  w-full
                  object-cover
                "
              />

            </div>

            {/* SERVICES */}

            <div>

              <p
                className="
                  uppercase
                  tracking-[3px]
                  text-green-500
                  text-sm
                  font-bold
                  mb-4
                "
              >

                BOOST UP YOUR BUSINESS

              </p>

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  text-[#111]
                  leading-tight
                  mb-10
                "
              >

                Our Major Levels Of 
                {subcategory.title}

              </h2>

              {/* FEATURES */}

              <div className="space-y-8">

                {/* ITEM */}

                <div
                  className="
                    flex
                    gap-5
                  "
                >

                  <div
                    className="
                      mt-2
                      w-4
                      h-4
                      rounded-full
                      bg-yellow-400
                      flex-shrink-0
                    "
                  ></div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#111]
                        mb-2
                      "
                    >

                      Confidentiality
                      Is Our Forte

                    </h3>

                    <p
                      className="
                        text-gray-600
                        leading-7
                      "
                    >

                      We ensure complete
                      security and
                      confidentiality
                      for all client
                      projects and data.

                    </p>

                  </div>

                </div>

                {/* ITEM */}

                <div
                  className="
                    flex
                    gap-5
                  "
                >

                  <div
                    className="
                      mt-2
                      w-4
                      h-4
                      rounded-full
                      bg-yellow-400
                      flex-shrink-0
                    "
                  ></div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#111]
                        mb-2
                      "
                    >

                      Optimized
                      Performance

                    </h3>

                    <p
                      className="
                        text-gray-600
                        leading-7
                      "
                    >

                      Fast loading,
                      scalable and
                      performance-driven
                      solutions for
                      modern business.

                    </p>

                  </div>

                </div>

                {/* ITEM */}

                <div
                  className="
                    flex
                    gap-5
                  "
                >

                  <div
                    className="
                      mt-2
                      w-4
                      h-4
                      rounded-full
                      bg-yellow-400
                      flex-shrink-0
                    "
                  ></div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#111]
                        mb-2
                      "
                    >

                      Custom Architecture

                    </h3>

                    <p
                      className="
                        text-gray-600
                        leading-7
                      "
                    >

                        {subcategory.title}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      

    </>
  );
}

export default SubcategoryPage;
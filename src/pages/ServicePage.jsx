import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ServicesPageHero from "../components/services/ServicesPageHero";

function ServicePage() {

  const { categorySlug } = useParams();

  const [category, setCategory] = useState(null);

  const [loading, setLoading] = useState(true);

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | FETCH CATEGORY
  |--------------------------------------------------------------------------
  */

  const fetchCategory = async () => {

    try {

      const response = await fetch(
        `${API}/categories`
      );

      const result = await response.json();

      if (result.status) {

        const matchedCategory =
          result.data.find(
            (item) =>
              item.slug === categorySlug
          );

        setCategory(matchedCategory);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchCategory();

  }, [categorySlug]);

  if (loading) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-3xl
          font-bold
        "
      >
        Loading...
      </div>
    );
  }

  if (!category) {

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
      <ServicesPageHero
        title={category.title}
        breadcrumb={category.title}
      />

      <section className="bg-[#f7f7f7] min-h-screen pt-32 pb-20">

        {/* HERO SECTION */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-center
            mb-28
          "
        >

          {/* LEFT CONTENT */}

          <div>

            <p
              className="
                text-red-500
                uppercase
                tracking-[3px]
                font-semibold
                mb-4
              "
            >
              Our Services
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                text-[#111]
                mb-6
              "
            >
              {category.title}
            </h1>

            <p
              className="
                text-gray-600
                text-lg
                leading-8
                mb-8
              "
            >
              {category.description}
            </p>

            <NavLink
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                bg-red-500
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-red-600
                transition
              "
            >
              Get Started
            </NavLink>

          </div>

          {/* RIGHT IMAGE */}

          <div>

            <img
              src={`${API}/uploads/category/main/${category.main_image}`}
              alt={category.title}
              className="
                w-full
                object-cover
              "
            />

          </div>

        </div>

        {/* SERVICES SECTION */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
          "
        >

          <div className="text-center mb-16">

            <p
              className="
                text-red-500
                uppercase
                tracking-[3px]
                font-semibold
                mb-4
              "
            >
              What We Offer
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                text-[#111]
              "
            >
              What Services Are Offered?
            </h2>

          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {category.subcategories &&
              category.subcategories.map((sub) => (

                <NavLink
                  key={sub.id}
                  to={`/services/${category.slug}/${sub.slug}`}
                  className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    border
                    border-gray-100
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    group
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-red-100
                      flex
                      items-center
                      justify-center
                      mb-6
                      overflow-hidden
                    "
                  >

                    <img
                      src={`${API}/uploads/subcategory/icons/${sub.icon_image}`}
                      alt={sub.title}
                      className="
                        w-10
                        h-10
                        object-contain
                      "
                    />

                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-[#111]
                      mb-4
                      group-hover:text-red-500
                      transition
                    "
                  >
                    {sub.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-gray-600
                      leading-7
                      line-clamp-4
                    "
                  >
                    {sub.short_description}
                  </p>

                  {/* BUTTON */}

                  <div className="mt-6">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-red-500
                        font-semibold
                      "
                    >
                      Read More →
                    </span>

                  </div>

                </NavLink>

              ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default ServicePage;
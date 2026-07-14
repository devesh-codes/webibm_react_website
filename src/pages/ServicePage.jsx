console.log("ServicePage");
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ServicesPageHero from "../components/services/ServicesPageHero";

function ServicePage() {

  const { slug  } = useParams();
const categorySlug = slug;
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

      <section className="bg-white">

  {/* HERO */}

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
          Premium Digital Service
        </span>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mb-6">
          {category.title}
        </h1>

        <p className="text-xl text-gray-500 leading-9 mb-10">
          {category.meta_description}
        </p>

        <NavLink
          to="/contact-us"
          className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full transition"
        >
          Start Your Project →
        </NavLink>

      </div>

      {/* IMAGE */}

      <div className="relative">

        <div className="absolute -top-8 -right-8 w-full h-full  rounded-[40px]"></div>

        <img
          src={`${API}/uploads/category/main/${category.main_image}`}
          alt={category.title}
          className="relative rounded-[40px] shadow-2xl object-cover w-full h-[550px]"
        />

      </div>

    </div>

  </div>

  {/* STATS */}

  <div className="max-w-6xl mx-auto px-6 -mt-6">

    <div className="grid md:grid-cols-4 gap-6">

      {[
        ["10+", "Years Experience"],
        ["250+", "Projects"],
        ["98%", "Client Satisfaction"],
        ["24/7", "Support"],
      ].map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
        >

          <h2 className="text-4xl font-black text-red-500">
            {item[0]}
          </h2>

          <p className="text-gray-500 mt-2">
            {item[1]}
          </p>

        </div>

      ))}

    </div>

  </div>

  {/* DESCRIPTION */}

  <div className="max-w-5xl mx-auto px-6 py-24">

    <h2 className="text-4xl font-bold mb-12">
      About This Service
    </h2>

    <div
      className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: category.description,
        }}
    />

  </div>

  {/* SERVICES */}

  <div className="max-w-7xl mx-auto px-6 pb-24">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-red-500 font-semibold">
        Included Services
      </span>

      <h2 className="text-5xl font-black mt-4">
        Everything Included
      </h2>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {category.subcategories?.map((sub) => (

        <NavLink
          key={sub.id}
          to={`/services/${category.slug}/${sub.slug}`}
          className="group bg-white rounded-[30px] border border-gray-100 hover:border-red-500 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
        >

          <div className="p-8">

            <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center mb-8 group-hover:scale-110 transition">

              <img
                src={`${API}/uploads/subcategory/icons/${sub.icon_image}`}
                alt={sub.title}
                className="w-12 h-12 object-contain"
              />

            </div>

            <h3 className="text-2xl font-bold mb-5 group-hover:text-red-500 transition">

              {sub.title}

            </h3>

            <p className="text-gray-600 leading-8 line-clamp-4">

              {sub.short_description}

            </p>

            <div className="mt-8 flex items-center justify-between">

              <span className="font-semibold text-red-500">

                Learn More →

              </span>

              <div className="w-10 h-10 rounded-full bg-red-50 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center transition">

                →

              </div>

            </div>

          </div>

        </NavLink>

      ))}

    </div>

  </div>

  {/* CTA */}

  <div className="bg-[#111] py-24">

    <div className="max-w-5xl mx-auto text-center px-6">

      <h2 className="text-white text-5xl font-black mb-6">

        Ready to Grow Your Business?

      </h2>

      <p className="text-gray-400 text-lg mb-10">

        Let's build a powerful digital presence together.

      </p>

      <NavLink
        to="/contact-us"
        className="inline-flex bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-full font-semibold transition"
      >
        Get Free Consultation
      </NavLink>

    </div>

  </div>

</section>
    </>
  );
}

export default ServicePage;
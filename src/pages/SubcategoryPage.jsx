console.log("SubcategoryPage");
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicesPageHero from "../components/services/ServicesPageHero";
import { NavLink } from "react-router-dom";
import Blogs from "../components/home/Blogs";
import Faq from "../components/home/Faq";
function SubcategoryPage() {

  // const {  subcategorySlug } =
  //   useParams();
  const { slug } = useParams();

const subcategorySlug = slug;
  const [subcategory, setSubcategory] =
    useState(null);

  const [category, setCategory] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const API =
    "https://inbizmart.in/api";

  const fetchData = async () => {
  try {
    const response = await fetch(`${API}/categories`);
    const result = await response.json();

    if (result.status) {
      let matchedCategory = null;
      let matchedSubcategory = null;

      for (const category of result.data) {
        const sub = category.subcategories.find(
          (item) => item.slug === subcategorySlug
        );

        if (sub) {
          matchedCategory = category;
          matchedSubcategory = sub;
          break;
        }
      }

      setCategory(matchedCategory);
      setSubcategory(matchedSubcategory);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

 useEffect(() => {
  fetchData();
}, [subcategorySlug]);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  if (!subcategory) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">
        Service Not Found
      </div>
    );
  }

  const benefits = [
    "Experienced Professionals",
    "Scalable Architecture",
    "Modern Technologies",
    "Dedicated Support",
    "High Security",
    "Fast Delivery",
  ];

  const process = [
    "Requirement Analysis",
    "Planning & Strategy",
    "Design & Development",
    "Testing & QA",
    "Deployment",
    "Maintenance & Support",
  ];

  return (
    <>
      <ServicesPageHero
        title={subcategory.title}
        breadcrumb={subcategory.title}
      />

      {/* OVERVIEW */}

      <section className="bg-gradient-to-br from-[#f8fafc] via-white to-[#fef2f2] py-24">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-flex px-5 py-2 rounded-full bg-red-100 text-red-500 text-sm font-semibold uppercase tracking-wider">
          Professional Solution
        </span>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-6 text-[#111]">
          {subcategory.title}
        </h1>

        <p className="text-xl text-gray-500 mt-8 leading-9">
          {subcategory.short_description}
        </p>

        <div className="flex flex-wrap gap-5 mt-10">
            <NavLink
            to="/contact-us"
            >

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition">
            Get Free Consultation
          </button>
            </NavLink>

          <button className="border border-gray-300 hover:border-green-600 px-8 py-4 rounded-full font-semibold transition">
            View Portfolio
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative">

        <div className="absolute -top-6 -right-6 w-full h-full rounded-[40px] "></div>

        <img
          src={`${API}/uploads/subcategory/main/${subcategory.main_image}`}
          alt={subcategory.title}
          className="relative rounded-[40px] shadow-2xl object-cover w-full h-[550px]"
        />

      </div>

    </div>

  </div>

</section>

      {/* BENEFITS */}

      <section className="py-24 bg-[#f7f8fa]">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black text-[#111] mb-4">
              Key Benefits
            </h2>

            <p className="text-gray-600">
              Why businesses choose our services
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >

                <div className="text-green-600 text-3xl font-black mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#111]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="py-24">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-black mb-12">
      Service Overview
    </h2>

    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{
        __html: subcategory.long_description || "",
      }}
    />

  </div>

</section>

      {/* PROCESS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black text-[#111] mb-4">
              Our Working Process
            </h2>

            <p className="text-gray-600">
              Step-by-step execution strategy
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {process.map((step, index) => (

              <div
                key={index}
                className="
                  border
                  border-gray-200
                  rounded-2xl
                  p-8
                  text-center
                "
              >

                <div className="text-5xl font-black text-green-600 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#111]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      
            <Blogs/>
            <Faq/>
            
    </>
  );
}

export default SubcategoryPage;


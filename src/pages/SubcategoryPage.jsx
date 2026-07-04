
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicesPageHero from "../components/services/ServicesPageHero";

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

  const fetchData = async () => {

    try {

      const response =
        await fetch(`${API}/categories`);

      const result =
        await response.json();

      if (result.status) {

        const matchedCategory =
          result.data.find(
            item =>
              item.slug === categorySlug
          );

        if (matchedCategory) {

          setCategory(matchedCategory);

          const matchedSubcategory =
            matchedCategory.subcategories.find(
              sub =>
                sub.slug === subcategorySlug
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

  useEffect(() => {

    fetchData();

  }, [categorySlug, subcategorySlug]);

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

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-green-600 font-semibold uppercase tracking-[3px]">
                Professional Services
              </span>

              <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-[#111]">
                {subcategory.title}
              </h1>

              <p className="text-lg leading-8 text-gray-600 mb-6">
                {subcategory.short_description}
              </p>

             <div
  className="text-gray-600 leading-8"
  dangerouslySetInnerHTML={{
    __html: subcategory.long_description || ""
  }}
/>

            </div>

            <div>

              <img
                src={`${API}/uploads/subcategory/main/${subcategory.main_image}`}
                alt={subcategory.title}
                className="w-full rounded-2xl shadow-xl"
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

      {/* WHY CHOOSE US */}

     

      {/* CTA */}

            
    </>
  );
}

export default SubcategoryPage;


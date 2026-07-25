import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Footer() {

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [categories, setCategories] =
    useState([]);

  const [locations, setLocations] =
    useState([]);

  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  */

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | SLUGIFY (location has no slug field in API, so generate one from name)
  |--------------------------------------------------------------------------
  */

  const slugify = (text) => {

    if (!text) return "";

    return text
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  /*
  |--------------------------------------------------------------------------
  | FETCH CATEGORIES
  |--------------------------------------------------------------------------
  */

  const fetchCategories = async () => {

    try {

      const response = await fetch(
        `${API}/categories`
      );

      const result =
        await response.json();

      if (result.status) {

        setCategories(result.data);
      }

    } catch (error) {

      console.log(error);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FETCH LOCATIONS
  |--------------------------------------------------------------------------
  */

  const fetchLocations = async () => {

    try {

      const response = await fetch(
        `${API}/locations`
      );

      const result =
        await response.json();

      console.log("Locations API response:", result);

      if (result.status) {

        // Only keep the first 20 locations
        setLocations(result.data.slice(0, 20));
      }

    } catch (error) {

      console.log("Locations fetch error:", error);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchCategories();
    fetchLocations();

  }, []);

  return (

    <footer className="bg-red-900 text-white pt-16 pb-6 px-6 md:px-20 relative overflow-hidden">

      {/* 🔹 Top Content */}
      <div className="grid md:grid-cols-5 gap-10 mb-10">

        {/* LEFT SECTION */}
        <div className="md:col-span-2">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Work Creatively <br /> Together
          </h2>

          <p className="text-sm text-gray-200 mb-6 max-w-md">
            Be the next big brand with WEBIBM!
            Grow your business online and
            come out real. Not sure where to start?
            We are here to guide you.
          </p>

          <h4 className="font-semibold mb-2">
            Let’s Connect
          </h4>

          <p className="text-sm text-gray-200">
            +91-9971515539 ,
            +91-011-35773572
          </p>

          <h4 className="font-semibold mb-2 mt-4">
            Email
          </h4>

          <p className="text-sm text-gray-200">
            info@webibm.com
          </p>

          <p className="text-sm text-gray-200">
            support@webibm.com
          </p>

        </div>

        {/* NAVIGATION */}
        <div>

          <h4 className="font-semibold mb-4">
            Navigation
          </h4>

          <ul className="space-y-2 text-sm text-gray-200">

            <li>
              <NavLink
                to="/about-us"
                className="hover:text-yellow-400 transition"
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-yellow-400 transition"
                to="/payments"
              >
                Pay Now
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-yellow-400 transition"
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-yellow-400 transition"
                to="/services"
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-yellow-400 transition"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>

          </ul>

        </div>

        {/* SERVICES */}
        <div>

          <h4 className="font-semibold mb-4">
            Services
          </h4>

          <ul className="
            space-y-2
            text-sm
            text-gray-200
          ">

            {categories
  .flatMap((category) =>
    category.subcategories?.map((sub) => ({
      ...sub,
      categorySlug: category.slug,
    })) || []
  )
  .slice(0, 5)
  .map((sub) => (

    <li key={sub.id}>

     <NavLink
  to={`/services/${sub.slug}`}
  className="hover:text-yellow-400 transition"
>
  {sub.title}
</NavLink>

    </li>
  ))
}

          </ul>

        </div>

        {/* SUPPORT */}
        <div>

          <h4 className="font-semibold mb-4">
            Support
          </h4>

          <ul className="
            space-y-2
            text-sm
            text-gray-200
          ">

            <li>
              <NavLink
                to="/privacy-policy"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Privacy Policy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/terms-and-conditions"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Terms and Conditions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/google-partner-in-india"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Google Partner in India
              </NavLink>
            </li>

            

          </ul>

        </div>

        {/* SOCIAL */}
        <div>

          <h4 className="font-semibold mb-4">
            Follow Us:
          </h4>

          <div className="flex gap-3">

            {["F", "I", "L", "X"].map(
              (icon, i) => (

                <div
                  key={i}
                  className="
                    w-10
                    h-10
                    border
                    border-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:bg-white
                    hover:text-blue-900
                    transition
                  "
                >
                  {icon}
                </div>
              )
            )}

          </div>

        </div>

      </div>

      {/* 🔹 We Serve In These Locations */}
      {locations.length > 0 && (

        <div className="
          flex
          flex-wrap
          justify-end
          items-center
          gap-x-2
          gap-y-1
          text-sm
          text-gray-300
          mb-4
        ">

          <span className="font-semibold text-gray-100 mr-1">
            We serve in these locations:
          </span>

          {locations.map((location, index) => (

            <span key={location.id} className="flex items-center gap-2">

              <NavLink
                to={`/locations/${slugify(location.name)}`}
                className="hover:text-yellow-400 transition"
              >
                {location.name}
              </NavLink>

              {index < locations.length - 1 && (
                <span className="text-gray-500">•</span>
              )}

            </span>

          ))}

        </div>

      )}

      {/* 🔹 Bottom */}
      <div className="
        text-center
        text-sm
        text-gray-300
        border-t
        border-white/20
        pt-4
      ">

        Copyright © 2026 WebIBM.
        All Rights Reserved.

      </div>

      

    </footer>
  );
}

export default Footer;
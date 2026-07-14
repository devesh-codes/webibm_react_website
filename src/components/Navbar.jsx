import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.webp";

function Navbar({ logoRef }) {

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [open, setOpen] = useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [categories, setCategories] =
    useState([]);

  const location = useLocation();

  /*
  |--------------------------------------------------------------------------
  | ACTIVE NAV
  |--------------------------------------------------------------------------
  */

  const navClass = ({ isActive }) =>

    isActive
      ? "text-red-500"
      : "hover:text-red-500";

  /*
  |--------------------------------------------------------------------------
  | SERVICES ACTIVE
  |--------------------------------------------------------------------------
  */

  const isServicesActive =
    location.pathname.startsWith(
      "/services"
    );

  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  */

  const API =
    "https://inbizmart.in/api";

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
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchCategories();

  }, []);

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        bg-black/80
        backdrop-blur-xl
        text-white
        z-50
        border-b
        border-white/10
      "
    >

      <div
        className="
          px-6
          md:px-10
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <NavLink to="/">

          <div className="
            bg-white
            p-2
            rounded-2xl
          ">

            <img
              ref={logoRef}
              width={75}
              src={logo}
              alt="logo"
            />

          </div>

        </NavLink>

        {/* DESKTOP MENU */}
        <div className="
          hidden
          lg:flex
          gap-8
          items-center
          relative
        ">

          <NavLink
            to="/"
            end
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className={navClass}
          >
            About Us
          </NavLink>

          {/* SERVICES */}
          <div

            onMouseEnter={() =>
              setOpen(true)
            }

            onMouseLeave={() =>
              setOpen(false)
            }

            className="
              relative
              flex
              items-center
              gap-1
              cursor-pointer
            "
          >

            <NavLink
              to="/services"
              className={`
                flex
                items-center
                gap-1
                ${
                  isServicesActive
                    ? "text-red-500"
                    : "hover:text-red-500"
                }
              `}
            >

              Services

              <ChevronDown
                size={16}
                className={`
                  transition
                  ${
                    open
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </NavLink>

            {/* MEGA MENU */}
            <div
              className={`
                absolute
                left-[-180px]
                top-7
                w-[900px]
                bg-[#0f0f0f]
                border
                border-white/10
                rounded-3xl
                shadow-2xl
                p-8
                grid
                grid-cols-4
                gap-8
                transition-all
                duration-300
                ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }
              `}
            >

              {categories.map(
                (category) => (

                  <div
                    key={category.id}
                  >

                    {/* CATEGORY */}
                    <NavLink
                      to={`/services/${category.slug}`}
                      className="
                        block
                        font-bold
                        mb-4
                        text-white
                        hover:text-red-500
                        transition
                      "
                    >

                      {category.title}

                    </NavLink>

                    {/* SUBCATEGORY */}
                    <div className="
                      space-y-3
                    ">

                      {category.subcategories &&
                        category.subcategories.map(
                          (sub) => (

                            <NavLink
                              key={sub.id}
                              to={`/services/${sub.slug}`}
                              className="
                                block
                                text-sm
                                text-gray-400
                                hover:text-red-500
                                transition
                              "
                            >

                              • {sub.title}

                            </NavLink>
                          )
                        )}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* <NavLink
            to="/blogs"
            className={navClass}
          >
            Blogs
          </NavLink> */}

          <NavLink
            to="/contact-us"
            className={navClass}
          >
            Contact Us
          </NavLink>

        </div>

        {/* RIGHT SIDE */}
        <div className="
          flex
          items-center
          gap-4
        ">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919971515539"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:flex
              items-center
              gap-2
              bg-red-500
              px-5
              py-3
              rounded-full
              hover:bg-red-600
              transition
              font-medium
            "
          >

            <span>
              Let’s Talk
            </span>

            <img
              width="26"
              height="26"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp"
            />

          </a>

          {/* HAMBURGER */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="
              lg:hidden
              w-12
              h-12
              rounded-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              bg-white/5
            "
          >

            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          bg-[#0b0b0b]
          border-t
          border-white/10
          ${
            mobileMenu
              ? "max-h-[1000px] py-6"
              : "max-h-0"
          }
        `}
      >

        <div className="
          px-6
          flex
          flex-col
          gap-5
        ">

          <NavLink
            to="/"
            onClick={() =>
              setMobileMenu(false)
            }
            className="hover:text-red-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={() =>
              setMobileMenu(false)
            }
            className="hover:text-red-500"
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={() =>
              setMobileMenu(false)
            }
            className="hover:text-red-500"
          >
            Services
          </NavLink>

          {/* MOBILE SERVICES */}
          <div className="
            pl-4
            border-l
            border-white/10
            space-y-3
          ">

            {categories.map(
              (category) => (

                <div
                  key={category.id}
                >

                  <NavLink
                    to={`/services/${category.slug}`}
                    onClick={() =>
                      setMobileMenu(
                        false
                      )
                    }
                    className="
                      block
                      text-red-400
                      mb-2
                    "
                  >
                    {category.title}
                  </NavLink>

                  <div className="
                    space-y-2
                    pl-3
                  ">

                    {category.subcategories &&
                      category.subcategories.map(
                        (sub) => (

                          <NavLink
                            key={sub.id}
                            to={`/services/${sub.slug}`}
                            onClick={() =>
                              setMobileMenu(
                                false
                              )
                            }
                            className="
                              block
                              text-sm
                              text-gray-400
                            "
                          >
                            • {sub.title}
                          </NavLink>
                        )
                      )}

                  </div>

                </div>
              )
            )}

          </div>

          {/* <NavLink
            to="/portfolio"
            onClick={() =>
              setMobileMenu(false)
            }
            className="hover:text-red-500"
          >
            Portfolio
          </NavLink> */}

          <NavLink
            to="/contact-us"
            onClick={() =>
              setMobileMenu(false)
            }
            className="hover:text-red-500"
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function SubLocationPage() {

  /*
  |--------------------------------------------------------------------------
  | PARAMS
  |--------------------------------------------------------------------------
  */

  const { slug, subSlug } = useParams();

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [subLocation, setSubLocation] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [notFound, setNotFound] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  */

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | SLUGIFY (same logic used across Footer / LocationPage)
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
  | FETCH SUB LOCATION DETAIL
  |--------------------------------------------------------------------------
  */

  const fetchSubLocation = async () => {

    setLoading(true);
    setNotFound(false);

    try {

      const response = await fetch(
        `${API}/sub-locations`
      );

      const result =
        await response.json();

      if (result.status) {

        const match = result.data.find(
          (item) =>
            slugify(item.location_name) === slug &&
            slugify(item.tagline || item.name) === subSlug
        );

        if (match) {

          setSubLocation(match);

          // Update tab title / meta for basic on-page SEO
          if (match.meta_title) {
            document.title = match.meta_title;
          }

        } else {

          setNotFound(true);
        }
      }

    } catch (error) {

      console.log(error);
      setNotFound(true);

    } finally {

      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchSubLocation();

    window.scrollTo(0, 0);

  }, [slug, subSlug]);

  /*
  |--------------------------------------------------------------------------
  | LOADING STATE
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (

      <section className="px-6 md:px-20 py-24 text-center">

        <p className="text-gray-500">
          Loading...
        </p>

      </section>

    );
  }

  /*
  |--------------------------------------------------------------------------
  | NOT FOUND STATE
  |--------------------------------------------------------------------------
  */

  if (notFound || !subLocation) {

    return (

      <section className="px-6 md:px-20 py-24 text-center">

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          We couldn't find the page you're looking for.
        </p>

        <NavLink
          to="/"
          className="text-red-800 font-semibold hover:text-red-900 transition"
        >
          ← Back to Home
        </NavLink>

      </section>

    );
  }

  /*
  |--------------------------------------------------------------------------
  | DETAIL VIEW
  |--------------------------------------------------------------------------
  */

  return (

    <section className="bg-white">

      {/* Breadcrumb / Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gray-100">

        {subLocation.breadcrumb_image ? (

          <img
            src={`${API}/uploads/sub-locations/${subLocation.breadcrumb_image}`}
            alt={subLocation.name}
            className="w-full h-full object-cover"
          />

        ) : subLocation.image ? (

          <img
            src={`${API}/uploads/sub-locations/${subLocation.image}`}
            alt={subLocation.name}
            className="w-full h-full object-cover"
          />

        ) : (

          <div className="w-full h-full bg-red-900" />

        )}

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">

          <span className="text-sm font-semibold tracking-wide text-yellow-400 uppercase mb-2">
            {subLocation.location_name}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {subLocation.name}
          </h1>

          {subLocation.tagline && (

            <p className="text-white/90 mt-3 max-w-xl">
              {subLocation.tagline}
            </p>

          )}

        </div>

      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-14">

        {/* Standalone image if a breadcrumb image was used as hero */}
        {subLocation.breadcrumb_image && subLocation.image && (

          <img
            src={`${API}/uploads/sub-locations/${subLocation.image}`}
            alt={subLocation.name}
            className="w-full h-72 object-cover rounded-2xl mb-10"
          />

        )}

        {/* Description (rich HTML from CKEditor) */}
        {subLocation.description ? (

          <div
            className="
              prose
              prose-red
              max-w-none
              prose-headings:text-gray-900
              prose-p:text-gray-600
              prose-a:text-red-800
            "
            dangerouslySetInnerHTML={{ __html: subLocation.description }}
          />

        ) : (

          <p className="text-gray-500">
            No description available yet.
          </p>

        )}

        {/* Back link */}
        <div className="mt-12">

          <NavLink
            to={`/locations/${slug}`}
            className="text-sm font-semibold text-red-800 hover:text-red-900 transition"
          >
            ← Back to {subLocation.location_name}
          </NavLink>

        </div>

      </div>

    </section>

  );
}

export default SubLocationPage;
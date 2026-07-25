import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function LocationPage() {

  /*
  |--------------------------------------------------------------------------
  | PARAMS
  |--------------------------------------------------------------------------
  */

  const { slug } = useParams();

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [subLocations, setSubLocations] =
    useState([]);

  const [locationName, setLocationName] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  */

  const API =
    "https://inbizmart.in/api";

  /*
  |--------------------------------------------------------------------------
  | SLUGIFY (same logic as Footer, so the slug matches consistently)
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
  | STRIP HTML (description comes from CKEditor as HTML)
  |--------------------------------------------------------------------------
  */

  const stripHtml = (html) => {

    if (!html) return "";

    const doc = new DOMParser().parseFromString(html, "text/html");

    return doc.body.textContent || "";
  };

  /*
  |--------------------------------------------------------------------------
  | FETCH SUB LOCATIONS FOR THIS LOCATION
  |--------------------------------------------------------------------------
  */

  const fetchSubLocations = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        `${API}/sub-locations`
      );

      const result =
        await response.json();

      if (result.status) {

        // Filter to only sub-locations whose location name matches this slug
        const filtered = result.data.filter(
          (item) => slugify(item.location_name) === slug
        );

        setSubLocations(filtered);

        if (filtered.length > 0) {
          setLocationName(filtered[0].location_name);
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
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchSubLocations();

    // Scroll to top when navigating between locations
    window.scrollTo(0, 0);

  }, [slug]);

  return (

    <section className="px-6 md:px-20 py-16 bg-white">

      {/* Header */}
      <div className="mb-12 text-center">

        <span className="text-sm font-semibold tracking-wide text-red-800 uppercase">
          Areas We Cover
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {locationName
            ? `Our Services in ${locationName}`
            : "Our Locations"}
        </h1>

      </div>

      {/* Loading */}
      {loading && (

        <p className="text-center text-gray-500">
          Loading locations...
        </p>

      )}

      {/* Empty */}
      {!loading && subLocations.length === 0 && (

        <p className="text-center text-gray-500">
          No sub-locations found for this area yet.
        </p>

      )}

      {/* Cards */}
      {!loading && subLocations.length > 0 && (

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        ">

          {subLocations.map((item) => (

            <NavLink
              key={item.id}
              to={`/locations/${slug}/${slugify(item.tagline || item.name)}`}
              className="
                bg-white
                border
                border-gray-100
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition
                overflow-hidden
                group
                block
              "
            >

              {/* Image */}
              <div className="h-44 w-full overflow-hidden bg-gray-100">

                {item.image ? (

                  <img
                    src={`${API}/uploads/sub-locations/${item.image}`}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-300
                    "
                  />

                ) : (

                  <div className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    text-sm
                  ">
                    No Image
                  </div>

                )}

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>

                {item.tagline && (

                  <p className="text-sm text-red-800 font-medium mb-2">
                    {item.tagline}
                  </p>

                )}

                {item.description && (

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {stripHtml(item.description)}
                  </p>

                )}

              </div>

            </NavLink>

          ))}

        </div>

      )}

      {/* Back link */}
      <div className="text-center mt-12">

        <NavLink
          to="/"
          className="
            text-sm
            font-semibold
            text-red-800
            hover:text-red-900
            transition
          "
        >
          ← Back to Home
        </NavLink>

      </div>

    </section>

  );
}

export default LocationPage;
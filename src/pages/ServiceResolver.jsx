import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ServicePage from "./ServicePage";
import SubcategoryPage from "./SubcategoryPage";

function ServiceResolver() {
  const { slug } = useParams();

  const [type, setType] = useState(null);

  const API = "https://inbizmart.in/api";

  useEffect(() => {
    const checkSlug = async () => {
      try {
        const response = await fetch(`${API}/categories`);
        const result = await response.json();

        if (!result.status) {
          setType("404");
          return;
        }

        // Check Category
        const category = result.data.find(
          item => item.slug === slug
        );

        if (category) {
          setType("category");
          return;
        }

        // Check Subcategory
        let found = false;

        for (const category of result.data) {
          if (
            category.subcategories.some(
              sub => sub.slug === slug
            )
          ) {
            found = true;
            break;
          }
        }

        if (found) {
          setType("subcategory");
        } else {
          setType("404");
        }
      } catch (error) {
        console.log(error);
        setType("404");
      }
    };

    checkSlug();
  }, [slug]);

  if (!type) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (type === "category") {
    return <ServicePage />;
  }

  if (type === "subcategory") {
    return <SubcategoryPage />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-4xl font-bold text-red-500">
      Page Not Found
    </div>
  );
}

export default ServiceResolver;
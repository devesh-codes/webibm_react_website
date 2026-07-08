import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogsHero from "../components/blogs/BlogsHero";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://inbizmart.in/api/blogs");
        const data = await res.json();

        console.log("API Response:", data);

        // Handle different API response formats safely
        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <BlogsHero />

      <section className="bg-gray-100 py-20 px-6 md:px-20">
        {loading ? (
          <div className="text-center text-lg font-medium">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-red-500 text-lg">
            No blogs found.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog.id || index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Blog Image */}
                <img
                  src={
  blog.images && blog.images.length > 0
    ? `https://inbizmart.in/api/uploads/blogs/${blog.images[0]}`
    : "https://via.placeholder.com/500x300"
}
                  alt={blog.title || "Blog Image"}
                  loading="lazy"
                  width="500"
                  height="300"
                  className="w-full h-48 object-cover"
                />

                {/* Blog Content */}
                <div className="p-5">
                  <h2 className="font-semibold text-lg mb-2">
                    {blog.title || "Untitled Blog"}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.desc ||
                      blog.description ||
                      "No description available."}
                  </p>

                  <Link
                    to={`/blogs/${blog.id}`}
                    aria-label={`Read more about ${
                      blog.title || "this blog"
                    }`}
                    className="inline-block text-red-500 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Blogs;
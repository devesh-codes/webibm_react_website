import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);



   const stripHtml = (html = "") => {
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 150
    ? text.substring(0, 150) + "..."
    : text;
};
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
          setBlogs(data.data.slice(0, 3));
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
      

      <section className="bg-gray-100 py-20 px-6 md:px-20">
       <div className="text-center relative z-10">

          <span
            className="
              text-red-500
              uppercase
              tracking-[4px]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            What's New
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              mt-5
              leading-tight
              mb-5
            "
          >
           Our Blogs
          </h2>

          
        </div>
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
  {stripHtml(
    blog.description ||
    blog.desc ||
    "No description available."
  )}
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
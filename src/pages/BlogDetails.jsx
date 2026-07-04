import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://inbizmart.in/api/blogs/${id}`);
        const data = await res.json();

        console.log("Blog Detail:", data);

        // Handle different response formats
        if (data.blog) {
          setBlog(data.blog);
        } else if (data.data) {
          setBlog(data.data);
        } else {
          setBlog(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center text-xl">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="py-20 text-center text-red-500">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src={
            blog.img ||
            blog.image ||
            "https://via.placeholder.com/1200x600"
          }
          alt={blog.title}
          className="w-full h-[450px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-4">
            {blog.title}
          </h1>

          {blog.created_at && (
            <p className="text-gray-500 mb-6">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
          )}

          <div className="leading-8 text-gray-700 whitespace-pre-line">
            {blog.content ||
              blog.description ||
              blog.desc ||
              "No content available."}
          </div>

          <Link
            to="/blogs"
            className="inline-block mt-10 text-red-500 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>

        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
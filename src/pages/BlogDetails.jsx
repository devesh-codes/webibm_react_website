import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogsHero from "../components/blogs/BlogsHero";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
const [relatedBlogs, setRelatedBlogs] = useState([]);

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




  const fetchRelatedBlogs = async () => {
  try {
    const res = await fetch("https://inbizmart.in/api/blogs");
    const data = await res.json();

    const blogs = data.data || data.blogs || data;

    setRelatedBlogs(
      blogs.filter((b) => String(b.id) !== String(id)).slice(0, 5)
    );
  } catch (err) {
    console.error(err);
  }
};

fetchRelatedBlogs();

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
    <>
    
    <BlogsHero/>
   <section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-3 gap-10">

      {/* Left */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow">

        <img
          src={
            blog.images && blog.images.length > 0
              ? `https://inbizmart.in/api/uploads/blogs/${blog.images[0]}`
              : "https://via.placeholder.com/1200x600"
          }
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-t-xl"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-3">
            {blog.title}
          </h1>

          <div className="text-gray-500 mb-8">
            {new Date(blog.created_at).toLocaleDateString()}
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.description,
            }}
          />

        </div>

      </div>

      {/* Right Sidebar */}

      <aside>

        <div className="bg-white rounded-xl shadow p-5 sticky top-24">

          <h3 className="text-2xl font-bold mb-6">
            Related Blogs
          </h3>

          {relatedBlogs.map((item) => (

            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
              className="flex gap-4 mb-5 group"
            >

              <img
                src={
                  item.images && item.images.length
                    ? `https://inbizmart.in/api/uploads/blogs/${item.images[0]}`
                    : "https://via.placeholder.com/120"
                }
                className="w-24 h-20 rounded-lg object-cover"
                alt={item.title}
              />

              <div>

                <h4 className="font-semibold group-hover:text-red-500 transition">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {item.short_description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </aside>

    </div>

  </div>
</section>
</>
  );
}

export default BlogDetails;
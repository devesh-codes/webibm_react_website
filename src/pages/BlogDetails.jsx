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

useEffect(() => {
  fetchRelatedBlogs();
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
  console.log(blog.description);

  return (
    <>
    
    <BlogsHero/>
   <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-10">
      Latest stories
    </h2>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* LEFT */}

      <div className="lg:col-span-2">

        <img
          src={
            blog.images?.length
              ? `https://inbizmart.in/api/uploads/blogs/${blog.images[0]}`
              : "https://via.placeholder.com/900x600"
          }
          alt={blog.title}
          className="w-full h-[500px] rounded-3xl object-cover"
        />

        <div className="mt-6">

          <h1 className="text-3xl font-bold leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-500 mt-3 mb-8">
            {new Date(blog.created_at).toLocaleDateString()}
          </p>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.description,
            }}
          />

        </div>

      </div>

      {/* RIGHT */}

      <aside>

        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full border rounded-full px-5 py-3 mb-8 outline-none"
        />

        {relatedBlogs.map((item) => (

          <Link
            key={item.id}
            to={`/blogs/${item.id}`}
            className="block mb-8 group"
          >

            <img
              src={
                item.images?.length
                  ? `https://inbizmart.in/api/uploads/blogs/${item.images[0]}`
                  : "https://via.placeholder.com/300x200"
              }
              className="w-full h-40 rounded-2xl object-cover"
              alt={item.title}
            />

            <h3 className="mt-4 text-lg font-bold group-hover:text-red-500">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              {new Date(item.created_at).toLocaleDateString()}
            </p>

          </Link>

        ))}

      </aside>

    </div>

  </div>
</section>
</>
  );
}

export default BlogDetails;
import {
  Star,
  ExternalLink,
} from "lucide-react";

const reviews = [
  {
    name: "Ram Charan",
    role: "Local Guide",
    review:
      "Best web designer in Goa that we worked with. Their SEO service is cost effective and very productive. The team is kind and helpful with social media. I recommend WEBIBM for website development.",
  },
  {
    name: "Rohit Chauhan",
    role: "Local Guide",
    review:
      "We experienced steady growth with WEBIBM India's SEO service. Their team maintained clear communication and regular follow-ups. Keyword rankings and organic traffic improved together.",
  },
  {
    name: "Ankit Kumar",
    role: "Local Guide",
    review:
      "WEBIBM did a great job setting up and verifying my Google Business Profile. Their support team was professional and explained everything clearly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold tracking-[3px] uppercase">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Google Header */}

              <div className="flex items-center gap-3 border rounded-full px-4 py-2 mb-6">

                <img
                  src="https://www.google.com/favicon.ico"
                  alt=""
                  className="w-5 h-5"
                />

                <span className="text-sm font-medium text-zinc-700">
                  Google Review
                </span>

              </div>

              {/* Stars */}

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#f59e0b"
                    stroke="#f59e0b"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="text-zinc-600 leading-8 text-[15px] min-h-[170px]">
                {item.review}
              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">

                <div className="w-12 h-12 rounded-full bg-[#F62440] text-white flex items-center justify-center text-lg font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-zinc-500">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Button */}

             

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
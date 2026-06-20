import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import ContactHero from "../components/contact/ContactHero";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [responseMessage, setResponseMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setResponseMessage({
      type: "",
      text: "",
    });

    try {
      const response = await fetch(
        "https://inbizmart.in/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status) {

        setResponseMessage({
          type: "success",
          text: "Thank you! We will contact you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {

        setResponseMessage({
          type: "error",
          text: data.message || "Something went wrong",
        });
      }

    } catch (error) {

      console.log(error);

      setResponseMessage({
        type: "error",
        text: "Server error. Please try again later.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactHero />

      <section
        className="
        bg-[#050505]
        py-24
        px-6
        md:px-20
        overflow-hidden
        relative
      "
      >
        {/* BG GLOW */}
        <div
          className="
          absolute
          top-0
          left-0
          w-96
          h-96
          bg-red-500/10
          blur-[120px]
          rounded-full
        "
        ></div>

        <div
          className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-red-500/10
          blur-[120px]
          rounded-full
        "
        ></div>

        {/* HEADING */}
        <div className="text-center mb-20 relative z-10">
          <span className="text-red-500 uppercase tracking-[5px] text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-5 leading-tight">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Get in touch with us for website development, digital marketing,
            branding, or business growth solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 relative z-10">
          {/* LEFT INFO */}
          <div
            className="
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-10
          "
          >
            <h3 className="text-3xl font-bold text-white mb-10">
              Contact Info
            </h3>

            <div className="space-y-10">
              {/* REGISTERED OFFICE */}
              <div className="flex gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <MapPin className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Registered Office
                  </h4>

                  <p className="text-gray-400 leading-8">
                    Webibm.com C/o India Business Mart Info Vision Pvt. Ltd.
                    CD-114, Near-1 Sant Public School, Mahavir Enclave, New
                    Delhi - 110045, India
                  </p>
                </div>
              </div>

              {/* WORKING OFFICE */}
              <div className="flex gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <MapPin className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Working Office
                  </h4>

                  <p className="text-gray-400 leading-8">
                    Webibm.com C/o India Business Mart Info Vision Pvt. Ltd.
                    2/2 Block 2 Tilak Nagar Old Market, New Delhi - 110018
                    India
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Mail className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Email Address
                  </h4>

                  <p className="text-gray-400">info@webibm.com</p>
                  <p className="text-gray-400">webibmb@gmail.com</p>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Phone className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Contact Number
                  </h4>

                  <p className="text-gray-400">
                    Mobile: +91-99715 15539
                  </p>

                  <p className="text-gray-400">
                    Phone: +91-011-3577-3572
                  </p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <MessageCircle className="text-red-500" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    WhatsApp
                  </h4>

                  <p className="text-gray-400">+91-99715 15539</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-10
          "
          >
            <h3 className="text-3xl font-bold text-white mb-10">
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                  placeholder:text-gray-500
                "
                />
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                  placeholder:text-gray-500
                "
                />
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                  placeholder:text-gray-500
                "
                />
              </div>

              {/* SUBJECT */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                  placeholder:text-gray-500
                "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-red-500
                  transition
                  placeholder:text-gray-500
                  resize-none
                "
                ></textarea>
              </div>

              {/* RESPONSE MESSAGE */}
              {responseMessage.text && (
                <div
                  className={`
                    rounded-2xl
                    p-5
                    border
                    text-sm
                    font-medium
                    ${
                      responseMessage.type === "success"
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                    }
                  `}
                >
                  {responseMessage.text}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-red-500
                hover:bg-red-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                shadow-[0_0_40px_rgba(239,68,68,0.35)]
                disabled:opacity-50
              "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
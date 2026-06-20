import React from "react";
import {
  BadgeCheck,
  Globe,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Megaphone,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Google_partner_in_india = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-[Outfit]">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 px-4">
        
        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white mb-6">
            <BadgeCheck size={18} />
            Google Certified Digital Marketing Agency
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Google Partner In India
          </h1>

          <p className="text-red-100 text-lg sm:text-xl mt-6 max-w-4xl mx-auto leading-9">
            Trusted agencies for digital marketing solutions,
            helping businesses grow online through certified
            Google advertising and performance marketing services.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            
            <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
              Get Free Consultation
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 sm:py-20 px-4">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium mb-5">
              About Google Partnership
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Google Partner Agency In India
            </h2>

            <p className="text-gray-600 leading-9 text-lg mb-6">
              Webibm.com is selected as a trusted Google Partner
              in India, helping businesses market their products
              and services using Google's powerful advertising
              ecosystem and digital solutions.
            </p>

            <p className="text-gray-600 leading-9 text-lg">
              Through this collaboration, small and medium-sized
              businesses can effectively advertise across Google
              Search, Display Network, YouTube, Maps, and many
              other Google platforms.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <Globe className="text-red-500 mb-5" size={42} />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Global Reach
              </h3>

              <p className="text-gray-600 leading-8">
                Reach millions of users through Google Ads and
                targeted campaigns.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <TrendingUp className="text-red-500 mb-5" size={42} />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Business Growth
              </h3>

              <p className="text-gray-600 leading-8">
                Improve leads, conversions, and overall digital
                presence effectively.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <ShieldCheck className="text-red-500 mb-5" size={42} />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Trusted Expertise
              </h3>

              <p className="text-gray-600 leading-8">
                Certified professionals managing campaigns with
                proven strategies.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <BarChart3 className="text-red-500 mb-5" size={42} />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Performance Analytics
              </h3>

              <p className="text-gray-600 leading-8">
                Detailed reports and insights to maximize ROI
                and marketing success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-16 sm:py-20 px-4 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium mb-5">
              Our Services
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Help Can We Provide?
            </h2>

            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-9">
              We provide complete Google Ads management and
              digital marketing services to help businesses
              increase online visibility, traffic, and sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Google Ads Campaign Management",
              "Search Engine Marketing",
              "Pay-Per-Click (PPC) Advertising",
              "Lead Generation Campaigns",
              "Performance Marketing Solutions",
              "Business Growth Strategies",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition"
              >
                <Megaphone
                  className="text-red-500 mb-5"
                  size={38}
                />

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item}
                </h3>

                <p className="text-gray-600 leading-8">
                  Professional and result-driven digital marketing
                  solutions tailored for your business goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE PARTNER INFO */}
      <section className="py-16 sm:py-20 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-[40px] shadow-xl p-8 sm:p-12 md:p-16 border border-gray-100">

            <div className="text-center mb-14">

              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium mb-5">
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                Benefits Of Partnering With Google
              </h2>

              <p className="text-gray-600 text-lg leading-9 max-w-4xl mx-auto">
                As a certified Google Partner in India, we help
                businesses create high-performing campaigns that
                increase exposure, traffic, leads, and brand awareness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "Boost exposure and brand awareness",
                "Reach targeted audiences effectively",
                "Generate more leads and conversions",
                "Improve online visibility on Google",
                "Increase ROI with optimized campaigns",
                "Professional support from certified experts",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="bg-red-500 text-white rounded-full p-2">
                    <BadgeCheck size={18} />
                  </div>

                  <p className="text-gray-700 text-lg leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-[40px] p-10 sm:p-16 text-center text-white shadow-2xl">

            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready To Grow Your Business?
            </h2>

            <p className="text-red-100 text-lg leading-9 max-w-3xl mx-auto mb-10">
              Partner with a trusted Google-certified agency and
              take your digital marketing performance to the next level.
            </p>

           <NavLink to="/contact">
             <button className="bg-white text-red-600 px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition">
               Contact Us Today
             </button>
           </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Google_partner_in_india;
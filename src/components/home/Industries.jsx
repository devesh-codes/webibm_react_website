function Industries() {
  return (
    <section className="bg-gray-200 text-black py-20 px-6 md:px-20">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 LEFT SIDE (VIDEO) */}
        <div className="relative">
          <video
            src="src/assets/video.mp4"   // 👉 put video in public folder
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div>
          <p className="text-red-500 text-sm tracking-wide mb-2">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Upgrade Your Brand with Next-Gen Web Design in India <br />
            
          </h2>

          <p className="text-gray-600">
            With strong industry experience, WEBIBM delivers high-quality digital solutions focused on performance and business growth. We combine expertise and innovation to build impactful websites and digital experiences for every brand.
            Our approach is result-driven, ensuring better visibility, engagement, and measurable online success. Every project is crafted with precision, quality, and a strong focus on long-term digital growth.

          </p>
        </div>

      </div>
    </section>
  );
}

export default Industries;
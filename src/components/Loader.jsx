import { useEffect, useRef } from "react";
import gsap from "gsap";
import loader from "../assets/logo.webp"
function Loader({ setLoading, logoRef }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Logo appear
    tl.fromTo(
      logoRef.current,
      { scale: 2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Step 2: Move logo
    tl.to(logoRef.current, {
      x: "-42vw",
      y: "-41vh",
      scale: 0.4,
      duration: 1.2,
      ease: "power4.inOut",
    });

    // Step 3: Fade loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => setLoading(false),
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999]"
    >
      <img
        ref={logoRef}
        src={loader}   // ✅ FIXED PATH
        alt="logo"
        className="w-[100px] md:w-[200px]"
      />
    </div>
  );
}

export default Loader;
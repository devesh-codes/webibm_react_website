import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-5
            left-5
            z-[9999]
            bg-red-500
            hover:bg-red-600
            text-white
            p-3
            rounded-full
            shadow-lg
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <ChevronUp size={24} />
        </button>
      )}
      
    </>
  );
}

export default ScrollTopButton;
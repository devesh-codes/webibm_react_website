import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/home2.avif";

function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // =========================
  // Typewriter Text
  // =========================
  const words = [
    "Drive Traffic,",
    "Digital Marketing",
    "Digital Products",
    "Modern Startups",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // =========================
  // Typewriter Effect
  // =========================
  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          speed = 1200;
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  // =========================
  // Optimized Canvas Animation
  // =========================
  useEffect(() => {
    // Disable particles on mobile
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
    };

    // Reduced particles
    const particleCount = 150;

    // Resize canvas
    const resize = () => {
      if (!heroRef.current) return;

      canvas.width = heroRef.current.offsetWidth;
      canvas.height = heroRef.current.offsetHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    // Throttled mouse move
    let lastMove = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();

      if (now - lastMove < 30) return;

      lastMove = now;

      const rect = heroRef.current.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    heroRef.current.addEventListener(
      "mousemove",
      handleMouseMove
    );

    heroRef.current.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          // Reduced connection distance
          if (dist < 80) {
            ctx.strokeStyle = "rgba(255,255,255,0.05)";
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;

        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            p.x += dx * 0.01;
            p.y += dy * 0.01;
          }
        }

        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pause animation when tab hidden
      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    setTimeout(() => {
  animate();
}, 1200);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resize);

      heroRef.current?.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      heroRef.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-24 min-h-screen flex items-center justify-between px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Left Content */}
      <div className="max-w-xl relative z-10">
        <p className="text-red-500 text-lg md:text-xl mb-4 tracking-wide">
          Be Visible ! Be Valuable
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 min-h-[140px]">
          {text}
          <span className="animate-pulse text-red-500">
            |
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          We build high-performance digital marketing
          campaigns designed to increase your online
          visibility, connect with customers, generate
          leads, and accelerate business growth.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
            Our Work
          </button>

          <button className="bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block relative z-10">
        <div className="w-[650px] h-[400px] rounded-xl flex items-center justify-center">
          <img
            src={hero}
            alt="Digital Marketing Services"
            loading="eager"
            width="650"
            height="400"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
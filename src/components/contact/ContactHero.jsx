import { useEffect, useRef } from "react";

function ContactHero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // ✅ Disable heavy animation on mobile
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    let particles = [];

    const mouse = {
      x: null,
      y: null,
    };

    // ✅ Resize
    const resize = () => {
      canvas.width = heroRef.current.offsetWidth;
      canvas.height = heroRef.current.offsetHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    // ✅ Mouse move
    const handleMouseMove = (e) => {
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

    // ✅ Reduced particles (90 → 35)
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    // ✅ Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ✅ Connection optimization
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          // ✅ Faster distance check
          const distanceSq = dx * dx + dy * dy;

          // 120 * 120 = 14400
          if (distanceSq < 14400) {
            ctx.strokeStyle =
              "rgba(255,255,255,0.05)";

            ctx.lineWidth = 0.5;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // ✅ Bounce
        if (p.x < 0 || p.x > canvas.width)
          p.vx *= -1;

        if (p.y < 0 || p.y > canvas.height)
          p.vy *= -1;

        // ✅ Mouse interaction optimized
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < 10000) {
            p.x += dx * 0.003;
            p.y += dy * 0.003;
          }
        }

        // ✅ Particle
        ctx.fillStyle = "rgba(255,255,255,0.8)";

        ctx.beginPath();

        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);

        ctx.fill();
      });

      animationFrameId =
        requestAnimationFrame(animate);
    }

    animate();

    // ✅ Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resize
      );

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
      className="relative bg-black text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* PARTICLE CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mt-8 text-red-500 mb-4">
          Contact Us
        </h1>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/80">
            Home
          </span>

          <span>›</span>

          <span className="text-green-400">
            Contact Us
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
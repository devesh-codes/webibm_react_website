import { useEffect, useRef } from "react";

function ServicesPageHero({title = "Services",

  breadcrumb = "Services",}) {

  const heroRef = useRef(null);

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    let particles = [];

    let mouse = {
      x: null,
      y: null,
    };

    const particleCount = 70;



    const resize = () => {

      canvas.width =
        heroRef.current.offsetWidth;

      canvas.height =
        heroRef.current.offsetHeight;

    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );



    heroRef.current.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          heroRef.current.getBoundingClientRect();

        mouse.x =
          e.clientX - rect.left;

        mouse.y =
          e.clientY - rect.top;

      }
    );



    heroRef.current.addEventListener(
      "mouseleave",
      () => {

        mouse.x = null;

        mouse.y = null;

      }
    );



    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      particles.push({

        x:
          Math.random() *
          canvas.width,

        y:
          Math.random() *
          canvas.height,

        vx:
          (Math.random() - 0.5) *
          0.5,

        vy:
          (Math.random() - 0.5) *
          0.5,

      });
    }



    function animate() {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );



      for (
        let i = 0;
        i < particles.length;
        i++
      ) {

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {

          const dx =
            particles[i].x -
            particles[j].x;

          const dy =
            particles[i].y -
            particles[j].y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < 120) {

            ctx.strokeStyle =
              "rgba(255,255,255,0.08)";

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

        if (
          p.x < 0 ||
          p.x > canvas.width
        ) p.vx *= -1;

        if (
          p.y < 0 ||
          p.y > canvas.height
        ) p.vy *= -1;



        if (mouse.x && mouse.y) {

          const dx = mouse.x - p.x;

          const dy = mouse.y - p.y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < 120) {

            p.x += dx * 0.02;

            p.y += dy * 0.02;

            ctx.strokeStyle =
              "rgba(239,68,68,0.3)";

            ctx.beginPath();

            ctx.moveTo(p.x, p.y);

            ctx.lineTo(
              mouse.x,
              mouse.y
            );

            ctx.stroke();

          }
        }

        ctx.fillStyle =
          "rgba(255,255,255,0.7)";

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          2,
          0,
          Math.PI * 2
        );

        ctx.fill();

      });



      if (mouse.x && mouse.y) {

        const gradient =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            100
          );

        gradient.addColorStop(
          0,
          "rgba(239,68,68,0.2)"
        );

        gradient.addColorStop(
          1,
          "transparent"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          100,
          0,
          Math.PI * 2
        );

        ctx.fill();

      }

      requestAnimationFrame(animate);

    }

    animate();

  }, []);




  return (

    <section
      ref={heroRef}
      className="
        relative
        pt-28
        pb-20
        px-6
        md:px-20
        text-white
        overflow-hidden
        bg-black
        my-12
      "
    >

      {/* CANVAS */}

      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          z-0
          opacity-40
        "
      />



      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
        "
      >

        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-red-400
            mb-4
          "
        >

          {title}

        </h1>



        <div
          className="
            flex
            items-center
            gap-2
            text-sm
          "
        >

          <span className="text-white/80">

            Home

          </span>

          <span>

            › Service

          </span>

          <span className="text-green-400">

            {breadcrumb}

          </span>

        </div>

      </div>

    </section>
  );
}

export default ServicesPageHero;
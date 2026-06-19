import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LegacyOfService() {
  const images = [
    "/gallery/roots-of-uov/1.png",
    "/gallery/roots-of-uov/2.png",
    "/gallery/roots-of-uov/6.png",
    "/gallery/roots-of-uov/7.png",
    "/gallery/roots-of-uov/10.png",
    "/gallery/roots-of-uov/11.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            A Legacy of Service
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            The foundation of UOV Foundation is built upon years of
            community service, public engagement, and humanitarian efforts.
            These experiences continue to guide our commitment towards
            creating meaningful social impact.
          </p>

        </div>

        {/* Slideshow */}
        <div className="max-w-5xl mx-auto">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={images[current]}
              alt="Community Service"
              className="
                w-full
                h-[300px]
                md:h-[550px]
                object-cover
                transition-all
                duration-700
              "
            />

          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-3">

            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-violet-700"
                    : "bg-violet-200"
                }`}
              />
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">

          <Link
            to="/gallery"
            className="
              inline-block
              bg-violet-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              hover:bg-violet-800
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View Gallery
          </Link>

        </div>

      </div>
    </section>
  );
}

export default LegacyOfService;
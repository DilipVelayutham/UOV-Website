import banner from "../../assets/images/hero-banner.png";

function Hero() {
  return (
    <section id = "hero" className="relative min-h-screen flex items-center justify-start overflow-hidden">

      {/* Banner Background */}
      <img
        src={banner}
        alt="UOV Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left Fade Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(30,27,75,0.95) 0%, rgba(30,27,75,0.85) 35%, rgba(30,27,75,0.35) 65%, rgba(30,27,75,0) 100%)",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-10 md:px-16 lg:px-24">

        <div className="max-w-2xl text-left">

          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            UOV
          </h1>

          <h2
            className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Foundation
          </h2>

          <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            Building an empowered and educated society through
            education, skill development, community service,
            and humanitarian initiatives.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button onClick = {() => window.location.href = "/membership"} className="bg-white text-violet-700 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Join Us
            </button>

            <button onClick = {() => window.location.href = "/donate"} className="border border-white text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-violet-700 transition duration-300">
              Donate Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
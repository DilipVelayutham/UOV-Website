function AboutSnapshot() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-[#F8F5FF] to-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ungalil Oruvan Vidiyal Foundation
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            Building an empowered and educated society through service,
            leadership, and community engagement.
          </p>

          <div className="w-24 h-1 bg-violet-600 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-20">

          <p className="text-gray-700 leading-relaxed text-lg">
            UOV Foundation is a non-profit organization dedicated to
            creating positive social impact through education, empowerment,
            skill development, community service, and humanitarian initiatives.
            Founded with a vision of building a stronger and more inclusive
            society, the works to provide opportunities, resources,
            and support that enable individuals and communities to grow,
            thrive, and contribute meaningfully to society.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-6">
            Through collective action, volunteerism, leadership, and community
            engagement, UOV Foundation strives to inspire positive change
            and create lasting impact for future generations. We believe that
            meaningful transformation begins when people come together with a
            shared purpose of service and social responsibility.
          </p>

        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          <div
            className="
              bg-gradient-to-r
              from-violet-700
              to-purple-600
              text-white
              p-10
              rounded-3xl
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-4"></div>

            <h3 className="text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="leading-relaxed text-violet-100">
              To build a compassionate, inclusive, and progressive society where every individual, regardless of their background, has access to opportunities in education, healthcare, livelihood, and social development, empowered through the collective strength of ordinary people.
            </p>

          </div>

          <div
            className="
              bg-gradient-to-r
              from-purple-600
              to-violet-500
              text-white
              p-10
              rounded-3xl
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-4"></div>

            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="leading-relaxed text-violet-100">
              To transform the collective strength of ordinary people into a force for social progress by promoting education, health, opportunity, leadership, community service, and responsible civic engagement, ensuring that every voice is heard and every individual has the opportunity to contribute to nation-building.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <button
            onClick={() => (window.location.href = "/about")}
            className="
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
            Read More About Us →
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutSnapshot;
function VisionMission() {
  return (
    <section
      className="py-24 bg-[#F8F5FF]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            What Guides Us
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Every initiative, every action, and every effort of UOV Foundation
            is driven by a clear vision, a meaningful mission, and a deep
            commitment to serving society.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Vision */}
          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6"></div>

            <h3 className="text-2xl font-bold text-[#1E1B4B] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To build a compassionate, inclusive, and progressive society
              where every individual, regardless of their background, has
              access to opportunities in education, healthcare, livelihood,
              and social development, empowered through the collective
              strength of ordinary people.
            </p>
          </div>

          {/* Mission */}
          <div
            className="
              bg-gradient-to-br
              from-violet-700
              to-purple-700
              text-white
              p-8
              rounded-3xl
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6"></div>

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-violet-100 leading-relaxed">
              To empower individuals and communities through education,
              healthcare awareness, skill development, environmental
              sustainability, social welfare, and citizen engagement while
              fostering leadership, responsibility, and positive social change.
            </p>
          </div>

          {/* Motto */}
          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6"></div>

            <h3 className="text-2xl font-bold text-[#1E1B4B] mb-4">
              Our Motto
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>
                By the People • For the People • With the People
              </strong>
            </p>

            <div className="border-l-4 border-violet-600 pl-4">
              <p className="italic text-violet-700 font-medium">
                “Together We Can Create Change;
                Through Action We Can Create a New Dawn.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VisionMission;
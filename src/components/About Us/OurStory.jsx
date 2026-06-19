import belief from "../../assets/images/Belief.png";

function OurStory() {
  return (
    <section
      className="py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4 mb-8">
              The Beginning of a New Dawn
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              UOV Foundation was founded with a simple yet powerful belief:
              that ordinary people, united by compassion and purpose, can create
              extraordinary social change.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The name <strong>"Ungalil Oruvan Vidiyal"</strong> reflects our
              commitment to being one among the people, working alongside
              communities to address challenges in education, healthcare,
              livelihood, environmental sustainability, and social development.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We envision a future where every individual has the opportunity
              to learn, grow, contribute, and thrive. Through collective action,
              community engagement, and dedicated service, we strive to build
              a society that is inclusive, empowered, and progressive.
            </p>

          </div>

          {/* Right Side Quote Card */}
          <div
            className="
              bg-gradient-to-br
              from-violet-700
              to-purple-700
              text-white
              p-10
              rounded-3xl
              shadow-2xl
            "
          >
            <h3 className="text-3xl font-bold mb-6">
              Our Core Belief
            </h3>

            <p className="text-xl leading-relaxed text-violet-100 italic">
              "Ordinary people united by compassion and purpose can create
              extraordinary social change."
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurStory;
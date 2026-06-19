import {
  FaUsers,
  FaHandsHelping,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

function WhyJoinUOV() {
  const benefits = [
    {
      icon: <FaHandsHelping />,
      title: "Serve Communities",
      description:
        "Participate in meaningful social service initiatives that address community needs and create lasting positive impact.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Empower Through Education",
      description:
        "Support educational programs, skill development initiatives, and opportunities that help individuals achieve their full potential.",
    },
    {
      icon: <FaUsers />,
      title: "Build a Better Society",
      description:
        "Collaborate with volunteers, professionals, educators, and leaders who share a common vision of social progress and community welfare.",
    },
    {
      icon: <FaLightbulb />,
      title: "Lead Meaningful Change",
      description:
        "Contribute ideas, take initiative, and become part of a movement dedicated to empowerment, education, sustainability, and humanitarian service.",
    },
  ];

  return (
    <section
      id="why-join"
      className="py-24 bg-gradient-to-b from-[#F8F5FF] to-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why Join the UOV Movement?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Join a community of changemakers dedicated to education,
            social empowerment, environmental sustainability, citizen welfare,
            and humanitarian service. Together, we can create a brighter future.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-700 text-2xl mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every contribution matters. Whether you volunteer your time,
            share your expertise, or support our initiatives, you become
            part of a collective effort to empower, educate, and elevate lives.
          </p>

          <a
            href="/membership"
            rel="noopener noreferrer"
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
            Become a UOV Member →
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyJoinUOV;
import CountUp from "react-countup";
import {
  FaUsers,
  FaHandsHelping,
  FaBullseye,
} from "react-icons/fa";

function ImpactStats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: 19,
      suffix: "",
      title: "Management Board Members",
    },
    {
      icon: <FaHandsHelping />,
      number: 3,
      suffix: "",
      title: "Membership Categories",
    },
    {
      icon: <FaBullseye />,
      number: 2,
      suffix: "",
      title: "Shared Mission",
    },
    {
      icon: <FaUsers />,
      number: 2026,
      suffix: "",
      title: "Founded",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-r from-violet-700 to-purple-600"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Growing Impact
          </h2>

          <p className="mt-4 text-violet-100">
            Together, we are building a stronger and more empowered community.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
            >

              <div className="flex justify-center text-4xl text-white mb-4">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">

                {stat.number}
                {stat.suffix}

              </h3>

              <p className="mt-3 text-violet-100">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ImpactStats;
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaHandsHelping,
  FaHandshake,
} from "react-icons/fa";

function JoinMission() {
  const opportunities = [
    {
      icon: <FaUserPlus />,
      title: "Become a Member",
      description:
        "Join a growing movement committed to empowering communities and creating meaningful social impact.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer",
      description:
        "Contribute your skills, knowledge, and time to support initiatives that transform lives.",
    },
    {
      icon: <FaHandshake />,
      title: "Partner With Us",
      description:
        "Collaborate with UOV Foundation to expand opportunities and strengthen communities.",
    },
  ];

  return (
    <section
      className="
        py-28
        bg-gradient-to-r
        from-violet-900
        via-violet-800
        to-purple-700
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-violet-200 font-semibold uppercase tracking-wider">
            Join The Mission
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Leadership Begins With Service
          </h2>

          <p className="text-violet-100 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            At UOV Foundation, leadership is not defined by position,
            but by the willingness to serve. We welcome individuals who
            share our vision of building a compassionate, inclusive,
            and progressive society.
          </p>

        </div>

        {/* Opportunity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {opportunities.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-3xl
                p-8
                text-center
                hover:bg-white/15
                transition-all
                duration-300
              "
            >

              <div className="text-4xl text-white flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-violet-100 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/membership"
            className="
              bg-white
              text-violet-700
              px-8
              py-4
              rounded-xl
              font-semibold
              text-center
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Become a Member
          </Link>

          <Link
            to="/contact"
            className="
              border-2
              border-white
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              text-center
              hover:bg-white
              hover:text-violet-700
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default JoinMission;
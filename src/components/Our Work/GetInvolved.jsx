import { Link } from "react-router-dom";
import { FaUserPlus, FaHandsHelping, FaHandshake } from "react-icons/fa";

function GetInvolved() {
  const opportunities = [
    {
      icon: <FaUserPlus />,
      title: "Become a Member",
      description:
        "Join UOV Foundation and become part of a growing movement dedicated to social impact and community development.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer With Us",
      description:
        "Contribute your time, skills, and expertise to support initiatives that create meaningful change in communities.",
    },
    {
      icon: <FaHandshake />,
      title: "Partner With Us",
      description:
        "Collaborate with us as an institution, organization, or individual to expand the reach and impact of our initiatives.",
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

        {/* Header */}
        <div className="text-center mb-16">

          <span className="text-violet-200 font-semibold uppercase tracking-wider">
            Get Involved
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Be Part of the Change
          </h2>

          <p className="text-violet-100 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The success of every initiative depends on people who are willing
            to contribute, collaborate, and create impact. Together, we can
            build stronger communities and a brighter future.
          </p>

        </div>

        {/* Cards */}
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
            Join UOV Foundation
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

export default GetInvolved;
import { FaUserTie, FaUserCog, FaHandsHelping } from "react-icons/fa";

function MembershipCategories() {
  const categories = [
    {
      icon: <FaUserTie />,
      title: "Board Members",
      description:
        "Provide strategic direction, governance, and leadership for the trust.",
      features: [
        "Decision Making",
        "Leadership Role",
        "Policy Development",
      ],
    },
    {
      icon: <FaUserCog />,
      title: "Designated Members",
      description:
        "Support specific functions, projects, and operational activities of the trust.",
      features: [
        "Project Coordination",
        "Program Support",
        "Team Collaboration",
      ],
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer Members",
      description:
        "Actively participate in events, campaigns, and community service initiatives.",
      features: [
        "Community Service",
        "Event Participation",
        "Social Impact",
      ],
    },
  ];

  return (
    <section id="membership" data-aos="fade-up" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold text-[#1E1B4B]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Membership Categories
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Choose how you would like to contribute and become part of
            UOV Foundation's mission to empower, educate, and elevate.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#F8F5FF] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-700 text-3xl mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1E1B4B]">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button onClick = {() => window.location.href = "/membership"} className="mt-8 w-full bg-violet-700 text-white py-3 rounded-xl font-semibold hover:bg-violet-800 transition">
                Apply Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MembershipCategories;
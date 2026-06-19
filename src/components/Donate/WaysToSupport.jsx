import {
  FaUsers,
  FaHandsHelping,
  FaBullhorn,
  FaHandshake,
} from "react-icons/fa";

function WaysToSupport() {
  const ways = [
    {
      icon: <FaUsers />,
      title: "Become a Member",
      description:
        "Join UOV Foundation and become part of a growing movement dedicated to social change.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer Your Time",
      description:
        "Support programs, events, campaigns, and community initiatives through active participation.",
    },
    {
      icon: <FaBullhorn />,
      title: "Spread Awareness",
      description:
        "Help us reach more people by sharing our mission, activities, and community impact.",
    },
    {
      icon: <FaHandshake />,
      title: "Partner With Us",
      description:
        "Collaborate with us as an individual, institution, or organization to create greater impact.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Ways To Support UOV
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {ways.map((way, index) => (
            <div
              key={index}
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
                {way.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {way.title}
              </h3>

              <p className="text-gray-600">
                {way.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WaysToSupport;
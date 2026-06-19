import {
  FaHandsHelping,
  FaUsers,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

function WhyBecomeMember() {
  const reasons = [
    {
      icon: <FaHandsHelping />,
      title: "Create Social Impact",
      description:
        "Contribute to meaningful initiatives that improve lives and strengthen communities.",
    },
    {
      icon: <FaLightbulb />,
      title: "Develop Leadership",
      description:
        "Build leadership, communication, and organizational skills through practical experiences.",
    },
    {
      icon: <FaUsers />,
      title: "Build Connections",
      description:
        "Connect with volunteers, professionals, educators, and community leaders.",
    },
    {
      icon: <FaGlobe />,
      title: "Serve Society",
      description:
        "Become part of a mission focused on sustainable social development and empowerment.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Why Become A Member?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                bg-[#F8F5FF]
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-700 text-2xl mb-6">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyBecomeMember;
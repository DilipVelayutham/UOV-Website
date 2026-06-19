import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaUsers,
  FaLeaf,
  FaBalanceScale,
} from "react-icons/fa";

function WhatWeStandFor() {
  const values = [
    {
      icon: <FaGraduationCap />,
      title: "Education & Skill Development",
      description:
        "Promoting education, learning opportunities, and skill development to empower individuals for a better future.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare & Well-being",
      description:
        "Supporting health awareness, access to healthcare, and initiatives that improve overall well-being.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Service",
      description:
        "Encouraging volunteerism and collective action to address social challenges and community needs.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Leadership & Governance",
      description:
        "Developing responsible leaders who contribute positively to society and public life.",
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Sustainability",
      description:
        "Promoting environmental responsibility, conservation, and sustainable community development.",
    },
    {
      icon: <FaUsers />,
      title: "Citizen Welfare & Social Support",
      description:
        "Supporting citizens through welfare initiatives, guidance, and community-centered services.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            What We Stand For
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            UOV Foundation works across multiple areas of social
            development to create meaningful and sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => (
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
              <div className="text-violet-700 text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhatWeStandFor;
import {
  FaHandsHelping,
  FaUsers,
  FaBalanceScale,
  FaSeedling,
} from "react-icons/fa";

function LeadershipPhilosophy() {
  const principles = [
    {
      icon: <FaHandsHelping />,
      title: "Service Before Self",
      description:
        "Our leadership is rooted in the belief that true leadership begins with serving communities and addressing societal needs.",
    },
    {
      icon: <FaUsers />,
      title: "People-Centered Governance",
      description:
        "Every decision is guided by the needs, aspirations, and welfare of the people we serve.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Integrity & Accountability",
      description:
        "We uphold transparency, responsibility, and ethical leadership in every initiative and action.",
    },
    {
      icon: <FaSeedling />,
      title: "Sustainable Social Impact",
      description:
        "We focus on creating long-term positive change through education, empowerment, and community development.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Our Leadership Philosophy
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            At UOV Foundation, leadership is viewed as a responsibility
            to serve, empower, and inspire communities through collective
            action and meaningful social impact.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {principles.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
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
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LeadershipPhilosophy;
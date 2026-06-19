import {
  FaHandsHelping,
  FaGraduationCap,
  FaArrowUp,
} from "react-icons/fa";

function PrimaryPrinciples() {
  const principles = [
    {
      icon: <FaHandsHelping />,
      title: "Empower",
      description:
        "We empower individuals and communities by creating opportunities, fostering leadership, encouraging self-reliance, and enabling people to become active contributors to society.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Educate",
      description:
        "We believe education is the foundation of social progress. Through learning, awareness, skill development, and knowledge sharing, we help people unlock their potential.",
    },
    {
      icon: <FaArrowUp />,
      title: "Elevate",
      description:
        "We strive to elevate lives by promoting social welfare, improving access to opportunities, supporting sustainable development, and inspiring positive transformation.",
    },
  ];

  return (
    <section
      className="py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Our Primary Principles
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Everything we do at UOV Foundation is guided by three
            fundamental principles that shape our mission, initiatives,
            and impact on society.
          </p>

        </div>

        {/* Principles */}
        <div className="grid lg:grid-cols-3 gap-8">

          {principles.map((principle, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-br
                from-violet-50
                to-white
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-700 text-3xl mb-6">
                {principle.icon}
              </div>

              <h3 className="text-3xl font-bold text-[#1E1B4B] mb-4">
                {principle.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PrimaryPrinciples;
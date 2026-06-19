import {
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaLeaf,
  FaUserTie,
} from "react-icons/fa";

function WorkIntroduction() {
  const focusAreas = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare",
    },
    {
      icon: <FaUsers />,
      title: "Citizen Welfare",
    },
    {
      icon: <FaUserTie />,
      title: "Leadership",
    },
    {
      icon: <FaLeaf />,
      title: "Environment",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4 mb-8">
              Creating Sustainable Impact Through Focused Initiatives
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              UOV Foundation believes that meaningful social change
              requires structured action. Rather than isolated activities,
              we develop focused initiatives that address long-term needs
              in education, healthcare, leadership development,
              environmental sustainability, and citizen welfare.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through our initiatives, we aim to empower individuals,
              strengthen communities, and create opportunities that
              contribute to a more inclusive and progressive society.
            </p>

          </div>

          {/* Right */}
          <div className="bg-[#F8F5FF] rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-[#1E1B4B] mb-8">
              Our Focus Areas
            </h3>

            <div className="grid grid-cols-2 gap-6">

              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    shadow-sm
                    text-center
                  "
                >
                  <div className="text-violet-700 text-2xl mb-3 flex justify-center">
                    {area.icon}
                  </div>

                  <h4 className="font-semibold text-[#1E1B4B]">
                    {area.title}
                  </h4>
                </div>
              ))}

            </div>

            <div className="mt-8 bg-violet-700 text-white rounded-2xl p-5 text-center">

              <h4 className="text-3xl font-bold">
                5
              </h4>

              <p className="text-violet-100">
                Planned Initiatives
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WorkIntroduction;
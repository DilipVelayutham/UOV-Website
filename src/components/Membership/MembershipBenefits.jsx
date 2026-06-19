import {
  FaCertificate,
  FaUsers,
  FaChalkboardTeacher,
  FaUserTie,
  FaHandsHelping,
  FaAward,
} from "react-icons/fa";

function MemberBenefits() {
  const benefits = [
    "Participation in Trust Activities",
    "Leadership Opportunities",
    "Volunteer Experience",
    "Networking Opportunities",
    "Training & Development",
    "Recognition & Certificates",
  ];

  const icons = [
    <FaHandsHelping />,
    <FaUserTie />,
    <FaUsers />,
    <FaUsers />,
    <FaChalkboardTeacher />,
    <FaCertificate />,
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Member Benefits
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Membership provides opportunities for personal growth,
            leadership development, community engagement, and meaningful service.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((benefit, index) => (
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
                {icons[index]}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B]">
                {benefit}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MemberBenefits;
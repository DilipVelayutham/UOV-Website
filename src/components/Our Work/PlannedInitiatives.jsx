import fellowshipImg from "../../assets/initiatives/fellowship.jpeg";
import kalviImg from "../../assets/initiatives/kalvi.jpeg";
import healthImg from "../../assets/initiatives/health.jpeg";
import citizenCareImg from "../../assets/initiatives/citizen-care.jpeg";
import pasumaiImg from "../../assets/initiatives/pasumai.jpeg";

function InitiativesSection() {
  const initiatives = [
    {
      title: "Vidiyal Fellowship",
      category: "Leadership & Governance",
      image: fellowshipImg,
      description:
        "Vidiyal Fellowship aims to nurture socially responsible leaders, community organizers, and future changemakers through leadership development, governance awareness, mentorship, and civic engagement programs.",
    },
    {
      title: "Vidiyal Kalvi Initiative",
      category: "Education & Learning",
      image: kalviImg,
      description:
        "Focused on educational empowerment, this initiative supports students through mentoring, academic assistance, skill development, career guidance, and access to learning opportunities.",
    },
    {
      title: "Vidiyal Health Rights Initiative",
      category: "Healthcare & Well-being",
      image: healthImg,
      description:
        "Promoting healthcare awareness, preventive care, health rights, and access to essential health resources while encouraging healthier communities.",
    },
    {
      title: "Vidiyal Citizen Care Centre",
      category: "Citizen Support & Welfare",
      image: citizenCareImg,
      description:
        "A citizen-focused support initiative that provides guidance, welfare assistance, grievance support, and community-centered services for social development.",
    },
    {
      title: "Pasumai Vidiyal Initiative",
      category: "Environment & Sustainability",
      image: pasumaiImg,
      description:
        "Dedicated to environmental sustainability through plantation drives, awareness campaigns, conservation efforts, and promotion of eco-friendly practices.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Our Planned Initiatives
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            UOV Foundation creates impact through focused initiatives
            designed to address key areas of social development and community
            empowerment.
          </p>

        </div>

        {/* Initiatives */}
        <div className="space-y-28">

          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`
                grid
                lg:grid-cols-2
                gap-12
                items-center
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Image */}
              <div>
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="
                    w-full
                    h-[400px]
                    object-cover
                    rounded-3xl
                    shadow-xl
                  "
                />
              </div>

              {/* Content */}
              <div>

                <span
                  className="
                    inline-block
                    bg-violet-100
                    text-violet-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    mb-4
                  "
                >
                  {initiative.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-6">
                  {initiative.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {initiative.description}
                </p>

                <div className="mt-8">

                  <span
                    className="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      rounded-full
                      bg-amber-100
                      text-amber-700
                      text-sm
                      font-medium
                    "
                  >
                    Planned Initiative
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default InitiativesSection;
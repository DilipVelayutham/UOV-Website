import fellowshipImg from "../../assets/initiatives/fellowship.jpeg";
import kalviImg from "../../assets/initiatives/kalvi.jpeg";
import healthImg from "../../assets/initiatives/health.jpeg";
import citizenCareImg from "../../assets/initiatives/citizen-care.jpeg";
import pasumaiImg from "../../assets/initiatives/pasumai.jpeg";

function OurPlannedInitiatives() {
  const initiatives = [
    {
      title: "Vidiyal Fellowship",
      description:
        "A leadership and governance development program that nurtures responsible leaders and changemakers.",
      image: fellowshipImg,
    },
    {
      title: "Vidiyal Kalvi Initiative",
      description:
        "Focused on educational support, learning opportunities, and empowering students through knowledge.",
      image: kalviImg,
    },
    {
      title: "Vidiyal Health Rights Initiative",
      description:
        "Promoting healthcare awareness, health rights, and access to essential health resources.",
      image: healthImg,
    },
    {
      title: "Vidiyal Citizen Care Centre",
      description:
        "Supporting citizens through guidance, welfare assistance, and community support services.",
      image: citizenCareImg,
    },
    {
      title: "Pasumai Vidiyal Initiative",
      description:
        "Dedicated to environmental sustainability, tree plantation, and green community development.",
      image: pasumaiImg,
    },
  ];

  return (
    <section
      className="py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Our Planned Initiatives
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            UOV Foundation is committed to creating sustainable
            impact through a range of initiatives focused on leadership,
            education, healthcare, citizen welfare, and environmental
            development.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <img
                src={initiative.image}
                alt={initiative.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">
                  {initiative.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {initiative.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Join Mission CTA */}
        <div className="mt-20 text-center">

          <a
            href="/membership"
            rel="noopener noreferrer"
            className="
      inline-block
      bg-violet-700
      text-white
      px-8
      py-4
      rounded-xl
      font-semibold
      shadow-lg
      hover:bg-violet-800
      hover:scale-105
      transition-all
      duration-300
    "
          >
            Join Our Mission Now →
          </a>

        </div>
      </div>
    </section>
  );
}

export default OurPlannedInitiatives;
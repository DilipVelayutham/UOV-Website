function LeadershipTimeline() {
  const timeline = [
    {
      year: "2020",
      title: "Community Service Beginnings",
      description:
        "Grassroots service activities focusing on public welfare, social support, and community engagement.",
    },
    {
      year: "2021",
      title: "Expanding Community Outreach",
      description:
        "Broader involvement in educational support, awareness programs, and local service initiatives.",
    },
    {
      year: "2022",
      title: "Strengthening Public Impact",
      description:
        "Collaborative efforts addressing social challenges and promoting citizen welfare.",
    },
    {
      year: "2023",
      title: "Building Leadership Networks",
      description:
        "Formation of stronger volunteer networks and engagement with emerging community leaders.",
    },
    {
      year: "2024",
      title: "Structured Social Development",
      description:
        "Focused initiatives in education, youth engagement, women empowerment, and community development.",
    },
    {
      year: "2025",
      title: "Vision for Collective Change",
      description:
        "Leadership discussions and planning that laid the foundation for a larger movement dedicated to social impact.",
    },
    {
      year: "2026",
      title: "UOV Foundation Established",
      description:
        "A formal organization was established to transform years of community service into a sustainable platform for social change.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            From Service to Institution
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            The story of UOV Foundation is rooted in years of
            community service, leadership development, and collective
            efforts dedicated to creating meaningful social change.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-violet-200"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-8 mb-14"
            >

              {/* Dot */}
              <div className="relative z-10 flex-shrink-0">

                <div className="w-12 h-12 rounded-full bg-violet-700 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                  {item.year.slice(2)}
                </div>

              </div>

              {/* Content */}
              <div
                className="
                  bg-[#F8F5FF]
                  rounded-3xl
                  p-8
                  shadow-md
                  hover:shadow-lg
                  transition-all
                  duration-300
                  flex-1
                "
              >

                <span className="text-violet-700 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold text-[#1E1B4B] mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LeadershipTimeline;
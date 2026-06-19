function FuturePrograms() {
  const programs = [
    "Research & Policy Wing",
    "Youth Leadership Academy",
    "Community Resource Centres",
    "Women's Empowerment Programs",
    "Digital Learning Platform",
    "Rural Development Initiatives",
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Future Programs
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            UOV Foundation envisions expanding its impact through
            new initiatives and programs that address emerging social,
            educational, and community development needs.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (
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
              <span
                className="
                  inline-block
                  bg-violet-100
                  text-violet-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                  mb-5
                "
              >
                Upcoming
              </span>

              <h3 className="text-xl font-bold text-[#1E1B4B]">
                {program}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FuturePrograms;
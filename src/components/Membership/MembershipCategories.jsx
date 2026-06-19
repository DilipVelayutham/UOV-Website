function MembershipCategories() {
  const categories = [
    {
      title: "Official Board Member",
      description:
        "For students passionate about leadership, volunteering, and social service.",
    },
    {
      title: "Designated Member",
      description:
        "For individuals who wish to contribute to community development initiatives.",
    },
    {
      title: "Volunteer Member",
      description:
        "For active participants supporting events, campaigns, and programs.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Membership Categories
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                text-center
              "
            >
              <h3 className="text-2xl font-bold text-[#1E1B4B] mb-4">
                {category.title}
              </h3>

              <p className="text-gray-600">
                {category.description}
              </p>

            </div>
          ))}

        </div>
          
      </div>
    </section>
  );
}

export default MembershipCategories;
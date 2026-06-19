function ManagementBoardPreview() {
  const leaders = [
    {
      position: "Chairman",
      name: "Er. R. Prabhakaran",
    },
    {
      position: "Vice Chairman",
      name: "Mrs. Seetha Lakshmi",
    },
    {
      position: "General Secretary",
      name: "Mr. Dilaludin",
    },
    {
      position: "Executive Secretary",
      name: "Mr. Dilip Velayutham",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Our Management Board
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            UOV Foundation is guided by a dedicated team of leaders
            committed to advancing the vision, mission, and values of the
            organization while serving communities with integrity and purpose.
          </p>

        </div>

        {/* Board Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {leaders.map((leader, index) => (
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
                text-center
              "
            >

              <h3 className="text-xl font-bold text-[#1E1B4B]">
                {leader.name}
              </h3>

              <p className="text-violet-700 font-medium mt-2">
                {leader.position}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <button
            onClick={() => (window.location.href = "/trustees")}
            className="
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
            View All Trustees
          </button>

        </div>

      </div>
    </section>
  );
}

export default ManagementBoardPreview;
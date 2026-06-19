import { Link } from "react-router-dom";
import { trustees } from "../../data/trusteesData";

function ManagementBoard() {
  const heads = trustees.filter(
    (member) => member.category === "head"
  );

  const executives = trustees.filter(
    (member) => member.category === "executive"
  );

  const others = trustees.filter(
    (member) => member.category === "other"
  );

  const TrusteeCard = ({ member, large = false }) => (
    <Link
      to={`${member.slug}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }}
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        block
      "
    >
      <img
        src={member.image}
        alt={member.name}
        className={`
          w-full
          object-cover
          ${large ? "h-[380px]" : "h-[320px]"}
        `}
      />

      <div className="p-6 text-center">

        <h3 className="text-2xl font-bold text-[#1E1B4B]">
          {member.name}
        </h3>

        <p className="text-violet-700 mt-2 font-medium">
          {member.role}
        </p>

      </div>
    </Link>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Official Management Board
          </h2>

        </div>

        {/* Heads */}
        <div className="mb-20">

          <h3 className="text-3xl font-bold text-center text-[#1E1B4B] mb-10">
            Heads
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {heads.map((member) => (
              <TrusteeCard
                key={member.slug}
                member={member}
                large
              />
            ))}
          </div>

        </div>

        {/* Executive Leadership */}
        <div className="mb-20">

          <h3 className="text-3xl font-bold text-center text-[#1E1B4B] mb-10">
            Executive Leadership
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {executives.map((member) => (
              <TrusteeCard
                key={member.slug}
                member={member}
              />
            ))}
          </div>

        </div>

        {/* Other Trustees */}
        <div>

          <h3 className="text-3xl font-bold text-center text-[#1E1B4B] mb-10">
            Other Trustees
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((member) => (
              <TrusteeCard
                key={member.slug}
                member={member}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ManagementBoard;
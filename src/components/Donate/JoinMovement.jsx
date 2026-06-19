import { Link } from "react-router-dom";

function JoinMovement() {
  return (
    <section
      className="
        py-28
        bg-gradient-to-r
        from-violet-900
        via-violet-800
        to-purple-700
      "
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          You Don't Need To Donate To Make A Difference
        </h2>

        <p className="text-violet-100 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
          The strongest movements are built by people who believe
          in a shared vision. Your ideas, skills, time, and commitment
          can help shape the future of UOV Foundation Trust.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <Link
            to="/membership"
            className="
              bg-white
              text-violet-700
              px-8
              py-4
              rounded-xl
              font-semibold
            "
          >
            Become A Member
          </Link>

          <Link
            to="/contact"
            className="
              border-2
              border-white
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
            "
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default JoinMovement;
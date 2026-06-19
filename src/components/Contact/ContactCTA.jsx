import { Link } from "react-router-dom";

function ContactCTA() {
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

        <span className="text-violet-200 uppercase tracking-wider font-semibold">
          Let's Create Change Together
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          Every Connection Matters
        </h2>

        <p className="text-violet-100 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
          Every volunteer, supporter, member, and partner contributes
          to building a stronger and more inclusive society.
          Together, we can create meaningful change.
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
            to="/our-work"
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
            View Our Work
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;
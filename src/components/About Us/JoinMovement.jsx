function JoinMovement() {
  return (
    <section
      className="
        py-28
        bg-gradient-to-r
        from-violet-800
        via-violet-700
        to-purple-700
      "
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-violet-200 uppercase tracking-wider font-semibold">
          Join The Movement
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          The Future is Built by Ordinary People
        </h2>

        <p className="text-violet-100 text-lg mt-8 leading-relaxed max-w-3xl mx-auto">
          UOV Foundation believes that meaningful change does not
          begin with institutions alone—it begins with people.
          Every volunteer, member, supporter, and community leader plays
          a role in building a more compassionate, educated, and empowered society.
        </p>

        <p className="text-violet-100 text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
          Together, we can create opportunities, strengthen communities,
          and contribute to a future where social progress is driven by
          collective responsibility and shared purpose.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <button
            onClick={() => (window.location.href = "/membership")}
            className="
              bg-white
              text-violet-700
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Become a Member
          </button>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="
              border-2
              border-white
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-violet-700
              transition-all
              duration-300
            "
          >
            Partner With Us
          </button>

        </div>

      </div>
    </section>
  );
}

export default JoinMovement;
function MembershipHero() {
  return (
    <section
      className="
        relative
        pt-40
        pb-24
        bg-gradient-to-br
        from-violet-900
        via-violet-800
        to-purple-700
        overflow-hidden
      "
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <span className="inline-block bg-white/10 backdrop-blur-md text-violet-100 px-5 py-2 rounded-full text-sm font-medium">
          Membership
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mt-8">
          Join UOV Foundation Today
        </h1>

        <p className="text-xl md:text-2xl text-violet-100 mt-8 max-w-4xl mx-auto leading-relaxed">
          Become part of a movement dedicated to empowering people,
          educating communities, and elevating lives through collective action. Let's grow together.
        </p>

        <div className="mt-12">

          <a
            href="#apply"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-white
              text-violet-700
              px-10
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Apply Now
          </a>

        </div>

        <div className="w-32 h-1 bg-white mx-auto mt-10 rounded-full"></div>

      </div>
    </section>
  );
}

export default MembershipHero;
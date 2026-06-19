function ApplyMembership() {
  return (
    <section
      id = "apply"
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
          Apply Today
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
          Join the UOV Family
        </h2>

        <p className="text-violet-100 text-lg mt-8 leading-relaxed max-w-3xl mx-auto">
          Every meaningful movement begins with people who choose to
          make a difference. Become part of UOV Foundation and
          help build a more compassionate, inclusive, and progressive society.
        </p>

        <div className="mt-12">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcDTnmexTKV9_bmfV-QtXcGlVbpTnUij0vUTdgTx3w3oOlgQ/viewform"
            target="_blank"
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
            Fill Application Form Now 
          </a>

        </div>

      </div>
    </section>
  );
}

export default ApplyMembership;
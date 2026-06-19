function AnnouncementBanner() {
  return (
    <section
      className="
        bg-gradient-to-r
        from-violet-700
        to-purple-600
        py-6
      "
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-white text-xl md:text-2xl font-bold mt-1">
              We are actively recuiting Members, Volunteers for our mission!
            </h3>

            <p className="text-violet-100 mt-2 max-w-3xl">
              Please Join Us immediately to be a part of the change.
            </p>

          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcDTnmexTKV9_bmfV-QtXcGlVbpTnUij0vUTdgTx3w3oOlgQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white
              text-violet-700
              px-6
              py-3
              rounded-xl
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            Join Us →
          </a>

        </div>

      </div>
    </section>
  );
}

export default AnnouncementBanner;
function Lathika() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/trustees/lathika.png"
                alt="Miss. Lathika"
                className="
                  w-full
                  max-w-md
                  rounded-3xl
                  shadow-2xl
                  object-cover
                "
              />
            </div>

            {/* Content */}
            <div>
              <span
                className="
                  inline-block
                  bg-white/10
                  backdrop-blur-md
                  text-violet-100
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                Director - Projects & Strategic Initiatives
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
                Miss. Lathika, B.B.A., M.B.A.
              </h1>

              <h2 className="text-2xl text-violet-100 mt-4">
                Director - Projects & Strategic Initiatives
              </h2>

              <p className="text-violet-100 text-lg mt-8 leading-relaxed">
                A strategic contributor focused on planning, coordinating, and
                supporting initiatives that turn the foundation's service
                vision into meaningful action.
              </p>

              <div className="mt-8">
                <span
                  className="
                    bg-white
                    text-violet-700
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Ungalil Oruvan Vidiyal Foundation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lathika;

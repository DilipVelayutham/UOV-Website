import { Link } from "react-router-dom";

function GalleryCollections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Explore Our Journey
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Browse through our visual archives and discover the service,
            leadership, and community engagement efforts that shaped
            UOV Foundation.
          </p>

        </div>

        {/* Roots of UOV Collection */}
        <Link
          to="/gallery/roots-of-uov"
          className="
            block
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          {/* Cover Image */}
          <div className="relative">

            <img
              src="/gallery/covers/roots-of-uov.png"
              alt="Roots of UOV"
              className="
                w-full
                h-[350px]
                md:h-[450px]
                object-cover
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/30
                to-transparent
              "
            ></div>

            {/* Content Over Image */}
            <div className="absolute bottom-8 left-8 right-8">

              <span
                className="
                  inline-block
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                Community Service Archive
              </span>

              <h3 className="text-4xl md:text-6xl font-bold text-white mt-4">
                Roots of UOV
              </h3>

              <p className="text-violet-100 text-lg mt-2">
                2020 – 2026
              </p>

            </div>

          </div>

          {/* Footer */}
          <div className="p-8 md:p-10">

            <p className="text-gray-600 leading-relaxed text-lg">
              A visual archive showcasing community service activities,
              public welfare initiatives, leadership efforts, and
              grassroots engagement carried out by the Founder and
              Trustees before the establishment of UOV Foundation.
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-violet-100
                  text-violet-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  w-fit
                "
              >
                16 Photos
              </span>

              <span className="text-violet-700 font-semibold text-lg">
                View Collection →
              </span>

            </div>

          </div>

        </Link>

        {/*Voice Of People*/}
        <Link
          to="/gallery/voice-of-people"
          className="
            block
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          {/* Cover Image */}
          <div className="relative">

            <img
              src="/gallery/covers/voice-of-people.jpeg"
              alt="Voice Of People"
              className="
                w-full
                h-[350px]
                md:h-[450px]
                object-cover
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/30
                to-transparent
              "
            ></div>

            {/* Content Over Image */}
            <div className="absolute bottom-8 left-8 right-8">

              <span
                className="
                  inline-block
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                Community Service Archive
              </span>

              <h3 className="text-4xl md:text-6xl font-bold text-white mt-4">
                Voice Of People
              </h3>

              <p className="text-violet-100 text-lg mt-2">
                2026
              </p>

            </div>

          </div>

          {/* Footer */}
          <div className="p-8 md:p-10">

            <p className="text-gray-600 leading-relaxed text-lg">Solving People's Queries and Complaints by Reporting to Honourable Member of Legislative Assembly of Madhavaram Assembly Constituency, demanding them to solve the issues.</p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-violet-100
                  text-violet-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  w-fit
                "
              >
                12 Photos
              </span>

              <span className="text-violet-700 font-semibold text-lg">
                View Collection →
              </span>

            </div>

          </div>

        </Link>

      </div>
    </section>
  );
}

export default GalleryCollections;
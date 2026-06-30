import { useState } from "react";

function VoiceOfPeople() {
  const images = Array.from(
    { length: 12 },
    (_, i) => `/gallery/voice-of-people/${i + 1}.jpeg`
  );

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/10 text-violet-100 px-5 py-2 rounded-full text-sm">
            Community Service Archive
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-8">
            Voice Of People
          </h1>

          <p className="text-violet-100 text-xl mt-6">
            2026
          </p>

          <p className="text-violet-100 max-w-3xl mx-auto mt-8">
            Solving People's Queries and Complaints by Reporting to Honourable Member of Legislative Assembly of Madhavaram Assembly Constituency, demanding them to solve the issues.
          </p>

        </div>

      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">

            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Voice Of People ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className="
                  mb-5
                  rounded-2xl
                  shadow-md
                  cursor-pointer
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  w-full
                "
              />
            ))}

          </div>

        </div>

      </section>

      {/* Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-6
          "
        >

          <button
            className="
              absolute
              top-6
              right-8
              text-white
              text-4xl
            "
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-2xl
            "
          />

        </div>
      )}
    </>
  );
}

export default VoiceOfPeople;
import { Link } from "react-router-dom";

function Seethalakshmi() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">

              <img
                src="/trustees/SeethaLakshmi/Profile.png"
                alt="Mrs. R. Seethalakshmi"
                className="
                  w-full
                  max-w-md
                  rounded-3xl
                  shadow-2xl
                  object-cover
                "
              />

            </div>

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
                Chief Advisor & Mentor
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
                Mrs. R. Seethalakshmi, B.Ed., M.A.
              </h1>

              <h2 className="text-2xl text-violet-100 mt-4">
                M.A., B.Ed.
              </h2>

              <p className="text-violet-100 text-lg mt-8 leading-relaxed">
                An experienced educator, mentor, and leader with over
                35 years of service in education, dedicated to nurturing
                young minds and promoting values of discipline,
                compassion, and social responsibility.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                About
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                A Life Dedicated to Education & Service
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Mrs. R. Seethalakshmi is an educator with more than
                35 years of teaching experience and currently serves
                as the Head of Department at Velammal International School.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Throughout her professional journey, she has dedicated
                herself to nurturing students, guiding young minds,
                and promoting the values of education, discipline,
                and social responsibility.
              </p>

            </div>

            <img
              src="/trustees/Seethalakshmi/1.jpg"
              alt="About Seethalakshmi"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <img
              src="/trustees/Seethalakshmi/2.jpg"
              alt="Journey"
              className="rounded-3xl shadow-xl"
            />

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Personal Journey
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Strength Through Adversity
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Life presented many challenges, yet she faced each one
                with courage and determination. After the loss of her
                husband, she continued her professional journey while
                raising her two daughters and caring for her father.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Through perseverance, resilience, and unwavering
                commitment, she successfully fulfilled her family
                responsibilities while continuing to serve students
                and society.
              </p>

            </div>

            

          </div>

        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Professional Highlights
            </span>

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Experience & Leadership
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "35+ Years in Education",
              "Head of Department",
              "Mentor & Advisor",
              "Student Development Leader",
              "Women Empowerment Advocate",
              "Community Service Supporter",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#F8F5FF]
                  rounded-3xl
                  p-8
                  text-center
                  shadow-md
                "
              >
                <h3 className="text-xl font-bold text-[#1E1B4B]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Vision & Role
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Guiding The Next Generation
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Her lifelong belief in service and social responsibility
                inspired her to join the Ungalil Oruvan Vidiyal Foundation
                as Chief Advisor and Mentor.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                She is committed to guiding young people to become
                responsible citizens, compassionate leaders, and active
                contributors to society through mentorship and service.
              </p>

            </div>

            <img
              src="/trustees/Seethalakshmi/3.jpg"
              alt="Vision"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Areas of Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Areas of Impact
            </span>

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Service & Contribution
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Educational Leadership",
              "Student Mentorship",
              "Women Empowerment",
              "Character Development",
              "Community Service",
              "Youth Guidance",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#F8F5FF]
                  rounded-3xl
                  p-8
                  text-center
                  shadow-md
                "
              >
                <h3 className="text-xl font-bold text-[#1E1B4B]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Message */}
      <section
        className="py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/trustees/Seethalakshmi/Profile.jpeg')",
        }}
      >
        <div className="bg-black/70 py-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-white">
              Message To The Youth
            </h2>

            <blockquote className="text-2xl text-violet-100 italic mt-10 leading-relaxed">
              "Never allow difficulties to limit your dreams.
              Let challenges strengthen your character,
              education expand your vision,
              and service give purpose to your life."
            </blockquote>

            <p className="text-violet-100 mt-10 text-lg leading-relaxed">
              True strength is not measured by the challenges we face,
              but by our courage to rise above them and help others
              along the way.
            </p>

            <div className="mt-10">

              <h3 className="text-white text-2xl font-bold">
                Mrs. R. Seethalakshmi
              </h3>

              <p className="text-violet-200 mt-2">
                Chief Advisor & Mentor
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Back Button */}
      <section className="py-16 bg-white">
        <div className="text-center">

          <Link
            to="/trustees"
            className="
              inline-flex
              items-center
              bg-violet-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-violet-800
              transition-all
            "
          >
            ← Back To Leadership Team
          </Link>

        </div>
      </section>
    </>
  );
}

export default Seethalakshmi;
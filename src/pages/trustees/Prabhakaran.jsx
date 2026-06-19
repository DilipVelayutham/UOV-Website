import { Link } from "react-router-dom";
import Profile from "/trustees/Prabhakaran/Profile.jpeg";

function Prabhakaran() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="flex justify-center">

              <img
                src= {Profile}
                alt="Er. R. Prabhakaran"
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
                Founder & Chairman
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
                Er. R. Prabhakaran, B.Tech., M.E., (Ph.D)
              </h1>

              <h2 className="text-2xl text-violet-100 mt-4">
                Founder, Chairman & Managing Trustee
              </h2>

              <p className="text-violet-100 text-lg mt-8 leading-relaxed">
                Educator, researcher, and social service enthusiast dedicated
                to empowering communities through education, civic awareness,
                and public welfare initiatives.
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

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            
            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                About The Founder
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                A Journey of Education, Research & Service
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                I am R. Prabhakaran, an educator, researcher, and social
                service enthusiast with over a decade of experience in the
                education sector. Since 2016, I have worked with students,
                families, and rural communities, helping them access
                educational opportunities, healthcare assistance, and
                government welfare schemes.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Through years of direct engagement with communities, I
                witnessed the challenges faced by ordinary citizens in
                accessing essential services and opportunities. These
                experiences inspired me to establish the Ungalil Oruvan
                Vidiyal Foundation.
              </p>

            </div>

            <img
              src="/trustees/Prabhakaran/2.png"
              alt="About Founder"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>
      {/* Journey Section */}
  <section className="py-24 bg-[#F8F5FF]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="text-violet-700 font-semibold uppercase tracking-wider">
        Journey
      </span>

      <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
        A Journey of Purpose & Service
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <img
          src="/trustees/Prabhakaran/3.png"
          alt="Journey"
          className="rounded-3xl shadow-xl"
        />

      </div>

      <div>

        <div className="space-y-8">

          <div className="border-l-4 border-violet-700 pl-6">

            <h3 className="text-xl font-bold text-[#1E1B4B]">
              Educational Foundation
            </h3>

            <p className="text-gray-600 mt-2">
              Pursued Information Technology and Engineering,
              building a strong academic and research-oriented
              foundation.
            </p>

          </div>

          <div className="border-l-4 border-violet-700 pl-6">

            <h3 className="text-xl font-bold text-[#1E1B4B]">
              Educator & Mentor
            </h3>

            <p className="text-gray-600 mt-2">
              Dedicated more than a decade to teaching,
              mentoring students, and helping young minds
              discover opportunities for growth.
            </p>

          </div>

          <div className="border-l-4 border-violet-700 pl-6">

            <h3 className="text-xl font-bold text-[#1E1B4B]">
              Community Service
            </h3>

            <p className="text-gray-600 mt-2">
              Worked closely with families and rural communities,
              helping them access education, healthcare support,
              and government welfare schemes.
            </p>

          </div>

          <div className="border-l-4 border-violet-700 pl-6">

            <h3 className="text-xl font-bold text-[#1E1B4B]">
              Founding UOV Foundation
            </h3>

            <p className="text-gray-600 mt-2">
              Inspired by years of grassroots service, he founded
              Ungalil Oruvan Vidiyal Foundation to create a
              structured platform for social development,
              empowerment, and civic engagement.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* Professional Background */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Professional Background
            </span>

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Qualifications & Experience
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "B.Tech (Information Technology)",
              "Master of Engineering (M.E.)",
              "Ph.D. Research Scholar",
              "10+ Years in Education",
              "Community Development Advocate",
              "Social Service Enthusiast",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
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

      {/* Vision Behind UOV */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Vision Behind UOV
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Why UOV Was Founded
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                The Trust was founded with a vision of bridging the gap
                between people and public institutions, ensuring that
                benefits, opportunities, and support reach those who need
                them most.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                UOV Foundation is committed to promoting education,
                social welfare, community development, and civic awareness
                while encouraging active citizenship and collective
                responsibility.
              </p>

            </div>

            <img
              src="/trustees/Prabhakaran/1.png"
              alt="Vision Behind UOV"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Areas of Impact
            </span>

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Service & Community Impact
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Education Support",
              "Healthcare Assistance",
              "Government Welfare Guidance",
              "Community Development",
              "Civic Awareness",
              "Youth Empowerment",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-8
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

      {/* Founder's Message */}
      <section
        className="py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/trustees/prabhakaran/message.jpg')",
        }}
      >
        <div className="bg-black/60 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-white">
              A Message From The Founder
            </h2>

            <blockquote className="text-2xl text-violet-100 leading-relaxed mt-10 italic">
              "Together, we can build an informed, empowered,
              and progressive society where every ordinary citizen
              becomes a force for positive change."
            </blockquote>

            <p className="text-violet-100 mt-10 leading-relaxed">
              If you have the heart to serve, the courage to lead,
              and the desire to make a difference, join us.
              Let us transform compassion into action, awareness
              into empowerment, and service into social progress.
            </p>

            <div className="mt-10 text-white">

              <h3 className="text-2xl font-bold">
                Er. R. Prabhakaran
              </h3>

              <p className="mt-2">
                Founder, Chairman & Managing Trustee
              </p>

              <p className="mt-6 text-violet-200 font-semibold">
                Ordinary People. United Purpose. Extraordinary Change.
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

export default Prabhakaran;
import { Link } from "react-router-dom";
import Profile from "/trustees/Dilaludin/Profile.jpg";

function Dilaludin() {
  const responsibilities = [
    "Program Coordination",
    "Volunteer Management",
    "Community Outreach",
    "Administrative Leadership",
    "Stakeholder Engagement",
    "Organizational Development",
  ];

  const contributions = [
    "Community Welfare",
    "Volunteer Development",
    "Social Awareness",
    "Public Engagement",
    "Youth Participation",
    "Trust Operations",
  ];

  return (
    <>

    {/* Hero Section */}
<section className="pt-40 pb-24 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Profile Image */}
      <div className="flex justify-center">

        <img
          src={Profile}
          alt="Mr. Dilaludin"
          className="
            w-full
            h-100
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
          General Secretary
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
          Mr. Dilaludin, B.Sc
        </h1>

        <h2 className="text-2xl text-violet-100 mt-4">
          General Secretary
        </h2>

        <p className="text-violet-100 text-lg mt-8 leading-relaxed">
          A dedicated community leader committed to organizational
          excellence, social development, and strengthening public
          participation through service, collaboration, and
          community engagement.
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
              {/* Responsibilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <img
              src="/trustees/Dilaludin/1.jpg"
              alt="Responsibilities"
              className="rounded-3xl shadow-xl"
            />

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Role & Responsibilities
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Driving the Mission Forward
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed">
                As General Secretary, he oversees operational coordination,
                member engagement, volunteer management, and the execution
                of organizational initiatives.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#F8F5FF]
                      p-4
                      rounded-xl
                      text-center
                      font-medium
                      text-[#1E1B4B]
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>
            <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Vision For Community Development
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Building Stronger Communities Through Collective Action
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Meaningful social progress happens when people work
                together with a shared purpose.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Through collaboration, awareness, volunteerism, and
                service, communities can create sustainable and
                long-lasting positive change.
              </p>

            </div>

            <img
              src="/trustees/Dilaludin/4.jpg"
              alt="Vision"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>
            <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-violet-700 font-semibold uppercase tracking-wider">
              Areas of Contribution
            </span>

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Service & Organizational Impact
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {contributions.map((item, index) => (
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
            <section
        className="py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/trustees/Dilaludin/Profile.jpeg')",
        }}
      >
        <div className="bg-black/70 py-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-white">
              Message To Members
            </h2>

            <blockquote className="text-2xl text-violet-100 italic mt-10 leading-relaxed">
              "True progress is achieved when ordinary people
              come together with extraordinary commitment
              towards a common goal."
            </blockquote>

            <p className="text-violet-100 mt-10 leading-relaxed">
              Every member, volunteer, and supporter plays a vital
              role in the success of our mission.
            </p>

            <p className="text-violet-100 mt-6 leading-relaxed">
              Together, we can create stronger communities,
              greater opportunities, and a brighter future
              for generations to come.
            </p>

            <div className="mt-10">

              <h3 className="text-white text-2xl font-bold">
                Mr. Dilaludin
              </h3>

              <p className="text-violet-200 mt-2">
                General Secretary
              </p>

            </div>

          </div>

        </div>
      </section>
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

export default Dilaludin;
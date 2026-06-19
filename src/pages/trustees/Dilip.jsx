import { Link } from "react-router-dom";
import Profile from "/trustees/Dilip/Profile.png";

function DilipVelayutham() {
  const achievements = [
    "Executive Secretary - UOV Foundation",
    "Computer Science Engineering Student",
    "Project Developer",
    "Technology Enthusiast",
    "Community Volunteer",
    "Youth Leader",
  ];

  const impactAreas = [
    "Youth Leadership",
    "Technology & Innovation",
    "Community Service",
    "Digital Awareness",
    "Education Support",
    "Volunteer Engagement",
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
                alt="Dilip Velayutham"
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

              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
                Mr. Dilip Velayutham, B.E.
              </h1>

              <h2 className="text-2xl text-violet-100 mt-4">
                Executive Secretary
              </h2>

              <p className="text-violet-100 text-lg mt-8 leading-relaxed">
                Student • Builder • Technology Enthusiast • Community Volunteer
              </p>

              <p className="text-violet-200 mt-6 leading-relaxed max-w-2xl">
                Driven by curiosity, innovation, and service, I believe that
                technology and leadership can be powerful tools for creating
                meaningful social impact. My mission is to inspire young people
                to learn, build, and contribute towards a better future.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

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
      {/* About Executive Secretary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                About The Executive Secretary
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                A Journey Driven by Curiosity & Purpose
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Dilip Velayutham is a Computer Science Engineering student,
                technology enthusiast, and aspiring changemaker who believes
                that learning should go beyond classrooms and create meaningful
                impact in the real world.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                His interests span technology, innovation, leadership,
                personal development, and community service. Whether building
                projects, exploring new ideas, learning emerging technologies,
                or contributing to social initiatives, he continuously seeks
                opportunities to grow and make a difference.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                As the Executive Secretary of UOV Foundation, he works
                to connect the energy of youth with the mission of social
                development, encouraging young people to participate in
                community service, leadership, and nation-building.
              </p>

            </div>

            {/* Image */}
            <img
              src="/trustees/Dilip/1.jpg"
              alt="About Dilip"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <img
              src="/trustees/Dilip/3.jpg"
              alt="Personal Journey"
              className="rounded-3xl shadow-xl"
            />

            {/* Content */}
            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Personal Journey
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Exploring, Learning & Building
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                My journey began with a simple curiosity — understanding how
                things work and how ideas can be transformed into reality.
                Over time, that curiosity evolved into a passion for learning,
                building projects, exploring technology, and creating meaningful
                solutions.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Every project, challenge, and experience has taught me that
                growth comes not only from knowledge but also from action.
                Whether in technology, leadership, or community service,
                I believe in continuously learning, adapting, and improving.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Today, I continue my journey as a student, builder, volunteer,
                and leader, striving to combine innovation and service to
                create positive impact for people and communities.
              </p>

              {/* Timeline */}
              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-violet-700 rounded-full mt-2"></div>

                  <div>
                    <h3 className="font-bold text-[#1E1B4B]">
                      Curious Student
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Developed a passion for learning and understanding the world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-violet-700 rounded-full mt-2"></div>

                  <div>
                    <h3 className="font-bold text-[#1E1B4B]">
                      Technology Explorer
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Explored software, cloud technologies, and innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-violet-700 rounded-full mt-2"></div>

                  <div>
                    <h3 className="font-bold text-[#1E1B4B]">
                      Project Builder
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Built projects that transformed ideas into practical solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-violet-700 rounded-full mt-2"></div>

                  <div>
                    <h3 className="font-bold text-[#1E1B4B]">
                      Community Volunteer
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Participated in service activities focused on helping others.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-violet-700 rounded-full mt-2"></div>

                  <div>
                    <h3 className="font-bold text-[#1E1B4B]">
                      Executive Secretary
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Working to connect youth leadership with community development.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Achievements & Milestones
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Learning Through Action
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Every achievement represents a step in my journey of learning,
                leadership, innovation, and service. These experiences continue
                to shape my perspective and inspire me to pursue greater impact.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-10">

                {[
                  "Executive Secretary - UOV Foundation",
                  "Computer Science Engineering Student",
                  "Full Stack Development Intern",
                  "Project Developer",
                  "Hackathon Participant",
                  "Technology Enthusiast",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                bg-[#F8F5FF]
                p-5
                rounded-2xl
                shadow-sm
                hover:shadow-md
                transition-all
              "
                  >
                    <h3 className="font-semibold text-[#1E1B4B]">
                      {item}
                    </h3>
                  </div>
                ))}

              </div>

            </div>

            {/* Image */}
            <img
              src="/trustees/Dilip/2.jpeg"
              alt="Achievements"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Profession */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <img
              src="/trustees/Dilip/4.jpeg"
              alt="Profession"
              className="rounded-3xl shadow-xl"
            />

            {/* Content */}
            <div>
              
              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Profession
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Technology, Learning & Leadership
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                I am currently pursuing Computer Science Engineering with
                a strong interest in Software Engineering, Cloud Computing,
                and emerging technologies. My passion lies in building
                practical solutions that solve real-world problems while
                continuously expanding my technical knowledge.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Beyond academics, I actively explore project development,
                innovation, entrepreneurship, digital technologies,
                leadership, and community engagement. I believe learning
                should not be limited to classrooms but should be applied
                to create meaningful value for society.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                My goal is to become a versatile builder and problem solver
                capable of combining technology, creativity, and service
                to contribute positively to both industry and society.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Software Engineering",
                  "Cloud Computing",
                  "Project Development",
                  "Technology Innovation",
                  "Leadership",
                  "Continuous Learning",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="
                px-4
                py-2
                bg-white
                text-violet-700
                rounded-full
                font-medium
                shadow-sm
              "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div>

              <span className="text-violet-700 font-semibold uppercase tracking-wider">
                Vision
              </span>

              <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
                Building a Future Driven by Learning, Innovation & Service
              </h2>

              <p className="text-gray-600 mt-8 leading-relaxed">
                I believe that true progress is achieved when knowledge,
                innovation, and social responsibility come together.
                Technology alone cannot change the world; it is people
                with purpose who transform ideas into meaningful impact.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                My vision is to inspire young people to embrace lifelong
                learning, develop practical skills, and actively contribute
                to their communities. Every individual possesses the potential
                to create positive change when guided by curiosity,
                discipline, and compassion.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Through education, technology, leadership, and community
                engagement, I aspire to help build a generation that is not
                only professionally capable but also socially responsible,
                innovative, and committed to serving society.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-[#F8F5FF] p-5 rounded-2xl">
                  <h3 className="font-bold text-[#1E1B4B]">
                    Lifelong Learning
                  </h3>
                </div>

                <div className="bg-[#F8F5FF] p-5 rounded-2xl">
                  <h3 className="font-bold text-[#1E1B4B]">
                    Youth Leadership
                  </h3>
                </div>

                <div className="bg-[#F8F5FF] p-5 rounded-2xl">
                  <h3 className="font-bold text-[#1E1B4B]">
                    Innovation
                  </h3>
                </div>

                <div className="bg-[#F8F5FF] p-5 rounded-2xl">
                  <h3 className="font-bold text-[#1E1B4B]">
                    Social Impact
                  </h3>
                </div>

              </div>

            </div>

            {/* Image */}
            <img
              src="/trustees/Dilip/5.jpeg"
              alt="Vision"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Areas of Impact */}
      <section className="py-24 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#1E1B4B] mt-4">
              Creating Change Through Action
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              My efforts are focused on empowering individuals,
              encouraging innovation, and building communities
              that grow through knowledge, leadership, and service.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Youth Leadership",
                description:
                  "Encouraging young people to take initiative, develop leadership skills, and contribute to society."
              },
              {
                title: "Technology & Innovation",
                description:
                  "Exploring technology as a tool for solving problems and creating meaningful solutions."
              },
              {
                title: "Community Service",
                description:
                  "Participating in initiatives that support people, communities, and social development."
              },
              {
                title: "Education Support",
                description:
                  "Promoting learning opportunities and helping individuals achieve their potential."
              },
              {
                title: "Digital Awareness",
                description:
                  "Encouraging responsible and effective use of technology in everyday life."
              },
              {
                title: "Volunteer Engagement",
                description:
                  "Building a culture of participation, teamwork, and service among young volunteers."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
              >
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-violet-700 rounded-full"></div>
                </div>

                <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
      
      {/* Message To The Youth */}
      <section
        className="py-28 bg-cover bg-center"
        style={{
          backgroundImage: "url('/trustees/Dilip/Profile.jpeg')",
        }}
      >
        <div className="bg-black/70 py-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Message To The Youth
            </h2>

            <blockquote className="text-2xl md:text-3xl text-violet-100 italic mt-12 leading-relaxed">
              "Don't wait to become successful before making a difference.
              Start making a difference, and success will follow."
            </blockquote>

            <div className="w-24 h-1 bg-violet-400 mx-auto mt-10 rounded-full"></div>

            <p className="text-violet-100 text-lg mt-10 leading-relaxed">
              We live in a world filled with opportunities to learn,
              build, explore, and contribute. Never underestimate the
              power of curiosity, hard work, and consistency.
            </p>

            <p className="text-violet-100 text-lg mt-6 leading-relaxed">
              Every project you create, every skill you develop,
              every challenge you overcome, and every person you help
              becomes a part of your journey and your impact on the world.
            </p>

            <p className="text-violet-100 text-lg mt-6 leading-relaxed">
              Dream boldly. Learn continuously. Build fearlessly.
              Serve selflessly. The future belongs to those who are
              willing to grow, adapt, and take responsibility for
              creating positive change.
            </p>

            <div className="mt-14">

              <h3 className="text-white text-2xl font-bold">
                Dilip Velayutham
              </h3>

              <p className="text-violet-300 mt-2">
                Executive Secretary
              </p>

              <p className="text-violet-400 mt-1">
                Ungalil Oruvan Vidiyal Foundation
              </p>

            </div>

            <div className="mt-10">

              <p className="text-violet-200 text-xl font-medium">
                Keep Learning. Keep Building. Keep Serving.
              </p>

            </div>

          </div>

        </div>
      </section>
      {/* Back To Trustees */}
      {/* Back To Trustees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h3 className="text-2xl font-bold text-[#1E1B4B]">
              Explore Our Leadership Team
            </h3>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet the dedicated individuals who work together to advance
              the mission, vision, and values of Ungalil Oruvan Vidiyal
              Foundation.
            </p>

            <Link
              to="/trustees"
              className="
          inline-flex
          items-center
          gap-2
          mt-8
          bg-violet-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          hover:bg-violet-800
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
              ← Back To Leadership Team
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default DilipVelayutham;
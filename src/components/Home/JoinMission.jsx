function JoinMission() {
  return (
    <section id="join" data-aos="fade-up" className="py-24 bg-gradient-to-r from-violet-700 to-purple-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Become a Part of the Change
        </h2>

        <p className="mt-6 text-violet-100 text-lg max-w-3xl mx-auto">
          Join UOV Foundation and contribute towards empowering
          individuals, educating communities, and elevating lives.
          Together, we can create a meaningful and lasting impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button onClick = {() => window.location.href = "/membership"} className="bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
            Join UOV Today
          </button>

          <button onClick = {() => window.location.href = "/donate"} className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-violet-700 transition duration-300">
            Donate Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default JoinMission;
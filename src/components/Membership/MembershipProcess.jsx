function MembershipProcess() {
  const steps = [
    "Complete the Google Form",
    "Submit the Form",
    "Membership Review and Approval",
    "Welcome to UOV",
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Membership Process
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center"
            >

              <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-[#1E1B4B] mt-5">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MembershipProcess;
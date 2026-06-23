import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactInfo() {
  const contacts = [
    {
      icon: <FaPhoneAlt />,
      title: "PR Trustee - A Sanjay Sharma",
      value: "+91 73971 12317",
    },
    {
      icon: <FaPhoneAlt />,
      title: "YA Secretary - S Aravindh",
      value: "+91 93607 49442"
    },
    {
      icon: <FaEnvelope />,
      title: "Official Mail",
      value: "uovfoundationtrust@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Avadi, TN, India",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Contact Information
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {contacts.map((contact, index) => (
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
              <div className="w-16 h-16 mx-auto bg-violet-100 rounded-2xl flex items-center justify-center text-violet-700 text-2xl mb-6">
                {contact.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">
                {contact.title}
              </h3>

              <p className="text-gray-600">
                {contact.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;
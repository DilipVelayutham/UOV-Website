import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

function SocialConnect() {
  const socials = [
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://whatsapp.com/channel/0029Vb8Zxfa2kNFrjfbLcr30"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/prabhakaran_me?igsh=dngzcXJ1Znh4dTFl",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@uov_trust",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=61590752638427",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      link: "https://x.com/uov_trust"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F5FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="text-violet-700 font-semibold uppercase tracking-wider">
          Connect With Us
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
          Follow Our Journey
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
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
              <div className="text-4xl text-violet-700 mb-4 flex justify-center">
                {social.icon}
              </div>

              <h3 className="font-semibold text-[#1E1B4B]">
                {social.name}
              </h3>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SocialConnect;
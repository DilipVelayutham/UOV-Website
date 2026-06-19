import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Trust Info */}
          <div>

            <h3 className="text-2xl font-bold">
              UOV Foundation
            </h3>

            <p className="mt-4 text-gray-300">
              Empower • Educate • Elevate
            </p>

            <p className="mt-4 text-gray-400">
              Creating positive social impact through education,
              community engagement, and humanitarian initiatives.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-300">

              <li><a href="/about">About Us</a></li>
              <li><a href="/trustees">Trustees</a></li>
              <li><a href="/membership">Membership</a></li>
              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-gray-300">

              <p className="flex items-center gap-2">
                <FaEnvelope />
                uovfoundationtrust@gmail.com
              </p>

            </div>

            <div className="flex gap-4 mt-6 text-xl">

              <a href="https://www.instagram.com/prabhakaran_me?igsh=dngzcXJ1Znh4dTFl"><FaInstagram className="cursor-pointer hover:text-violet-300" /></a>
              <a href="https://www.facebook.com/profile.php?id=61590752638427"><FaFacebook className="cursor-pointer hover:text-violet-300" /></a>
              <a href="https://x.com/uov_trust"><FaTwitter className="cursor-pointer hover:text-violet-300" /></a>

            </div>

          </div>

        </div>

        <div className="border-t border-violet-800 mt-12 pt-6 text-center text-gray-400">

          © {new Date().getFullYear()} UOV Foundation Trust.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
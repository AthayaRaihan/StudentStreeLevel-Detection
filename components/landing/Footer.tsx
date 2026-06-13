import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-cyan-800/30 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">StressDetect</h3>
            <p className="text-slate-400 max-w-xs">
              An expert system for early detection of student stress levels,
              promoting mental well-being in academia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">
              Contact
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <FiMail />
                <span>contact@stressdetect.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin />
                <span>123 University Ave, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} StressDetect. All rights reserved.
            An academic project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

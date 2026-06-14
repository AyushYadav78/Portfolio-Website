
// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll function
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
//         isScrolled
//           ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="text-white py-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <span className="text-white">Ayush</span>
//           <span className="text-[#8245ec]">/</span>
//           <span className="text-white">Yadav</span>
//           <span className="text-[#8245ec]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-xl font-medium text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-300 ${
//                 activeSection === item.id ? "text-[#8245ec]" : ""
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-5">
//           <a
//             href="https://github.com/AyushYadav78"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
//           >
//             <FaGithub size={30} />
//           </a>

//           <a
//             href="https://www.linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
//           >
//             <FaLinkedin size={30} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-4xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-4xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg md:hidden">
//           <ul className="flex flex-col items-center space-y-5 py-6 text-xl font-medium text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-300 ${
//                   activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}

//             <div className="flex space-x-6 pt-2">
//               <a
//                 href="https://github.com/AyushYadav78"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-[#8245ec]"
//               >
//                 <FaGithub size={30} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-[#8245ec]"
//               >
//                 <FaLinkedin size={30} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ["about", "skills", "work", "education", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div
            onClick={() => handleMenuItemClick("about")}
            className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer tracking-wide select-none"
          >
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Ayush</span>
            <span className="text-[#8245ec]"> / </span>
            <span className="text-white">Yadav</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-lg lg:text-xl font-medium text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition-all duration-300 hover:text-[#8245ec] ${
                    activeSection === item.id
                      ? "text-[#8245ec]"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://github.com/AyushYadav78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition duration-300"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#050414]/95 backdrop-blur-lg shadow-xl border-t border-gray-800">
            <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`transition-all duration-300 hover:text-[#8245ec] ${
                      activeSection === item.id
                        ? "text-[#8245ec]"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <div className="flex items-center gap-6 pt-2">
                <a
                  href="https://github.com/AyushYadav78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec] transition duration-300"
                >
                  <FaGithub size={30} />
                </a>

                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec] transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

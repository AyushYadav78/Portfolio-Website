// import React from 'react'
// // import ReactTypingEffect from 'react-typing-effect'
// import { TypeAnimation } from "react-type-animation";
// import Tilt from 'react-parallax-tilt';
// import Profile from '../../assets/Profile.png'
// const About = () => {
//     return (
//         <div>
//             <section id="about" className='py-[7vw] lg:px-[20vw] font-sans mt-17 mt-18 md:mt-25 lg:mt-34'>
//                 <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
//                     <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
//                         <h1 className='text-4xl sm:text-6xl font-bold text-white mb-2 leading-tight'>
//                             Hii ,I am
//                         </h1>
//                         <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
//                             Ayush Yadav</h2>




//                         <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
//                             <span className="text-white">I am a </span>

//                             <TypeAnimation
//                                 sequence={[
//                                     "Full Stack Developer",
//                                     2000,
//                                     "Frontend Developer",
//                                     2000,
//                                     "Coder",
//                                     2000,
//                                 ]}
//                                 wrapper="span"
//                                 speed={50}
//                                 repeat={Infinity}
//                                 className="text-[#8245ec]"
//                             />
//                         </h3>
//                         {/* About Me Paragraph */}

//                         <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//                             I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have successfully completed a 45-day internship, where I gained hands-on experience in developing responsive web applications, building APIs, and working on real-world software development projects.

//                         </p>
//                         {/* Resume button */}
//                         <a
//                             href="/AYR.pdf"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//                             style={{
//                                 background: "linear-gradient(90deg, #8245ec, #a855f7)",
//                                 boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
//                             }}
//                         >
//                             DOWNLOAD RESUME
//                         </a>

//                     </div>

//                     {/* Right Side */}
//                     {/* Right Side */}
//                     <div className="md:w-1/2 flex justify-center md:justify-end">
//                         <Tilt
//                             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//                             tiltMaxAngleX={20}
//                             tiltMaxAngleY={20}
//                             perspective={1000}
//                             scale={1.05}
//                             transitionSpeed={1000}
//                             gyroscope={true}
//                         >
//                             <img
//                                 src={Profile}
//                                 alt="Tarun Kaushik"
//                                 className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                             />
//                         </Tilt>
//                     </div>



//                 </div>
//             </section>
//         </div>
//     )
// }

// export default About




import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import Profile from "../../assets/Profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 md:py-20 mt-20 md:mt-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-4">
            Ayush Yadav
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I am a Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React.js, and Node.js). I have successfully
            completed a 45-day internship where I gained hands-on experience in
            developing responsive web applications, building APIs, and working
            on real-world software development projects.
          </p>

          {/* Resume Button */}
          <a
            href="/AYR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 rounded-full text-white text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 15px rgba(130,69,236,0.6)",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
            className="
              w-52 h-52
              sm:w-64 sm:h-64
              md:w-80 md:h-80
              lg:w-[420px] lg:h-[420px]
              border-4 border-purple-700
              rounded-full
            "
          >
            <img
              src={Profile}
              alt="Ayush Yadav"
              className="w-full h-full rounded-full object-cover
              drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
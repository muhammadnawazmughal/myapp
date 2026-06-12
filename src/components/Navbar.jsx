// import { useState } from "react";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="flex items-center justify-between h-20">
        
//           <a href="#home" className="text-3xl font-bold text-blue-500">
//             Nawaz<span className="text-white">.</span>
//           </a>

//           <ul className="hidden md:flex items-center gap-8 text-white font-medium">
//             <li>
//               <a
//                 href="#home"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 Home
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#about"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 About
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#skills"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 Skills
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#projects"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 Projects
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <a
//             href="#contact"
//             className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition duration-300"
//           >
//             Hire Me
//           </a>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-white text-3xl"
//           >
//             {menuOpen ? <HiX /> : <HiMenuAlt3 />}
//           </button>
//         </div>

       
//         {menuOpen && (
//           <div className="flex item-center justify-between md:hidden bg-slate-900 rounded-xl mb-4 py-4">
//             <ul className="flex flex-col items-center gap-5 text-white font-medium">
//               <li>
//                 <a href="#home" onClick={() => setMenuOpen(false)}>
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a href="#about" onClick={() => setMenuOpen(false)}>
//                   About
//                 </a>
//               </li>

//               <li>
//                 <a href="#skills" onClick={() => setMenuOpen(false)}>
//                   Skills
//                 </a>
//               </li>

//               <li>
//                 <a href="#projects" onClick={() => setMenuOpen(false)}>
//                   Projects
//                 </a>
//               </li>

//               <li>
//                 <a href="#contact" onClick={() => setMenuOpen(false)}>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// // import { useState } from "react";
// // import { HiMenuAlt3, HiX } from "react-icons/hi";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [active, setActive] = useState("home");

// //   const links = ["home", "about", "skills", "projects", "contact"];

// //   return (
// //     <nav className="fixed top-0 left-0 w-full bg-slate-950/40 backdrop-blur-xl border-b border-white/10 z-50">
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
// //         <div className="flex items-center justify-between h-20">

// //           {/* Logo */}
// //           <a
// //             href="#home"
// //             className="text-3xl font-extrabold text-blue-500 tracking-wide"
// //           >
// //             Nawaz<span className="text-white">.</span>
// //           </a>

// //           {/* Desktop Menu */}
// //           <ul className="hidden md:flex items-center gap-10 text-white font-medium">
// //             {links.map((item) => (
// //               <li key={item}>
// //                 <a
// //                   href={`#${item}`}
// //                   onClick={() => setActive(item)}
// //                   className="relative group transition duration-300"
// //                 >
// //                   <span
// //                     className={`capitalize transition duration-300 ${
// //                       active === item
// //                         ? "text-blue-400"
// //                         : "text-white group-hover:text-blue-400"
// //                     }`}
// //                   >
// //                     {item}
// //                   </span>

// //                   {/* Smooth underline animation */}
// //                   <span
// //                     className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
// //                       active === item ? "w-full" : "w-0 group-hover:w-full"
// //                     }`}
// //                   ></span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Hire Button (Gradient Professional) */}
// //           <a
// //             href="#contact"
// //             className="hidden md:block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
// //           >
// //             Hire Me
// //           </a>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             className="md:hidden text-white text-3xl"
// //           >
// //             {menuOpen ? <HiX /> : <HiMenuAlt3 />}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {menuOpen && (
// //           <div className="md:hidden mt-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl py-6 shadow-lg">
// //             <ul className="flex flex-col items-center gap-6 text-white font-medium">
// //               {links.map((item) => (
// //                 <li key={item}>
// //                   <a
// //                     href={`#${item}`}
// //                     onClick={() => {
// //                       setActive(item);
// //                       setMenuOpen(false);
// //                     }}
// //                     className={`capitalize transition ${
// //                       active === item
// //                         ? "text-blue-400"
// //                         : "hover:text-blue-400"
// //                     }`}
// //                   >
// //                     {item}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full ">
        
        {/* Navbar Row */}
        <div className="flex items-center justify-between h-20 w-full">

          {/* Logo */}
          <a href="#home" className="text-3xl font-bold text-blue-500">
            Nawaz<span className="text-white"></span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>

          {/* Hire Button */}
          <a
            href="#contact"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 rounded-xl mt-3 py-5 shadow-lg">
            <ul className="flex flex-col items-center gap-5 text-white font-medium">

              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
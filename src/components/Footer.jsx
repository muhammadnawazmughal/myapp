const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Muhammad Nawaz
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              A passionate React JS Developer focused on building modern,
              responsive, and user-friendly web applications with clean code
              and attractive UI designs.
            </p>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-500 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p> m.nawaz.0211@gmail.com</p>

              <p> +92 3324539572</p>

              <p> Karachi, Pakistan</p>
            </div>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                FB
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-600 transition"
              >
                instagram
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                linkin
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-500 transition"
              >
                tiktok
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-slate-800 my-8"></div>

       
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">
          <p>
            © 2026 Muhammad Nawaz. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with  using React JS & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
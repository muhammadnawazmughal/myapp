

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
         
          <div>
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-5">
               Welcome to My Portfolio
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm
              <span className="pl-2 text-blue-500">
                 Muhammad Nawaz
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mt-4">
              Frontend Developer
            </h2>

            <p className="text-gray-400 mt-6 leading-8 max-w-xl">
              I build modern, responsive, and user-friendly web applications
              using React JS, JavaScript, and Tailwind CSS. My focus is on
              creating clean UI, reusable components, and excellent user
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                download
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>


          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-blue-600/20 absolute blur-3xl"></div>

              <img
                src="/nawaz.png"
                alt="Muhammad Nawaz"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
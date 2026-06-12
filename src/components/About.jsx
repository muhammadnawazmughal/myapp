const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h4 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
              About Me
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              React JS Developer
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              I am a passionate Frontend Developer with experience in
              building responsive and modern web applications using
              React JS, JavaScript, HTML, CSS, and Tailwind CSS.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              I enjoy creating clean user interfaces, reusable components,
              and fast-loading websites that provide a great user
              experience across all devices.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Download CV
            </button>
          </div>

          {/* Right Side */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-600"></h3>
                <p className="text-gray-700 mt-2">fresh</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-700 mt-2">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-700 mt-2">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">100%</h3>
                <p className="text-gray-700 mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
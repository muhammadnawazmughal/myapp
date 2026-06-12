const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React JS + Tailwind CSS",
      desc: "Modern responsive personal portfolio website.",
      category: "React JS",
    },
    {
      title: "E-Commerce Website",
      tech: "React JS + Node.js",
      desc: "Full-stack online shopping platform with cart system.",
      category: "React JS",
    },
    {
      title: "Landing Page",
      tech: "HTML + CSS + JavaScript",
      desc: "Responsive business landing page with animations.",
      category: "HTML/CSS/JS",
    },
    {
      title: "UI Design (Figma)",
      tech: "Figma",
      desc: "Modern mobile app UI/UX design created in Figma.",
      category: "Figma",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="text-center mb-14">
        <h4 className="text-blue-600 font-semibold uppercase tracking-widest">
          My Work
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Featured Projects
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects in React JS, HTML/CSS,
          JavaScript and UI/UX design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="text-blue-500 font-medium mt-2">
              {project.tech}
            </p>

            <p className="text-gray-600 mt-4 leading-7">
              {project.desc}
            </p>

            <button className="mt-6 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
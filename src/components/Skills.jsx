
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaFigma,
  FaMicrosoft,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "MS Office", icon: <FaMicrosoft />, percent: 85 },
    { name: "Figma UI/UX", icon: <FaFigma />, percent: 75 },
    { name: "HTML5", icon: <FaHtml5 />, percent: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, percent: 90 },
    { name: "JavaScript", icon: <FaJs />, percent: 80 },
    { name: "React JS", icon: <FaReact />, percent: 75 },
    { name: "MERN Stack", icon: <FaDatabase />, percent: 65 },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20"
    >
      
      <div className="text-center mb-14">
        <h4 className="text-blue-400 uppercase tracking-widest">
          My Skills
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Technologies I Work With
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I specialize in frontend development, UI/UX design, and MERN stack
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-500/20 transition duration-300 border border-slate-800"
          >
        
            <div className="text-4xl text-blue-400 flex justify-center mb-4">
              {skill.icon}
            </div>

            
            <h3 className="text-lg font-semibold">{skill.name}</h3>

            <div className="relative w-24 h-24 mx-auto mt-5">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-slate-700"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  stroke="currentColor"
                />
                <path
                  className="text-blue-500"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${skill.percent}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  stroke="currentColor"
                />
              </svg>

             
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
                {skill.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
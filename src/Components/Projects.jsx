export default function Projects() {
  const projects = [
    {
      title: "Blogging Web Application",
      desc: "A modern blogging platform with user authentication and content management.",
      link: "https://vblogging.vercel.app/login",
    },
    {
      title: "Timeline Application",
      desc: "A timeline-based application to visualize events and track activities.",
      link: "https://timelinexo.vercel.app/login",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 text-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        Projects
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {project.desc}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

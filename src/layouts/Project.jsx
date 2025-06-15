import { ExternalLink, Github } from "lucide-react";

function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan fitur keranjang belanja, payment gateway, dan admin dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: null,
    },
    {
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifikasi push.",
      tech: ["Vue.js", "Firebase", "PWA"],
      github: "#",
      demo: "#",
      image: null,
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard cuaca interaktif dengan visualisasi data dan prediksi 7 hari ke depan.",
      tech: ["React.js", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#",
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proyek
          </h2>
          <p className="text-xl text-gray-600">
            Beberapa karya yang saya banggakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;

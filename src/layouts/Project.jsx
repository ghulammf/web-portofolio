import { ExternalLink, Github } from "lucide-react";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Project() {
  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "Platform e-commerce lengkap dengan fitur keranjang belanja, payment gateway, dan admin dashboard.",
  //     tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
  //     github: "#",
  //     demo: "#",
  //     image: null,
  //   }
  // ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600">See my projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={project.catalog}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))
                      .slice(0, 3)}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Link
                      to={`/projects/${index}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Details
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 3)}
        </div>
        <Link to={"/projects"}>
          <div className="flex items-center w-fit mt-10 md:mt-14 lg:mt-18 py-2 px-4 font-semibold rounded-lg border border-blue-600">
            More Projects
            <ExternalLink className="h-5 w-5 ml-2 font-semibold" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Project;

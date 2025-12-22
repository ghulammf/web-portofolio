import { useParams } from "react-router-dom";
import projects from "../data/projects";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  MapPin,
  Monitor,
  Smartphone,
  Tablet,
  Users,
} from "lucide-react";
import { useState } from "react";

const TabButton = ({ id, label, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
      active
        ? "bg-blue-600 text-white shadow-md"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
    {tech}
  </span>
);

function DetailProject() {
  const { index } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const project = projects[index];

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* <button className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Portofolio
          </button> */}

          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3 md:mb-5">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.company}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.teamSize}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              {project.links.demo === "" ? (
                ""
              ) : (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Body projects */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Screenshots */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>

              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={project.screenshots[selectedImage].url}
                  alt={project.screenshots[selectedImage].title}
                  className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                />
                <p className="text-center text-gray-600 mt-2">
                  {project.screenshots[selectedImage].description}
                </p>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-blue-500 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <TabButton
                  id="overview"
                  label="Overview"
                  active={activeTab === "overview"}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="features"
                  label="Features"
                  active={activeTab === "features"}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="challenges"
                  label="Challenges"
                  active={activeTab === "challenges"}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="results"
                  label="Results"
                  active={activeTab === "results"}
                  onClick={setActiveTab}
                />
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Description
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {/* <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Detail Lengkap
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div> */}
                  </div>
                )}

                {activeTab === "features" && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "challenges" && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Technical Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "results" && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Project Results
                    </h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                Project Info
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Status</span>
                  <div className="flex justify-center items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Role</span>
                  <p className="text-sm font-medium mt-1">{project.role}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Team Size</span>
                  <p className="text-sm font-medium mt-1">{project.teamSize}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Duration</span>
                  <p className="text-sm font-medium mt-1">{project.duration}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Application
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Demo Video
                </a>
              </div>
            </div> */}

            {/* Device Compatibility */}
            {/* <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Device Support
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-green-600">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Mobile Optimized</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Tablet className="w-4 h-4 mr-2" />
                  <span className="text-sm">Tablet Compatible</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Monitor className="w-4 h-4 mr-2" />
                  <span className="text-sm">Desktop Support</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Contact({ link, icon: Icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {<Icon className="h-6 w-6" />}
    </a>
  );
}

function Home() {
  const { setActiveSection, setIsMenuOpen } = useContext(AppContext);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="flex justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="flex flex-col lg:flex-row items-center justify-between"> */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hello, I am <span className="text-blue-600">Ghulam</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
            Web Developer Enthusiast
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed md:text-lg lg:text-xl">
            I am a developer who is passionate about creating innovative digital
            solutions. With 1 year of experience, I focus on developing
            user-friendly and scalable web applications.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Contact link={"https://github.com/ghulammf"} icon={Github} />
            <Contact
              link={
                "https://id.linkedin.com/in/ghulam-muhtadi-fiamrillah-370753320"
              }
              icon={Linkedin}
            />
            <Contact link={"mailto:muhtadinamri123@gmail.com"} icon={Mail} />
          </div>
          <span
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            See My Project
          </span>
        </div>
        {/* <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <img
                  src={null}
                  alt="Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div> */}
        {/* <div className="spinner">
            <div className="spinner1"></div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Home;

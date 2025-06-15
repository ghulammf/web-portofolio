import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { isMenuOpen, setIsMenuOpen, activeSection, setActiveSection } =
    useContext(AppContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Beranda" },
              { id: "about", label: "Tentang" },
              { id: "skills", label: "Keahlian" },
              { id: "projects", label: "Proyek" },
              { id: "experience", label: "Pengalaman" },
              { id: "blog", label: "Blog" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { id: "home", label: "Beranda" },
              { id: "about", label: "Tentang" },
              { id: "skills", label: "Keahlian" },
              { id: "projects", label: "Proyek" },
              { id: "experience", label: "Pengalaman" },
              { id: "blog", label: "Blog" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left cursor-pointer"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

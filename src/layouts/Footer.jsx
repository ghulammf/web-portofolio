import { Github, Linkedin } from "lucide-react";

function Contact({ link, icon: Icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {<Icon className="h-6 w-6" />}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Ghulam. Made with ❤️ using React & Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6">
            <Contact link={"https://github.com/ghulammf"} icon={Github} />
            <Contact link={"linkedin"} icon={Linkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

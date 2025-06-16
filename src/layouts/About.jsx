import { Code, Database, Server, Smartphone } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className="grid  gap-12 items-center">
          <div>
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cerita Singkat
            </h3> */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a final-year Computer Engineering student at Politeknik
              Elektronika Negeri Surabaya (PENS), where I have developed a
              strong foundation in software development and web technologies.
              Throughout my academic journey, I have gained valuable hands-on
              experience through internships and freelance projects that have
              shaped my professional skills.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My technical expertise centers around modern web development
              technologies, including ReactJS for frontend development, Node.js
              and Express.js for backend solutions, and MySQL for database
              management. I'm passionate about creating full-stack applications
              that solve real-world problems and improve user experiences.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 font-medium">
                "Kode terbaik adalah kode yang mudah dipahami oleh developer
                lain, termasuk diri sendiri 6 bulan kemudian." ☕
              </p>
            </div>
          </div>

          <div>
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React, Vue, Angular</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Express</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Database</h4>
                <p className="text-sm text-gray-600">MySQL, MongoDB</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Smartphone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Mobile</h4>
                <p className="text-sm text-gray-600">React Native, Flutter</p>
              </div>
            </div> */}

            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4">Minat Khusus:</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Open Source",
                  "AI/ML",
                  "Web Performance",
                  "UI/UX Design",
                  "DevOps",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

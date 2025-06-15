import { Award, Briefcase, Calendar, GraduationCap } from "lucide-react";

function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovate Co.",
      period: "2022 - Sekarang",
      description:
        "Memimpin tim pengembangan aplikasi web dan mobile, menggunakan React.js, Node.js, dan AWS.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Mengembangkan antarmuka pengguna yang responsif dan interaktif menggunakan React.js dan Vue.js.",
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Creative",
      period: "2019 - 2020",
      description:
        "Mengembangkan website company profile dan landing page menggunakan HTML, CSS, JavaScript.",
    },
  ];
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman & Pendidikan
          </h2>
          <p className="text-xl text-gray-600">
            Perjalanan karir dan pendidikan saya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
              Pengalaman Kerja
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-green-600" />
              Pendidikan & Sertifikasi
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-gray-900">
                  D3 Teknik Informatika
                </h4>
                <p className="text-green-600 font-medium">
                  Politeknik Elektronika Negeri Surabaya
                </p>
                <p className="text-gray-500 text-sm mb-3">2022 - 2025</p>
                <p className="text-gray-600">
                  GPA: 3.7/4.0 - Fokus pada Software Engineering dan Database
                  Systems
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Sertifikasi
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    AWS Certified Developer Associate (2023)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Google Cloud Professional Developer (2022)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Meta React Developer Certificate (2021)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

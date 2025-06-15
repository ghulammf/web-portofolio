import { Calendar, ExternalLink } from "lucide-react";

function Blog() {
  const blogPosts = [
    {
      title: "Membangun REST API dengan Node.js dan Express",
      excerpt: "Tutorial lengkap membuat REST API yang scalable dan secure...",
      date: "15 Juni 2025",
      readTime: "8 min",
    },
    {
      title: "Tips Optimasi Performance React Application",
      excerpt: "Berbagai teknik untuk meningkatkan performa aplikasi React...",
      date: "10 Juni 2025",
      readTime: "6 min",
    },
    {
      title: "Pengalaman Migrasi dari JavaScript ke TypeScript",
      excerpt: "Cerita dan tips praktis saat melakukan migrasi codebase...",
      date: "5 Juni 2025",
      readTime: "10 min",
    },
  ];
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Blog & Artikel
          </h2>
          <p className="text-xl text-gray-600">
            Berbagi pengetahuan dan pengalaman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <span className="mx-2">•</span>
                  {post.readTime} baca
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Baca Selengkapnya
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

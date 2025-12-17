import skills from "../data/skills";

function Skill() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600">Mastering Technology</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills?.map((item, index) => {
            return (
              <div className="h-[100px] flex justify-center items-center">
                <img
                  key={index}
                  src={item.icon}
                  className=" filter grayscale hover:filter-none transition duration-300 w-[50px] md:w-[80px] xl:w-[128px]"
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;

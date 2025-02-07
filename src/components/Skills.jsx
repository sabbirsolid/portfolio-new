import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = {
    frontend: ["React", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Github", "Figma"],
  };
  return (
    <div>
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard title="Frontend" skills={skills.frontend} />
            <SkillCard title="Backend" skills={skills.backend} />
            <SkillCard title="Tools" skills={skills.tools} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

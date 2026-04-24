import { motion } from "framer-motion";

const skills = [
  "React", "JavaScript", "Node.js",
  "MongoDB", "Express", "Tailwind CSS",
  "Python", "Git", "REST APIs"
];

export default function Skills() {
  return (
    <section id="Skills" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full cursor-pointer shadow-md"
          >
            {skill}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
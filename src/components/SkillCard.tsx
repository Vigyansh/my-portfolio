import type { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="text-slate-800 border-4 px-2 py-1 border-black rounded-lg mr-3 text-3xl animate-in transition-all duration-1000 bg-slate-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-black text-slate-200 px-2 py-1 rounded text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

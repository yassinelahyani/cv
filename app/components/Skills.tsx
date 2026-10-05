const skillGroups = [
  {
    category: "Data Analytics & BI",
    icon: "📊",
    color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Matplotlib", level: 80 },
      { name: "ETL / SSIS", level: 82 },
    ],
  },
  {
    category: "Data Engineering",
    icon: "⚙️",
    color: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
    iconBg: "bg-violet-500/10 text-violet-400",
    skills: [
      { name: "Data Warehousing", level: 83 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 75 },
      { name: "Data Modeling", level: 80 },
      { name: "ETL Pipelines", level: 82 },
      { name: "Data Governance", level: 72 },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    color: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
    iconBg: "bg-pink-500/10 text-pink-400",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Deep Learning", level: 78 },
      { name: "Computer Vision", level: 75 },
      { name: "NLP", level: 70 },
      { name: "Model Deployment", level: 73 },
    ],
  },
  {
    category: "Web & Software Dev",
    icon: "💻",
    color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "Laravel / PHP", level: 82 },
      { name: "FastAPI", level: 75 },
      { name: "Kotlin / Android", level: 72 },
      { name: "TypeScript", level: 76 },
      { name: "REST APIs", level: 85 },
    ],
  },
];

function SkillBar({
  name,
  level,
  barColor,
}: {
  name: string;
  level: number;
  barColor: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all duration-700`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const barColors: Record<string, string> = {
  "Data Analytics & BI": "from-cyan-500 to-cyan-300",
  "Data Engineering": "from-violet-500 to-violet-300",
  "Machine Learning & AI": "from-pink-500 to-pink-300",
  "Web & Software Dev": "from-emerald-500 to-emerald-300",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I Bring
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A broad stack built around data — from raw pipelines to intelligent
            models and production web apps.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border bg-gradient-to-br p-6 ${group.color}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-2xl w-10 h-10 rounded-xl flex items-center justify-center ${group.iconBg}`}
                >
                  {group.icon}
                </span>
                <h3 className="text-white font-semibold text-lg">
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  barColor={barColors[group.category]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

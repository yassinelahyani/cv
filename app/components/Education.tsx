const educationItems = [
  {
    type: "education",
    icon: "🎓",
    title: "Big Data & Data Analytics",
    org: "ISIMS — Institut Supérieur d'Informatique et de Mathématiques de Sfax",
    period: "2021 — 2024",
    description:
      "Specialized program covering data warehousing, business intelligence, machine learning, and software engineering with a focus on applied data science.",
    color: "border-cyan-500/40",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    type: "training",
    icon: "📱",
    title: "Kotlin Multiplatform Training",
    org: "4C-ISIMS & Orange Digital Center",
    period: "2023",
    description:
      "Hands-on training in Kotlin Multiplatform Mobile (KMM) for cross-platform Android and iOS application development.",
    color: "border-violet-500/40",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
];

const certifications = [
  {
    icon: "🤖",
    title: "Machine Learning Specialization",
    provider: "Coursera",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  },
  {
    icon: "🧠",
    title: "Deep Learning with Keras & TensorFlow",
    provider: "Coursera / IBM",
    color: "bg-orange-500/10 border-orange-500/30 text-orange-300",
  },
  {
    icon: "📊",
    title: "Data Analysis with Python",
    provider: "IBM / Coursera",
    color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    icon: "🌐",
    title: "SQL & Database Design",
    provider: "Various",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
  },
];

const languages = [
  { name: "Arabic", level: "Native", flag: "🇹🇳", width: "100%" },
  { name: "French", level: "Professional", flag: "🇫🇷", width: "85%" },
  { name: "English", level: "Professional", flag: "🇬🇧", width: "80%" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Academic formation and continuous learning through professional
            certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education timeline */}
          <div className="lg:col-span-2 space-y-6">
            {educationItems.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-2xl bg-slate-800/40 border ${item.color} p-6`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                      <span className="text-xs bg-slate-700/70 text-slate-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-cyan-400/80 text-sm font-medium mb-2">
                      {item.org}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span>🏅</span> Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className={`flex items-center gap-3 rounded-xl border p-3.5 ${cert.color}`}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-white leading-tight">
                        {cert.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages sidebar */}
          <div className="rounded-2xl bg-slate-800/40 border border-slate-700/40 p-6 h-fit">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span>🌍</span> Languages
            </h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span className="text-white font-medium text-sm">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                      style={{ width: lang.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <h4 className="text-white font-semibold text-sm mb-4">
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "Analytical Thinking",
                  "Fast Learner",
                  "Communication",
                  "Adaptability",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-slate-700/60 text-slate-300 px-3 py-1.5 rounded-full border border-slate-600/50"
                  >
                    {skill}
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

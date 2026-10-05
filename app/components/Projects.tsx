const projects = [
  {
    title: "Healthcare Data Warehouse & BI",
    category: "Data Engineering · Power BI",
    description:
      "Designed a full Data Warehouse for a clinic's operational data. Built ETL pipelines with SSIS, then created Power BI dashboards to analyze revenue streams and medical honorariums — enabling data-driven decisions for hospital management.",
    tech: ["SQL Server", "SSIS", "Power BI", "Data Modeling", "ETL"],
    emoji: "🏥",
    color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-400/50",
    badge: "bg-cyan-500/20 text-cyan-300",
  },
  {
    title: "Car Price Prediction",
    category: "Machine Learning · Python",
    description:
      "Developed a regression model using Python and Scikit-learn to predict car prices from vehicle attributes. Covered feature engineering, model selection, hyperparameter tuning, and performance evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    emoji: "🚗",
    color: "from-violet-500/10 to-violet-500/5 border-violet-500/20 hover:border-violet-400/50",
    badge: "bg-violet-500/20 text-violet-300",
  },
  {
    title: "Waste Image Classification",
    category: "Deep Learning · Computer Vision",
    description:
      "Built a transfer learning pipeline with VGG16 and TensorFlow to classify waste images into recyclable and organic categories. Achieved high accuracy by fine-tuning pre-trained weights on a custom dataset.",
    tech: ["TensorFlow", "Keras", "VGG16", "Python", "Transfer Learning"],
    emoji: "♻️",
    color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-400/50",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
  {
    title: "Customer Support Management System",
    category: "Full-Stack · AI Chatbot",
    description:
      "Built a full-stack after-sales platform for ticket tracking and customer support. Tech stack: Laravel (backend), React (frontend), FastAPI (AI service), and MySQL. Integrated a chatbot for automated support routing.",
    tech: ["Laravel", "React", "FastAPI", "MySQL", "REST API"],
    emoji: "🎫",
    color: "from-pink-500/10 to-pink-500/5 border-pink-500/20 hover:border-pink-400/50",
    badge: "bg-pink-500/20 text-pink-300",
  },
  {
    title: "Student Engagement Prediction",
    category: "Machine Learning · Analytics",
    description:
      "Analyzed e-learning platform engagement data and built classification models to predict student purchase behavior. Delivered actionable insights for course creators and platform growth teams.",
    tech: ["Python", "Scikit-learn", "Power BI", "Data Analysis", "EDA"],
    emoji: "🎓",
    color: "from-amber-500/10 to-amber-500/5 border-amber-500/20 hover:border-amber-400/50",
    badge: "bg-amber-500/20 text-amber-300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I&#39;ve Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of real-world projects spanning BI dashboards, ML
            models, deep learning pipelines, and full-stack applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 cursor-default ${project.color}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.badge}`}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

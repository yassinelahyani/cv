export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>
          © {year}{" "}
          <span className="text-slate-400 font-medium">Yassine Lahyani</span> —
          Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/yassine-lahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yassine-lahyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:yassine.lahyani@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

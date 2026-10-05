"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Available for opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Yassine{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Lahyani
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-4 font-light">
          Data Analyst{" "}
          <span className="text-slate-600 mx-2">·</span>{" "}
          Data Engineer{" "}
          <span className="text-slate-600 mx-2">·</span>{" "}
          AI Enthusiast
        </p>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Passionate about transforming raw data into meaningful insights and
          developing intelligent solutions that drive real-world impact.
          <span ref={cursorRef} className="ml-0.5 text-cyan-400 font-thin">
            |
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}

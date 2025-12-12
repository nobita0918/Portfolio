"use client";

import { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiVercel,
  SiNpm,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

// STATIC hover colors for Tailwind to detect at build time
const hoverColors = {
  javascript: "group-hover:text-yellow-400",
  react: "group-hover:text-cyan-400",
  nextjs: "group-hover:text-white",
  tailwind: "group-hover:text-sky-400",
  node: "group-hover:text-green-500",
  express: "group-hover:text-gray-300",
  mongodb: "group-hover:text-green-400",
  mysql: "group-hover:text-blue-400",
  git: "group-hover:text-orange-500",
  vercel: "group-hover:text-white",
  npm: "group-hover:text-red-500",
  python: "group-hover:text-yellow-300",
  html: "group-hover:text-orange-500",
  css: "group-hover:text-blue-400",
  postman: "group-hover:text-orange-400",
  bootstrap: "group-hover:text-purple-500",
};

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    key: "javascript",
    color: "text-yellow-400",
  },
  { name: "React", icon: SiReact, key: "react", color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, key: "nextjs", color: "text-white" },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    key: "tailwind",
    color: "text-sky-400",
  },
  { name: "Node.js", icon: SiNodedotjs, key: "node", color: "text-green-500" },
  { name: "Express", icon: SiExpress, key: "express", color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, key: "mongodb", color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, key: "mysql", color: "text-blue-400" },
  { name: "Git", icon: SiGit, key: "git", color: "text-orange-500" },
  { name: "Vercel", icon: SiVercel, key: "vercel", color: "text-white" },
  { name: "npm", icon: SiNpm, key: "npm", color: "text-red-500" },
  { name: "Python", icon: SiPython, key: "python", color: "text-yellow-300" },
  { name: "HTML5", icon: SiHtml5, key: "html", color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, key: "css", color: "text-blue-400" },
  {
    name: "Postman",
    icon: SiPostman,
    key: "postman",
    color: "text-orange-400",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    key: "bootstrap",
    color: "text-purple-500",
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="px-6 md:px-20 md:py-10 py-20">
      <h2 className="text-3xl font-semibold mb-10">
        Technologies That Shape My Work
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {skills.map((skill, i) => {
          const isActive = activeIndex === i;
          const Icon = skill.icon;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(isActive ? null : i)}
              className="group relative flex h-20 items-center justify-center
                         rounded-xl border border-white/10 
                         bg-white/5 backdrop-blur-md 
                         transition cursor-pointer
                         hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              {/* ICON */}
              <Icon
                className={`
                  text-2xl transition-all duration-300
                  ${isActive ? skill.color : "text-white/70"}
                  ${hoverColors[skill.key]}
                  ${isActive ? "-translate-y-2" : "group-hover:-translate-y-2"}
                `}
              />

              {/* LABEL */}
              <span
                className={`
                  absolute bottom-2 text-xs transition-all duration-300
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                  group-hover:opacity-100 group-hover:translate-y-0
                `}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

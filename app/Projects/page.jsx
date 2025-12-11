export default function ProjectShowcase() {
  const projects = [
    {
      title: "WanderLust",
      description:
        "wanderlust is a full-stack accommodation booking platform that allows users to explore, list, and book stays with a seamless and secure experience.Built with HTML, CSS, and JavaScript, it features Cloudinary for media management and Passport.js for secure authentication with session and flash message support. The platform delivers a full-stack, interactive booking experience from search to reservation.",
      image: "/assets/Wanderlust.png",
      codeUrl: "https://github.com/nobita0918/wanderlust",
      tags: [
        "Html",
        "CSS",
        "JavaScript",
        "Express",
        "MongoDB",
        "Sessions",
        "Flash",
        "Passport",
        "Cloudinary",
        "Ejs",
      ],
    },

    {
      title: "Spott",
      description:
        "Spott is a high-performance event management platform built with Next.js, Convex, and Clerk for real-time operations and secure authentication. It streamlines event creation with an AI-powered setup flow that auto-generates event details instantly. Integrated QR-based check-ins enable fast, seamless attendee validation. The result is a modern, scalable system optimized for end-to-end event execution.",
      image: "/assets/spott.png",
      codeUrl: "https://github.com/nobita0918/Spott",
      tags: [
        "Next.js",
        "Convex",
        "Tailwind",
        "ShadCN",
        "React",
        "Clerk",
        " Framer-Motion",
      ],
    },
    {
      title: "Zerodha",
      description:
        "This is a Zerodha-like stock trading platform built with React, MongoDB, Shadcn UI, and Material-UI. It allows users to invest, track, and manage stocks efficiently, with interactive graphs and real-time data for informed trading decisions. The platform delivers a modern, responsive interface for end-to-end stock portfolio management",
      image: "/assets/zerodha.png",
      codeUrl: "https://github.com/nobita0918/zerodha",
      tags: [
        "Html",
        "CSS",
        "JavaScript",
        "Express",
        "MongoDB",
        "Sessions",
        "Flash",
        "Passport",
        "Cloudinary",
        "Ejs",
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-10 flex flex-col items-center">
      {/* Simple Header */}
      <div className="w-11/12 lg:w-10/12 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h1>

        <p className="text-lg text-white/70 max-w-3xl">
          A curated collection of solutions engineered with precision,
          innovation, and a future-driven mindset — showcasing capabilities
          across full-stack development, UI/UX, automation, and scalable
          systems.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-20 w-11/12 lg:w-10/12 pt-4">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-[#0d0d0d] border border-white/10 backdrop-blur-xl transition-all duration-500"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              style={{ backgroundImage: `url(${p.image})` }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 opacity-80" />

            {/* Text Content */}
            <div className="relative p-8 flex flex-col justify-end h-[350px]">
              <h3 className="text-3xl font-semibold text-white mb-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75">
                {p.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA LINK */}
              <a
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-medium text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 duration-700 delay-200"
              >
                View Code →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

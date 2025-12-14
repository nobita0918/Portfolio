import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center gap-4 mt-8">
      {/* Email */}
      <a
        href="mailto:anuragkum0918@gmail.com"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20
               bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10
               hover:scale-105"
      >
        <i className="fa-regular fa-envelope text-2xl text-white"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/anurag-kumar-82b9762b6/"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20
               bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10
               hover:scale-105"
      >
        <i className="fa-brands fa-linkedin-in text-2xl text-white"></i>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/anuragsharma0918"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20
               bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10
               hover:scale-105"
      >
        <i className="fa-brands fa-github text-2xl text-white"></i>
      </a>

      {/* Discord */}
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20
               bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10
               hover:scale-105"
      >
        <i className="fa-brands fa-discord text-2xl text-white"></i>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6299660610"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20
               bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10
               hover:scale-105"
      >
        <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
      </a>
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import { Diamond } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2 group">
          <Diamond className="text-emerald-500 w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-serif-luxury text-xl tracking-widest text-white uppercase">
            Lapidação Empresarial
          </span>
        </a>

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-semibold">
          <a
            href="#inicio"
            className="text-white/70 hover:text-white transition-colors relative group"
          >
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#sobre"
            className="text-white/70 hover:text-[#50C878] transition-colors relative group"
          >
            A Empresa
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#50C878] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#servicos"
            className="text-white/70 hover:text-emerald-500 transition-colors relative group"
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contato"
            className="text-white/70 hover:text-[#FF0000] transition-colors relative group"
          >
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF0000] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button className="md:hidden text-white" aria-label="Menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

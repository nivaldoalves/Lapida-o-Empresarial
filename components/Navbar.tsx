
import React, { useState, useEffect } from 'react';
import { Diamond } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Diamond className="text-emerald-500 w-6 h-6" />
          <span className="font-serif-luxury text-xl tracking-widest text-white uppercase">Lapidação</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-semibold">
          <a href="#inicio" className="hover:text-gold-500 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-emerald-500 transition-colors">A Empresa</a>
          <a href="#servicos" className="hover:text-emerald-500 transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-red-500 transition-colors">Contato</a>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};


import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGlitching(true);
          // O efeito dura 2.5 segundos e depois é removido para manter a sobriedade
          setTimeout(() => setIsGlitching(false), 2500);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Transformando Brutos em Joias Empresariais</span>
        </div>
        
        <h1 
          ref={titleRef}
          className={`font-serif-luxury text-5xl md:text-8xl mb-6 leading-tight transition-all duration-700 ${isGlitching ? 'scale-[1.02]' : 'scale-100'}`}
        >
          <span 
            className={`block ${isGlitching ? 'glitch-active' : ''}`} 
            data-text="LAPIDAÇÃO"
          >
            LAPIDAÇÃO
          </span>
          <span 
            className={`text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#50C878] to-[#FF0000] ${isGlitching ? 'glitch-active' : ''}`}
            data-text="EMPRESARIAL"
          >
            EMPRESARIAL
          </span>
        </h1>
        
        <p className="font-display italic text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12">
          "Onde a estratégia encontra a sofisticação para elevar o seu negócio ao patamar de excelência absoluta."
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#servicos" 
            className="shine-effect group bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest flex items-center transition-all duration-300 transform hover:scale-105"
          >
            Nossos Serviços
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contato" 
            className="border border-white/20 hover:border-[#D4AF37] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all duration-300"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>

      {/* Decorative Diamond Floating Icons */}
      <div className="absolute top-1/3 right-10 opacity-20 animate-float hidden lg:block">
        <div className="w-12 h-12 border-2 border-[#D4AF37] rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-20 animate-float-delayed hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 border-2 border-[#50C878] rotate-45"></div>
      </div>
    </section>
  );
};

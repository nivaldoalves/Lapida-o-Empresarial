
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border border-emerald-500/20 rounded-sm translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3" 
              alt="Professional Business Man" 
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md p-6 border-l-4 border-[#D4AF37]">
              <p className="font-serif-luxury text-2xl">+15 Anos</p>
              <p className="text-xs uppercase tracking-widest text-white/60">De Experiência em Alta Gestão</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif-luxury text-4xl mb-8 flex items-center">
              A Arte da <span className="text-[#D4AF37] ml-3 italic">Lapidação</span>
            </h2>
            
            <div className="space-y-6 text-white/80 leading-relaxed text-lg">
              <p>
                A <strong>Lapidação Empresarial</strong> nasceu da convicção de que toda empresa possui um núcleo valioso que, muitas vezes, está escondido sob camadas de processos ineficientes e posicionamento inadequado.
              </p>
              <p>
                Nossa trajetória é marcada pelo compromisso com o luxo funcional. Não apenas embelezamos marcas; nós as estruturamos para resistir ao tempo e brilhar nos mercados mais competitivos do mundo.
              </p>
              <p>
                Utilizamos metodologias exclusivas que tratam o seu negócio como uma gema rara, removendo imperfeições estratégicas até que a pureza de seu propósito se torne inquestionável.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif-luxury text-emerald-500 text-3xl mb-1">98%</h4>
                <p className="text-xs uppercase tracking-widest text-white/50">Satisfação Premium</p>
              </div>
              <div>
                <h4 className="font-serif-luxury text-red-500 text-3xl mb-1">R$ 50M+</h4>
                <p className="text-xs uppercase tracking-widest text-white/50">Em Valor de Marca Gerado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

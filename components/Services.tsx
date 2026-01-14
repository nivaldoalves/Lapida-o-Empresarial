
import React from 'react';
import { Share2, Globe, LayoutGrid, Award, Briefcase, Zap } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
}> = ({ title, description, icon, color }) => (
  <div className="shine-effect group bg-neutral-900 border border-white/5 p-10 hover:border-white/20 transition-all duration-500 flex flex-col items-start h-full">
    <div className={`mb-8 p-4 rounded-sm bg-black border border-white/10 group-hover:scale-110 transition-transform duration-500 ${color}`}>
      {icon}
    </div>
    <h3 className="font-serif-luxury text-xl mb-4 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-white/60 leading-relaxed text-sm mb-8 flex-grow">
      {description}
    </p>
    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"></div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "Consultoria de Branding Premium",
      description: "Desenvolvimento de identidade verbal e visual que comunica exclusividade e valor inestimável ao seu cliente ideal.",
      icon: <Award className="w-6 h-6" />,
      color: "text-[#D4AF37]"
    },
    {
      title: "Mentoria de Negócios High-Ticket",
      description: "Acompanhamento estratégico para empresários que desejam transicionar seu modelo de negócio para o mercado de alto padrão.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-[#50C878]"
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Focada em posicionamento de autoridade e construção de desejo. Gerenciamos seu conteúdo para que ele venda antes mesmo da oferta.",
      icon: <Share2 className="w-6 h-6" />,
      color: "text-[#FF0000]"
    },
    {
      title: "Criação de Redes Estratégicas",
      description: "Configuração técnica e estética do zero. Entregamos seu ecossistema digital pronto para performar com elegância e eficiência.",
      icon: <LayoutGrid className="w-6 h-6" />,
      color: "text-[#D4AF37]"
    },
    {
      title: "Estratégia de Vendas Luxo",
      description: "Funis de venda desenhados para produtos de alto valor agregado, priorizando a experiência do cliente e a escassez seletiva.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-[#50C878]"
    },
    {
      title: "Desenvolvimento Web de Elite",
      description: "Criação de plataformas e landing pages de alta performance que carregam o DNA visual da sua marca em cada pixel.",
      icon: <Globe className="w-6 h-6" />,
      color: "text-[#FF0000]"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="font-serif-luxury text-4xl md:text-5xl mb-4">Nossos Pilares de <span className="text-emerald-500 italic">Excelência</span></h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-white/50 uppercase tracking-[0.2em] text-sm">
          Serviços customizados para quem não aceita o comum.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};


import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-serif-luxury text-4xl mb-8">Agende sua <span className="text-red-500">Sessão de Diagnóstico</span></h2>
            <p className="text-white/70 mb-12 text-lg">
              O primeiro passo para a transformação do seu negócio começa aqui. Nossas vagas de consultoria são limitadas para garantir exclusividade.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-[#D4AF37]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">E-mail</p>
                  <p className="font-semibold">contato@lapidacaoempresarial.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-emerald-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">WhatsApp</p>
                  <p className="font-semibold">+55 (11) 99999-0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-red-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Escritório</p>
                  <p className="font-semibold">Avenida Paulista, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-neutral-900/50 p-10 border border-white/5 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-emerald-500 outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-emerald-500 outline-none transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">E-mail Corporativo</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-emerald-500 outline-none transition-colors"
                  placeholder="email@empresa.com"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Sua Necessidade</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-emerald-500 outline-none transition-colors resize-none"
                  placeholder="Conte-nos brevemente sobre o seu momento atual..."
                ></textarea>
              </div>
              
              <button className="shine-effect w-full bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-[0.2em] py-5 rounded-sm transition-all duration-300 transform hover:scale-[1.02]">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

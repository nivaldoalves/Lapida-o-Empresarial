
import React from 'react';
import { Diamond, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Diamond className="text-emerald-500 w-6 h-6" />
            <span className="font-serif-luxury text-xl tracking-widest text-white uppercase">Lapidação Empresarial</span>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="#" 
              className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs uppercase tracking-widest text-white/40">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="hover:text-emerald-500 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-emerald-500 transition-colors">Sobre nós</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#servicos" className="hover:text-emerald-500 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-emerald-500 transition-colors">Contato</a>
          </div>
          <div className="col-span-2 text-right">
            <p className="mb-2">CNPJ: 00.000.000/0001-00</p>
            <p>© 2024 Lapidação Empresarial. Todos os direitos reservados.</p>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xs text-white/20 font-serif-luxury tracking-widest">
            www.lapidacaoempresarial.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

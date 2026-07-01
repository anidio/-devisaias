import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20 text-center">
      
      {/* 🏷️ Cabeçalho da Seção estilo Terminal */}
      <div className="mb-6 flex justify-center items-center space-x-2 font-mono text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
        <span className="text-cyan-500">&gt;_</span>
        <span># Network.connect</span>
      </div>

      <p className="text-sm font-sans font-light text-slate-500 dark:text-slate-400 mb-12 max-w-md mx-auto leading-relaxed">
        Tem um projeto em mente ou quer trocar uma ideia sobre microsserviços e segurança? Estabeleça uma conexão! 🚀
      </p>

      {/* 📊 Grid de Canais de Comunicação Direta */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-12 font-mono text-xs">
        
        {/* E-mail */}
        <a 
          href="mailto:isaias_kj@hotmail.com"
          className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-cyan-500/40 dark:border-slate-800 dark:bg-slate-900/50 group"
        >
          <Mail className="h-5 w-5 text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] text-slate-400 uppercase mb-1">protocols // mail</span>
          <span className="font-sans text-slate-700 dark:text-slate-300 font-light break-all">
            isaias_kj@hotmail.com
          </span>
        </a>

        {/* Telefone / WhatsApp */}
        <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/50">
          <Phone className="h-5 w-5 text-cyan-500 mb-3" />
          <span className="text-[10px] text-slate-400 uppercase mb-1">channels // voice</span>
          <span className="font-sans text-slate-700 dark:text-slate-300 font-light">
            (81) 9 8501-6424
          </span>
        </div>

        {/* Localização */}
        <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/50">
          <MapPin className="h-5 w-5 text-cyan-500 mb-3" />
          <span className="text-[10px] text-slate-400 uppercase mb-1">nodes // geoloc</span>
          <span className="font-sans text-slate-700 dark:text-slate-300 font-light">
            Olinda - PE, Brasil
          </span>
        </div>

      </div>

      {/* 🌐 Links Sociais (Rodapé de Conexões com SVGs puros) */}
        <div className="flex justify-center items-center space-x-6 border-t border-slate-200 pt-8 max-w-xs mx-auto dark:border-slate-800">
        
        {/* GitHub */}
        <a 
            href="https://github.com/anidio" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors"
            title="GitHub Portfolio"
        >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
        </a>

        {/* LinkedIn */}
        <a 
            href="https://www.linkedin.com/in/isaiasroberto" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors"
            title="LinkedIn Profile"
        >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>

        {/* Instagram */}
        <a 
            href="https://www.instagram.com/devisaias" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors"
            title="Instagram @devisaias"
        >
            <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        </a>

        </div>

    </section>
  );
}
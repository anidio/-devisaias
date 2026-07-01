import  { useState, useEffect } from 'react';

// Mapeamento das seções com os IDs exatos do seu projeto
const sections = [
  { id: 'workspace', label: 'Workspace' },
  { id: 'about-hero', label: 'About' },
  { id: 'projetos', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contact' }
];

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState('workspace');

  useEffect(() => {
    const handleScroll = () => {
      // Verifica a posição de cada seção na tela
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se o topo da seção estiver próximo do topo da janela, ela se torna a ativa
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col space-y-4 font-mono text-xs lg:flex">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center space-x-2 text-left cursor-pointer focus:outline-none"
          >
            {/* Indicador de Status Estilo Terminal */}
            <span className={`transition-colors duration-300 ${
              isActive ? 'text-cyan-500 font-bold' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'
            }`}>
              {isActive ? '[•]' : '[ ]'}
            </span>
            
            {/* Label da Seção (Aparece de forma sutil no hover) */}
            <span className={`opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
              isActive ? 'text-cyan-500 font-bold opacity-100 translate-x-0' : 'text-slate-400 dark:text-slate-500'
            }`}>
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
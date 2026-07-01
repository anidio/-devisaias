import React from 'react';
// Importamos os ícones de redes sociais e os novos ícones para o tema ☀️ 🌙
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

// 🟦 Definimos a interface para o TypeScript validar as propriedades recebidas
interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    // Adicionamos classes de transição e o prefixo dark: para o fundo e borda mudarem
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-slate-900 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 md:px-8">
        
        {/* 1. Esquerda: Espaço para Logo / Futura Imagem */}
        <div className="flex items-center space-x-3">
          {/* Adicionamos dark:text-slate-200 para clarear o texto no modo escuro */}
          <span className="text-xl font-medium tracking-wider text-slate-800 dark:text-slate-200">
            @devisaias
          </span>
        </div>

        {/* 2. Centro: Links de Navegação Centralizados */}
        <div className="hidden space-x-8 md:flex">
          {/* Adicionamos classes dark:text e dark:hover:text em cada link */}
          <a href="#sobre" className="text-sm font-light text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Sobre
          </a>
          <a href="#projetos" className="text-sm font-light text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Projetos
          </a>
          <a href="#contato" className="text-sm font-light text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Contato
          </a>
        </div>

        {/* 3. Direita: Ícones das Redes Sociais + Botão de Alternar Tema */}
        <div className="hidden space-x-5 md:flex items-center text-slate-600 dark:text-slate-400">
          <a href="https://instagram.com/devisaias" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-slate-100">
            <FaInstagram size={18} />
          </a>
          <a href="https://tiktok.com/@devisaias" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-slate-100">
            <FaTiktok size={16} />
          </a>
          <a href="https://www.youtube.com/@devisaias" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-slate-100">
            <FaYoutube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/isaiasroberto/" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-slate-100">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/anidio" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-slate-900 dark:hover:text-slate-100">
            <FaGithub size={18} />
          </a>

          {/* Uma linha vertical sutil para separar as redes do botão de tema */}
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

          {/* Botão Interativo que inverte o valor do estado boolean ☀️/🌙 */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            aria-label="Alternar tema"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={16} />}
          </button>
        </div>

      </div>
    </nav>
  );
}
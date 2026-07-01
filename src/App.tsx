import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workspace from './components/Workspace';
import Projects from './components/Projects';

export default function App() {
  // O estado começa como false (Modo Claro) por padrão ☀️
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Se darkMode for true, adicionamos a classe "dark" no container pai 🌐
    <div className={darkMode ? 'dark' : ''}>
      {/* 
        Definimos as cores padrões do site. 
        Se o modo escuro estiver ativo, o dark:bg e dark:text entram em ação! 🌓
      */}
      <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
        
        {/* Passamos o estado e a função para a Navbar conseguir alternar o modo */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="pt-6">
          <Workspace/>
          <Hero />
          <Projects/>
        </div>
        
      </div>
    </div>
  );
}
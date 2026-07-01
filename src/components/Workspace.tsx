import React, { useState, useEffect } from 'react';

const codeString = `// Welcome to my workspace
import { Developer } from './Olinda-pernambuco';

const Portfolio = () => {
  return (
    <Developer 
      name="Isaías Roberto"
      role="Full Stack Engineer"
      passion="Java / NestJS / CyberSecurity"
    />
  );
};`;

export default function Workspace() {
  const [typedCode, setTypedCode] = useState("");

  // Efeito de máquina de escrever calibrado e sem erros ⏱️
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedCode((prev) => {
        if (prev.length < codeString.length) {
          return prev + codeString[prev.length];
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 20);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollTo = (id: string) => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função auxiliar para colorir o texto à medida que é digitado 🎨
  const renderHighlightCode = () => {
    // Se ainda não terminou de digitar tudo, exibe o texto plano estilizado
    if (typedCode.length < codeString.length) {
      return <span className="text-slate-700 dark:text-slate-300">{typedCode}</span>;
    }

    // Quando a digitação termina, aplica as cores estáticas exatas por blocos
    return (
      <>
        <span className="text-slate-400 dark:text-slate-500">// Welcome to my workspace</span>{"\n"}
        <span className="text-purple-600 dark:text-purple-400">import</span>{" "}
        <span className="text-slate-800 dark:text-slate-200">{"{ "}</span>
        <span className="text-orange-600 dark:text-orange-400">Developer</span>
        <span className="text-slate-800 dark:text-slate-200">{" }"}</span>{" "}
        <span className="text-purple-600 dark:text-purple-400">from</span>{" "}
        <span className="text-green-600 dark:text-green-400">'./Olinda-pernambuco'</span>
        <span className="text-slate-800 dark:text-slate-200">;</span>{"\n\n"}
        
        <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
        <span className="text-yellow-600 dark:text-yellow-400">Portfolio</span>{" "}
        <span className="text-slate-800 dark:text-slate-200">= () =&gt; {"{"}</span>{"\n"}
        {"  "}<span className="text-purple-600 dark:text-purple-400">return</span><span className="text-slate-800 dark:text-slate-200"> (</span>{"\n"}
        {"    "}<span className="text-slate-800 dark:text-slate-400">&lt;</span>
        <span className="text-orange-600 dark:text-orange-400">Developer</span>{"\n"}
        {"      "}<span className="text-red-500 dark:text-red-400">name</span>
        <span className="text-slate-800 dark:text-slate-200">=</span>
        <span className="text-green-600 dark:text-green-400">"Isaías Roberto"</span>{"\n"}
        {"      "}<span className="text-red-500 dark:text-red-400">role</span>
        <span className="text-slate-800 dark:text-slate-200">=</span>
        <span className="text-green-600 dark:text-green-400">"Full Stack Engineer"</span>{"\n"}
        {"      "}<span className="text-red-500 dark:text-red-400">passion</span>
        <span className="text-slate-800 dark:text-slate-200">=</span>
        <span className="text-green-600 dark:text-green-400">"Java / NestJS / CyberSecurity"</span>{"\n"}
        {"    "}<span className="text-slate-800 dark:text-slate-400">/&gt;</span>{"\n"}
        {"  "}<span className="text-slate-800 dark:text-slate-200">);</span>{"\n"}
        <span className="text-slate-800 dark:text-slate-200">{"};"}</span>
      </>
    );
  };

  return (
    <section id="workspace" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-4 py-12 md:flex-row md:px-8 md:py-24">
      
      {/* 📋 LADO ESQUERDO */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl">
        <div className="mb-6 inline-flex items-center space-x-2 rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-mono text-xs font-medium tracking-wider text-orange-600 dark:text-orange-400">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span>SYSTEM.KERNEL :: v3.0.0 ONLINE</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 md:text-6xl mb-4 leading-none">
          Hello, I'm <br />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Isaías Roberto
          </span>
        </h1>

        <div className="mb-6 font-mono text-lg md:text-xl font-light text-slate-700 dark:text-slate-300">
          <span className="text-orange-500 dark:text-orange-400">&lt;CyberSecurity</span>
          <span className="text-slate-400"> /&gt;</span>
          <span className="text-sm md:text-base block md:inline md:ml-2 text-slate-500 dark:text-slate-400 font-sans">
            Engineering Security by Design.
          </span>
        </div>

        <p className="text-base font-light text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
          Construindo microsserviços escaláveis e arquiteturas blindadas contra vulnerabilidades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          <button
            onClick={() => handleScrollTo('about-hero')}
            className="group flex flex-1 max-w-[260px] items-center space-x-4 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900 cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 font-mono text-slate-600 transition-colors group-hover:bg-cyan-50 group-hover:text-cyan-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-cyan-950/50">
              &gt;_
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Initialize OS</div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1.5 overflow-hidden dark:bg-slate-800">
                <div className="h-full w-3/4 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </button>

          <a
            href="https://github.com/anidio"
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 max-w-[180px] items-center space-x-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-xs text-slate-400 font-mono">
              <div>Check out</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">GitHub</div>
            </div>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
          <span className="uppercase tracking-wider mr-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">Loaded_Modules:</span>
          {["Java", "Spring", "NestJS", "TypeScript", "Docker"].map((tech) => (
            <span key={tech} className="rounded border border-slate-200 bg-slate-100/50 px-2 py-0.5 text-[11px] text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 🖥️ LADO DIREITO: Editor com os botões internos de navegação (image_a901c9.png) */}
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 dark:border-slate-800">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-mono text-slate-400">portfolio.tsx</span>
          <div className="w-12" />
        </div>

        <div className="flex font-mono text-sm leading-relaxed min-h-[260px]">
          <div className="pr-4 text-right text-slate-300 select-none dark:text-slate-700">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="whitespace-pre-wrap font-light">
            {renderHighlightCode()}
            <span className="animate-pulse font-medium text-cyan-600">|</span>
          </pre>
        </div>

        {/* 🎛️ Botões de Ação integrados na parte inferior da janela */}
        <div className="mt-6 flex space-x-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button
            onClick={() => handleScrollTo('about-hero')}
            className="cursor-pointer rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-mono font-medium text-orange-600 hover:bg-orange-500/20 dark:text-orange-400"
          >
            ▷ Run Profile
          </button>
          <button
            onClick={() => handleScrollTo('projetos')}
            className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-mono font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            🗁 View Projects
          </button>
        </div>
      </div>

    </section>
  );
}
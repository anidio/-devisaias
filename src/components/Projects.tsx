import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dados dos seus projetos com base no seu portfólio e tecnologias
const projectsData = [
  {
    id: "frevo-mesa",
    title: "PDV Frevo na Mesa",
    description: "Sistema de PDV completo para controle de vendas, gerenciamento de mesas e fluxo de estoque em bares e restaurantes. Realiza cálculos automáticos de consumo e persistência estruturada no banco de dados.",
    tech: ["React", "Java", "Spring Boot", "PostgreSQL"],
    deployUrl: "https://frevo-na-mesa-front.vercel.app/",
    status: "SECURED"
  },
  {
    id: "crm-free",
    title: "CRM Freelancer",
    description: "Plataforma de CRM inteligente voltada para profissionais autônomos e freelancers que buscam otimizar a gestão, o funil e o acompanhamento de novos leads.",
    tech: ["React", "NestJS", "TypeScript"],
    deployUrl: "https://front-crm-kappa.vercel.app/home",
    status: "ACTIVE"
  },
  {
    id: "pule-gato",
    title: "Pule do Gato - IA Odds",
    description: "Ambiente web para monitoramento de partidas esportivas onde um algoritmo de Inteligência Artificial calcula e entrega as melhores probabilidades baseando-se em análise holística de dados.",
    tech: ["Python", "React", "Machine Learning"],
    deployUrl: "https://pule-do-gato-kappa.vercel.app/",
    status: "ONLINE"
  },
  {
    id: "senha-gen",
    title: "Gerador de Senhas",
    description: "Ferramenta utilitária focada em segurança para a geração instantânea de senhas aleatórias fortes, parametrizadas por tamanho e tipos de caracteres.",
    tech: ["TypeScript", "HTML", "CSS"],
    deployUrl: "https://gerador-de-senha-chi-orpin.vercel.app/",
    status: "STABLE"
  },
  {
    id: "my-drugs",
    title: "E-Commerce My Drugs",
    description: "Simulação de uma farmácia digital completa, englobando catálogo de produtos, rotas seguras de API e fluxo básico de interações.",
    tech: ["React", "NestJS", "TypeScript"],
    deployUrl: "https://my-drugs-coral.vercel.app/",
    status: "ACTIVE"
  },
  {
    id: "daily-organizer",
    title: "My Daily Organizer",
    description: "Gerenciador diário intuitivo focado em produtividade e bem-estar, permitindo listar tarefas e acompanhar metas de ingestão de água e calorias.",
    tech: ["React", "TailwindCSS"],
    deployUrl: "https://my-daily-organizer.vercel.app/",
    status: "STABLE"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20 relative">
      
      {/* 🏷️ Cabeçalho da Seção */}
      <div className="mb-12 flex items-center space-x-2 font-mono text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
        <span className="text-cyan-500">&gt;_</span>
        <span># Project.modules</span>
      </div>

      {/* 📊 Grade com 3 Colunas Responsiva */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-500/40 dark:border-slate-800 dark:bg-slate-900 cursor-pointer"
          >
            <div>
              {/* Topo do Card */}
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-4">
                <span>{project.id}.conf</span>
                <span className={`rounded-sm px-1.5 py-0.5 text-[10px] font-bold ${
                  project.status === 'SECURED' ? 'bg-green-500/10 text-green-600' : 'bg-cyan-500/10 text-cyan-600'
                }`}>
                  [{project.status}]
                </span>
              </div>

              {/* Título e Texto */}
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 font-sans group-hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-light text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags de Tecnologias */}
            <div className="mt-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
              {project.tech.map((t) => (
                <span key={t} className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧭 PAINEL LATERAL (Drawer) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Fundo Escurecido (Overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Conteúdo do Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 flex flex-col justify-between font-sans"
            >
              <div>
                {/* Cabeçalho do Drawer */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 dark:border-slate-800">
                  <span className="font-mono text-xs text-slate-400">inspect_mode.sh</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-mono"
                  >
                    [CLOSE]
                  </button>
                </div>

                {/* Título */}
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {selectedProject.title}
                </h2>

                {/* Status e Módulos */}
                <div className="flex items-center space-x-3 mb-6 font-mono text-xs">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-cyan-500 font-bold">{selectedProject.status}</span>
                </div>

                {/* Descrição Detalhada */}
                <div className="rounded-lg bg-slate-50 p-4 border border-slate-100 dark:bg-slate-900 dark:border-slate-800/50 mb-6">
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">&gt;_ Description</div>
                  <p className="text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Stack de Tecnologias */}
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-3">Compiled_Stack:</div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão de Deploy de Ação */}
              <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                <a
                  href={selectedProject.deployUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-xl bg-cyan-600 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700 font-sans"
                >
                  Launch Live Project ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import fotoDev from '../assets/devisaias2.png';

const activities = [
  "Creating Tech Content @devisaias",
  "Building Scalable Microservices",
  "Securing Apps by Design"
];

export default function Hero() {
  const [activityIndex, setActivityIndex] = useState(0);

  // Efeito para alternar as frases da atividade no card ⏱️
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about-hero" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
      
      {/* 🏷️ Título da Seção estilo Terminal */}
      <div className="mb-12 flex items-center space-x-2 font-mono text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
        <span className="text-orange-500">&gt;_</span>
        <span># About.system</span>
      </div>

      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row items-stretch">
        
        {/* 📇 CARD DO OPERADOR (Esquerda) */}
        <div className="flex flex-1 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 max-w-md w-full">
          
          {/* Foto com Elementos Orbitais Animados 🌀 */}
          <div className="relative my-6 flex justify-center">
            <div className="relative h-44 w-44">
              {/* Aro animado externo */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"
              />
              {/* Aro animado interno invertido */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-orange-500/30"
              />
              <div className="h-full w-full overflow-hidden rounded-full border-2 border-slate-200 p-1 dark:border-slate-700">
                <img src={fotoDev} alt="Isaías Roberto" className="h-full w-full rounded-full object-cover grayscale" />
              </div>
              <span className="absolute bottom-2 right-4 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" />
            </div>
          </div>

          {/* Dados Estruturados do Operador */}
          <div className="space-y-3 font-mono text-xs border-t border-slate-100 pt-4 dark:border-slate-800">
            <div className="flex justify-between">
              <span className="text-slate-400 uppercase tracking-wider">Operator</span>
              <span className="font-bold text-orange-600 dark:text-orange-400">ISAÍAS ROBERTO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 uppercase tracking-wider">Role</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400">FULL_STACK_ENGINEER</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 uppercase tracking-wider">Location</span>
              <span className="text-slate-700 dark:text-slate-300">Olinda, Brazil</span>
            </div>
            {/* Novo campo dinâmico substituindo o Status 🪄 */}
            {/* Atividade Dinâmica com Animação Corrigida 🪄 */}
            <div className="flex justify-between items-center h-6 border-t border-slate-100 pt-3 dark:border-slate-800">
              <span className="text-slate-400 uppercase tracking-wider text-[11px]">Activity</span>
              <div className="relative h-full flex items-center justify-end min-w-[200px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activities[activityIndex]}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 text-[11px] font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap"
                  >
                    {activities[activityIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* 📄 PAINEL DE LOGS (Direita) */}
        <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/50 w-full font-mono text-sm">
          <div className="text-xs text-slate-400 border-b border-slate-200 pb-2 mb-4 dark:border-slate-800">
            &gt;_ user_profile.log
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <div className="text-purple-600 dark:text-purple-400 font-bold mb-2">➔ whoami</div>
              <p className="text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
                Desenvolvedor de Software com mais de 3 anos de experiência focados no ecossistema Java (Spring Boot) e TypeScript (NestJS, Next.js). Transito entre a sustentação de ambientes críticos e a criação de microsserviços escaláveis, sempre priorizando alta performance e código limpo.
              </p>
            </div>

            <div>
              <div className="text-purple-600 dark:text-purple-400 font-bold mb-2">➔ cat mission.txt</div>
              <p className="text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
                Aplicar a filosofia de <strong className="font-semibold text-slate-800 dark:text-slate-100">Security by Design</strong> para garantir que as aplicações nasçam blindadas contra vulnerabilidades. Além disso, simplifico conceitos complexos de engenharia criando conteúdo digital no <span className="text-cyan-600 font-medium">@devisaias</span>.
              </p>
            </div>
          </div>

          {/* 📊 METRICAS (Rodapé do Painel) */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="rounded-lg bg-white border border-slate-100 p-3 dark:bg-slate-900 dark:border-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">4+ YRS</div>
            </div>
            <div className="rounded-lg bg-white border border-slate-100 p-3 dark:bg-slate-900 dark:border-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Platform</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">Java / Nest</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
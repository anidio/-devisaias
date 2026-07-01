// Estrutura das suas competências reais baseadas no seu perfil
const skillsData = [
  {
    category: "01. Backend Modules",
    icon: "☕",
    logs: [
      { name: "Java / Spring Boot", detail: "Microsserviços escaláveis & arquitetura MVC" },
      { name: "NestJS / Node.js", detail: "APIs RESTful de alta performance & TypeScript" },
      { name: "SQL & NoSQL", detail: "Oracle, PostgreSQL, MySQL e MongoDB" },
      { name: "RabbitMQ", detail: "Mensageria e comunicação assíncrona entre serviços" }
    ]
  },
  {
    category: "02. Frontend Modules",
    icon: "💻",
    logs: [
      { name: "TypeScript", detail: "Tipagem estática para aplicações resilientes" },
      { name: "React / Next.js", detail: "Interfaces dinâmicas, SPA e renderização SSR" },
      { name: "TailwindCSS", detail: "Estilização utilitária focada em performance visual" },
      { name: "State Management", detail: "Controle de estados complexos e hooks customizados" }
    ]
  },
  {
    category: "03. Infrastructure & Cloud",
    icon: "🐳",
    logs: [
      { name: "Docker", detail: "Conteinerização de ambientes de desenvolvimento e prod" },
      { name: "Linux OS", detail: "Administração de sistemas e automação via shell script" },
      { name: "AWS Cloud", detail: "Sustentação básica de serviços em nuvem (EC2, S3)" },
      { name: "CI/CD & Coolify", detail: "Esteiras de deploy contínuo e orquestração leve" }
    ]
  },
  {
    category: "04. CyberSecurity & Net",
    icon: "🛡️",
    logs: [
      { name: "Security by Design", detail: "Mitigação de vulnerabilidades OWASP Top 10 (XSS, SQLi)" },
      { name: "Criptografia", detail: "Implementação de chaves e proteção de dados sensíveis" },
      { name: "Redes de Computadores", detail: "Protocolos de comunicação, firewalls e tráfego seguro" },
      { name: "Gestão de Riscos", detail: "Análise preventiva contra brechas de segurança no código" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
      
      {/* 🏷️ Cabeçalho da Seção */}
      <div className="mb-12 flex items-center space-x-2 font-mono text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
        <span className="text-purple-500">&gt;_</span>
        <span># System.diagnostics</span>
      </div>

      {/* 📊 Grade de Terminais de Habilidades */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsData.map((block, index) => (
          <div 
            key={index}
            className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/50 font-mono text-xs"
          >
            {/* Barra superior do mini terminal */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 dark:border-slate-800">
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-bold">
                <span className="text-sm">{block.icon}</span>
                <span>{block.category}</span>
              </div>
              <span className="text-[10px] text-slate-400">sys_check.sh</span>
            </div>

            {/* Linhas de Logs de Diagnóstico */}
            <div className="space-y-3.5 flex-1">
              {block.logs.map((log, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  {/* Status do Módulo */}
                  <div className="text-green-600 dark:text-green-400 font-bold whitespace-nowrap select-none">
                    [ LOADED ]
                  </div>
                  
                  {/* Nome da Tecnologia e Detalhes */}
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block sm:inline">
                      {log.name}:
                    </span>{" "}
                    <span className="text-slate-500 dark:text-slate-400 font-sans font-light text-xs">
                      {log.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Rodapé do Mini Terminal */}
            <div className="mt-5 border-t border-slate-200 pt-2 text-[10px] text-slate-400 text-right dark:border-slate-800 select-none">
              Módulos verificados com sucesso.
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
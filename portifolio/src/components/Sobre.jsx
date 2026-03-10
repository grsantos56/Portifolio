import React, { useState } from 'react';
import { 
  FaCode, FaServer, FaMobileAlt, FaTools, FaMicrochip, FaShieldAlt, FaTimes,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaPython, 
  FaAws, FaGitAlt, FaDocker, FaLinux 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, 
  SiJunit5, SiPostman, SiSwagger, SiGooglecloud, SiKubernetes, SiJenkins 
} from 'react-icons/si';

import Reveal from './Reveal';

const Sobre = () => {
  const [modalData, setModalData] = useState(null);

  const TechBadgeInline = ({ children }) => (
    <span className="inline-block px-2 py-0.5 mx-1 rounded bg-[color:var(--primaria)]/10 border border-[color:var(--primaria)]/20 text-[color:var(--primaria)] font-semibold text-sm transition-all hover:bg-[color:var(--primaria)]/20">
      {children}
    </span>
  );

  const categorias = [
    { 
      nome: "Frontend", icon: <FaCode />, resumo: "React, Tailwind, JS",
      descricao: "Criação de interfaces modernas, responsivas e focadas na experiência do usuário (UX).",
      experiencia: "Desenvolvo interfaces complexas com React. Atualmente lidero o frontend do sistema RC Odontologia, focando em usabilidade para ambientes clínicos."
    },
    { 
      nome: "Backend", icon: <FaServer />, resumo: "Java, Spring Boot, SQL",
      descricao: "Desenvolvimento de APIs robustas, escaláveis e seguras utilizando o ecossistema Java.",
      experiencia: "Minha especialidade principal. Utilizo Spring Boot com foco em arquitetura limpa, DTOs, Spring Security e testes automatizados com JUnit."
    },
    { 
      nome: "Mobile", icon: <FaMobileAlt />, resumo: "React Native, Expo",
      descricao: "Criação de aplicativos nativos de alta performance para Android e iOS.",
      experiencia: "Desenvolvo soluções mobile intuitivas, como o NutriSnap, utilizando Expo para agilizar o ciclo de entrega e garantir performance."
    },
    { 
      nome: "Cyber Security", icon: <FaShieldAlt />, resumo: "Network Defense",
      descricao: "Proteção de infraestrutura e gerenciamento proativo de ameaças digitais.",
      experiencia: "Possuo certificação pela Cisco Networking Academy em Gerenciamento de Ameaças Cibernéticas, focando em segurança de redes e defesa proativa."
    },
    { 
      nome: "DevOps", icon: <FaTools />, resumo: "Docker, VPS, Linux",
      descricao: "Automação de ambientes, containerização e gerenciamento de servidores.",
      experiencia: "Experiência prática com Docker para padronização de ambientes e gerenciamento de servidores VPS Linux para deploy de aplicações."
    },
    { 
      nome: "Hardware & IoT", icon: <FaMicrochip />, resumo: "Monitoramento Remoto",
      descricao: "Integração entre software e componentes físicos para automação e controle.",
      experiencia: "Desenvolvi sistemas de monitoramento via IoT para controle de aeradores em fazendas de tilápia, unindo hardware e software em soluções reais."
    },
  ];

  const allTechs = [
    { icon: <FaHtml5 />, name: 'HTML5', color: 'text-[#E34F26]' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-[#1572B6]' },
    { icon: <FaJs />, name: 'JavaScript', color: 'text-[#F7DF1E]' },
    { icon: <FaReact />, name: 'React', color: 'text-[#61DAFB]' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-[#38B2AC]' },
    { icon: <FaFigma />, name: 'Figma', color: 'text-[#F24E1E]' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-[#339933]' },
    { icon: <FaJava />, name: 'Java', color: 'text-[#007396]' },
    { icon: <SiSpringboot />, name: 'SpringBoot', color: 'text-[#6DB33F]' },
    { icon: <SiJunit5 />, name: 'JUnit 5', color: 'text-[#25A162]' },
    { icon: <SiMysql />, name: 'MySQL', color: 'text-[#4479A1]' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-[#336791]' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-[#47A248]' },
    { icon: <FaPython />, name: 'Python', color: 'text-[#3776AB]' },
    { icon: <SiPostman />, name: 'Postman', color: 'text-[#FF6C37]' },
    { icon: <SiSwagger />, name: 'Swagger', color: 'text-[#85EA2D]' },
    { icon: <FaAws />, name: 'AWS', color: 'text-[#FF9900]' },
    { icon: <SiGooglecloud />, name: 'GCP', color: 'text-[#4285F4]' },
    { icon: <FaGitAlt />, name: 'Git', color: 'text-[#F05032]' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-[#2496ED]' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: 'text-[#326CE5]' },
    { icon: <SiJenkins />, name: 'Jenkins', color: 'text-[#D24939]' },
    { icon: <FaLinux />, name: 'Linux', color: 'text-[#FCC624]' },
  ];

  return (
    <section id="sobre" className="pt-20 px-6 md:px-[9%] min-h-screen pb-20 relative">
      <Reveal>
        <h2 className="text-4xl text-[color:var(--primaria)] mb-16 text-center font-bold relative after:absolute after:w-[100px] after:h-[3px] after:bg-gradient-to-r after:from-[color:var(--primaria)] after:to-[color:var(--secundaria)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          Trajetória & Expertise
        </h2>
      

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-24">
          
          <div className="flex flex-col justify-center bg-[color:var(--bg-card)] p-10 rounded-3xl border border-[color:var(--primaria)]/10 shadow-2xl h-full text-justify">
            <p className="text-lg text-[color:var(--text-claro)] leading-relaxed opacity-90 mb-6">
              Minha paixão pela tecnologia nasceu da curiosidade em entender como sistemas digitais funcionavam nos bastidores. Na infância, essa exploração começou de forma prática através do <TechBadgeInline>Cheat Engine</TechBadgeInline> e <TechBadgeInline>Lucky Patcher</TechBadgeInline>, ferramentas que usei para desconstruir e modificar jogos, desenvolvendo uma base lógica e analítica antes mesmo de escrever minha primeira linha de código oficial.
            </p>
            
            <p className="text-lg text-[color:var(--text-claro)] leading-relaxed opacity-90 mb-6">
              Em <span className="text-[color:var(--secundaria)] font-bold">2022</span>, aos 17 anos, decidi profissionalizar esse interesse. Iniciei meus estudos com <TechBadgeInline>JavaScript</TechBadgeInline> e <TechBadgeInline>Python</TechBadgeInline>, mas foi na robustez e tipagem do <TechBadgeInline>Java</TechBadgeInline> que encontrei minha verdadeira afinidade técnica. Atualmente, curso <span className="text-[color:var(--primaria)] font-semibold">Ciência da Computação na UESPI</span>, onde aprofundo meus conhecimentos teóricos.
            </p>

            <p className="text-lg text-[color:var(--text-claro)] leading-relaxed opacity-90">
              No campo prático, lidero o desenvolvimento do <span className="text-[color:var(--secundaria)] font-bold">RC Odontologia</span>, uma plataforma de gestão clínica, e trabalho no <TechBadgeInline>NutriSnap</TechBadgeInline> para o ecossistema mobile. Meu objetivo é evoluir constantemente em arquiteturas de microsserviços, práticas de <TechBadgeInline>DevOps</TechBadgeInline> e reforçar a segurança digital através da <TechBadgeInline>Cyber Security</TechBadgeInline>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {categorias.map((cat) => (
              <div 
                key={cat.nome} 
                onClick={() => setModalData(cat)}
                className="bg-[color:var(--bg-card)] p-6 rounded-2xl border border-[color:var(--primaria)]/5 hover:border-[color:var(--primaria)]/40 transition-all group hover:-translate-y-1 shadow-lg cursor-pointer flex flex-col justify-center"
              >
                <div className="text-3xl text-[color:var(--primaria)] mb-3 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[color:var(--text-claro)] mb-1">{cat.nome}</h3>
                <p className="text-[12px] font-bold text-[color:var(--primaria)] uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100">Saiba mais</p>
                <p className="text-xs text-[color:var(--text-claro)] opacity-60">{cat.resumo}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto text-center border-t border-[color:var(--primaria)]/10 pt-16">
          <h4 className="text-xl font-bold uppercase tracking-[0.3em] text-[color:var(--primaria)] mb-10 opacity-70">Stack Tecnológica Completa</h4>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-8 justify-items-center">
            {allTechs.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-2 group cursor-default">
                <div className={`text-4xl ${t.color} transition-all duration-300 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.1)]`}>
                  {t.icon}
                </div>
                <span className="text-[9px] uppercase font-bold text-[color:var(--text-claro)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Modal fora do Reveal para manter o posicionamento fixo correto */}
      {modalData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[5000] flex items-center justify-center p-6" onClick={() => setModalData(null)}>
          <div className="bg-[color:var(--bg-card)] p-10 rounded-3xl max-w-[600px] w-full border border-[color:var(--primaria)]/30 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalData(null)} className="absolute top-6 right-6 text-2xl text-[color:var(--text-claro)] hover:text-[color:var(--primaria)] transition-colors">
              <FaTimes />
            </button>
            <div className="text-6xl text-[color:var(--primaria)] mb-6">{modalData.icon}</div>
            <h2 className="text-4xl font-bold text-[color:var(--text-claro)] mb-6">{modalData.nome}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[color:var(--primaria)] font-bold text-xs uppercase tracking-[0.2em] mb-2">Conceito</h4>
                <p className="text-[color:var(--text-claro)] text-lg opacity-80 leading-relaxed">{modalData.descricao}</p>
              </div>
              <div>
                <h4 className="text-[color:var(--primaria)] font-bold text-xs uppercase tracking-[0.2em] mb-2">Aplicação Prática</h4>
                <p className="text-[color:var(--text-claro)] text-lg opacity-90 leading-relaxed italic border-l-2 border-[color:var(--primaria)]/30 pl-4">
                  {modalData.experiencia}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sobre;
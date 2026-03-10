import React from 'react';
import { FaCode, FaCloudUploadAlt, FaMobileAlt, FaPalette } from 'react-icons/fa';
import Reveal from './Reveal';

const Servicos = () => {
  const servicos = [
    { 
      icon: FaCode, 
      titulo: "Desenvolvimento Fullstack", 
      desc: "Criação de aplicações robustas e escaláveis, utilizando Java com Spring Boot no backend e interfaces modernas com React no frontend.",
      techs: ["Spring Boot", "React", "APIs REST"]
    },
    { 
      icon: FaMobileAlt, 
      titulo: "Desenvolvimento Mobile", 
      desc: "Construção de aplicativos nativos para Android e iOS utilizando React Native e Expo, focando em alta performance e experiência do usuário (UX).",
      techs: ["React Native", "Expo", "Mobile UI"]
    },
    { 
      icon: FaCloudUploadAlt, 
      titulo: "Infraestrutura & DevOps", 
      desc: "Implementação de containers com Docker, gerenciamento de servidores VPS (Linux) e deploy em ambientes de nuvem como AWS e GCP.",
      techs: ["Docker", "AWS", "Linux VPS"]
    },
    { 
      icon: FaPalette, 
      titulo: "UI/UX Design", 
      desc: "Projetação de interfaces intuitivas e atraentes utilizando Figma, sempre focando na melhor jornada para o usuário final.",
      techs: ["Figma", "Prototipagem", "Design System"]
    }
  ];

  return (
    <section id="servicos" className="pt-40 px-6 md:px-[9%] min-h-screen pb-20">
      {/* Título com Identidade Visual Neon */}
      <Reveal>
      <h2 className="text-4xl text-[color:var(--primaria)] mb-16 text-center font-bold relative after:absolute after:w-[100px] after:h-[3px] after:bg-gradient-to-r after:from-[color:var(--primaria)] after:to-[color:var(--secundaria)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
        Serviços & Soluções
      </h2>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        {servicos.map((s, i) => (
          <div 
            key={i} 
            className="bg-[color:var(--bg-card)] p-10 rounded-3xl border border-[color:var(--primaria)]/10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--primaria)]/40 hover:shadow-[0_10px_30px_rgba(var(--primaria-rgb),0.1)] group flex flex-col items-center shadow-lg"
          >
            {/* Ícone com Efeito de Brilho */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[color:var(--primaria)]/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              <s.icon className="text-6xl text-[color:var(--secundaria)] relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_2px_var(--primaria)]" />
            </div>

            <h3 className="text-2xl text-[color:var(--primaria)] font-bold mb-4">
              {s.titulo}
            </h3>
            
            <p className="text-[color:var(--text-claro)] opacity-80 leading-relaxed mb-6 flex-grow">
              {s.desc}
            </p>

            {/* Badges de Tecnologias Relacionadas ao Serviço */}
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {s.techs.map((tech, idx) => (
                <span key={idx} className="text-[12px] uppercase font-bold tracking-widest px-3 py-1 bg-[color:var(--primaria)]/5 text-[color:var(--primaria)] border border-[color:var(--primaria)]/10 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
};

export default Servicos;
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaJava, FaNodeJs, FaReact, FaJs, FaGitAlt, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import Reveal from './Reveal';

const certificadosData = [
  {
    titulo: "Gerenciamento de ameaças cibernéticas",
    instituicao: "Cisco Networking Academy",
    data: "21 Set 2025",
    descricao: "Foco em vetores de ataque, vulnerabilidades de rede e estratégias de mitigação e defesa cibernética.",
    link: "/certificates/Certificado Cisco.pdf",
    icon: <FaShieldAlt className="text-3xl text-red-500" />
  },
  {
    titulo: "Java COMPLETO: Programação Orientada a Objetos + Projetos",
    instituicao: "Udemy",
    data: "27 de Maio de 2025",
    cargaHoraria: "54.5h",
    descricao: "Domínio completo de POO, herança, polimorfismo, interfaces, tratamento de exceções e banco de dados com JDBC.",
    link: "/certificates/Java POO Udemy.pdf",
    icon: <FaJava className="text-3xl text-[#007396]" />
  },
  {
    titulo: "Introdução ao Node.js",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "50h",
    descricao: "Conceitos de APIs REST, roteamento, middlewares e o funcionamento do motor assíncrono do Node.js.",
    link: "/certificates/Introdução ao Node pt.pdf",
    icon: <FaNodeJs className="text-3xl text-[#339933]" />
  },
  {
    titulo: "JavaScript",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "31h",
    descricao: "Lógica de programação avançada, manipulação do DOM, Closures e Programação Funcional com JS.",
    link: "/certificates/Javascript pt.pdf",
    icon: <FaJs className="text-3xl text-[#F7DF1E]" />
  },
  {
    titulo: "Introdução ao React",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "15h",
    descricao: "Componentização, Hooks (useState, useEffect), propriedades e gerenciamento de estado na web.",
    link: "/certificates/Introdução ao React pt.pdf",
    icon: <FaReact className="text-3xl text-[#61DAFB]" />
  },
  {
    titulo: "Fundamentos de Java",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "11h",
    descricao: "Sintaxe da linguagem, tipos primitivos, estruturas de controle e as bases para o ecossistema Java.",
    link: "/certificates/Fundamentos de java pt.pdf",
    icon: <FaJava className="text-3xl text-[#007396]" />
  },
  {
    titulo: "Minicurso de Java",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "5h",
    descricao: "Desenvolvimento rápido de uma aplicação CLI para fixação de conceitos básicos da linguagem Java.",
    link: "/certificates/Mini curso Java Rocketseat pt.pdf",
    icon: <FaJava className="text-3xl text-[#007396]" />
  },
  {
    titulo: "Fundamentos do Spring Boot",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "2h",
    descricao: "Criação de APIs modernas, injeção de dependência e as bases para o desenvolvimento backend corporativo.",
    link: "/certificates/Fundamentos de spring boot pt.pdf",
    icon: <SiSpringboot className="text-3xl text-[#6DB33F]" />
  },
  {
    titulo: "O básico de Git e GitHub",
    instituicao: "Rocketseat",
    data: "07/06/2025",
    cargaHoraria: "1h",
    descricao: "Versionamento de código, comandos básicos (push, pull, commit) e colaboração no GitHub.",
    link: "/certificates/Basico de git e github pt.pdf",
    icon: <FaGitAlt className="text-3xl text-[#F05032]" />
  }, 
  {
    titulo: "Desenvolvimento Web Completo", 
    instituicao: "Udemy",
    data: "06/03/2026",
    cargaHoraria: "120h",
    descricao: "Capacitação completa em HTML5, CSS3, Bootstrap 4, JS, PHP 7, Banco de dados e padrões MVC.",
    link: "/certificates/web completo.pdf",
    icon: <FaJs className="text-3xl text-[#61DAFB]" />
  }
];

const Certificados = () => {
  const [verTodos, setVerTodos] = useState(false);

  const certificadosExibidos = verTodos ? certificadosData : certificadosData.slice(0, 3);

  return (
    <section id="certificados" className="pt-28 px-6 md:px-[9%] pb-32">
      <Reveal>
        <h2 className="text-4xl text-[color:var(--primaria)] mb-12 text-center font-bold relative after:absolute after:w-[100px] after:h-[3px] after:bg-gradient-to-r after:from-[color:var(--primaria)] after:to-[color:var(--secundaria)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          Certificações
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {certificadosExibidos.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-[color:var(--bg-card)] p-6 rounded-2xl border border-white/5 shadow-lg hover:shadow-[color:var(--primaria)]/10 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  {cert.icon}
                  {cert.cargaHoraria && (
                    <span className="text-xs font-bold px-3 py-1 bg-[color:var(--primaria)]/10 text-[color:var(--primaria)] rounded-full">
                      {cert.cargaHoraria}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[color:var(--text-claro)] mb-2 line-clamp-2">
                  {cert.titulo}
                </h3>
                
                <p className="text-[color:var(--primaria)] font-medium text-sm mb-1">
                  {cert.instituicao}
                </p>

                {/* Breve texto explicativo adicionado aqui */}
                <p className="text-xs text-[color:var(--text-claro)] opacity-80 leading-relaxed mb-4 italic">
                  {cert.descricao}
                </p>
                
                <p className="text-[10px] uppercase font-bold text-[color:var(--text-claro)] opacity-40">
                  Concluído em {cert.data}
                </p>
              </div>

              <div className="mt-6 flex justify-end border-t border-white/5 pt-4">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold text-[color:var(--primaria)] hover:text-[color:var(--secundaria)] transition-colors group"
                >
                  Ver PDF <FaExternalLinkAlt className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVerTodos(!verTodos)}
            className="flex items-center gap-2 px-8 py-3 bg-[color:var(--bg-card)] border border-[color:var(--primaria)]/30 text-[color:var(--primaria)] rounded-full font-bold transition-all hover:bg-[color:var(--primaria)] hover:text-[color:var(--bg-escuro)] hover:shadow-[0_0_15px_var(--primaria)]/30 group"
          >
            {verTodos ? (
              <>Ver Menos <FaChevronUp className="transition-transform group-hover:-translate-y-1" /></>
            ) : (
              <>Ver Todos ({certificadosData.length}) <FaChevronDown className="transition-transform group-hover:translate-y-1" /></>
            )}
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default Certificados;
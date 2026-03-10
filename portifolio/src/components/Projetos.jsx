import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  FaJava, FaReact, FaPython, FaLinux, FaTerminal, FaHtml5, 
  FaCss3Alt, FaJs, FaTimes, FaGithub, FaExternalLinkAlt, FaDatabase
} from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMysql, SiDocker, SiHibernate } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

import Reveal from './Reveal';

const projetosData = [
  {
    id: 1,
    titulo: "API RESTful: Spring Expert",
    categoria: "Backend Development",
    imagem: "img/workshop.png",
    descricao: "Ecossistema robusto para alta disponibilidade e integridade de dados.",
    descricaoLonga: "Neste projeto, desenvolvi uma infraestrutura de API escalável utilizando Java e Spring Boot. Implementei o padrão de camadas (Resource, Service, Repository) para garantir um código limpo e de fácil manutenção. Utilizei o Hibernate para mapeamento objeto-relacional com PostgreSQL, além de configurar tratamentos de exceções customizados que retornam mensagens claras para o frontend.",
    techs: [FaJava, SiSpringboot, SiPostgresql, SiHibernate],
    repo: "https://github.com/grsantos56/workshop"
  },
  {
    id: 2,
    titulo: "Linux Systems Automation",
    categoria: "DevOps & Scripting",
    imagem: "img/gerenciador de pacotes.png",
    descricao: "Otimização de workflow e configuração automática de ambientes Unix.",
    descricaoLonga: "Desenvolvi uma suíte de automação em Python projetada para transformar o setup de máquinas Linux de horas para minutos. O script gerencia permissões de superusuário, verifica dependências de sistema e instala ferramentas essenciais como Docker, VS Code e ambientes Java.",
    techs: [FaPython, FaLinux, FaTerminal, SiDocker],
    repo: "https://github.com/grsantos56/LinuxTools"
  },
  {
    id: 3,
    titulo: "TaskFlow: Fullstack Management",
    categoria: "Fullstack Application",
    imagem: "img/gerenciador de tarefas.png",
    descricao: "Integração completa entre serviços Java e interfaces dinâmicas.",
    descricaoLonga: "Um sistema de gestão de produtividade que une o poder do Spring Boot no backend com a agilidade do React no frontend. No servidor, estruturei uma base de dados MySQL otimizada para consultas rápidas.",
    techs: [FaJava, SiSpringboot, FaReact, SiMysql],
    repo: "https://github.com/grsantos56/estudos-spring"
  },
  {
    id: 4,
    titulo: "WikiGames: Data Discovery",
    categoria: "Frontend Engineering",
    imagem: "img/wikigames.png",
    descricao: "Exploração de grandes volumes de dados com UX de alta performance.",
    descricaoLonga: "Aplicação focada no consumo inteligente de APIs REST externas. O grande desafio aqui foi a manipulação de objetos JSON complexos para exibição em cards responsivos.",
    techs: [FaHtml5, FaCss3Alt, FaJs, FaReact],
    repo: "https://github.com/grsantos56/Trabalho-de-desenvolvimento-web"
  }
];

const Projetos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projetoAtual, setProjetoAtual] = useState(null);
  const carouselRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const x = useMotionValue(0);
  const progress = useTransform(x, [constraints.left, 0], ["100%", "0%"]);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current) {
        const fullWidth = carouselRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        setConstraints({ left: -(fullWidth - visibleWidth), right: 0 });
      }
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return (
    <section id="projetos" className="pt-28 px-6 md:px-[9%] min-h-screen pb-20 relative">
      <Reveal>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl text-[color:var(--text-claro)] font-black italic uppercase leading-none">
             <span className="text-[color:var(--primaria)]"> Projetos</span>
            </h2>
          </div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-[2rem]" ref={carouselRef}>
            <motion.div 
              drag="x"
              style={{ x }}
              dragConstraints={constraints}
              dragElastic={0.1}
              className="flex gap-8"
            >
              {projetosData.map((proj) => (
                <div key={proj.id} className="flex-shrink-0 w-[85%] md:w-[45%] xl:w-[40%] select-none">
                  {/* bg-card adaptativo e borda baseada no text-claro com baixa opacidade */}
                  <div className="bg-[color:var(--bg-card)]/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-[color:var(--text-claro)]/10 shadow-2xl h-full flex flex-col group transition-all duration-500 hover:border-[color:var(--primaria)]/40">
                    
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                        {proj.categoria}
                      </div>
                      <img src={proj.imagem} alt={proj.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {/* Gradiente que se funde com a cor do card do tema atual */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-card)] to-transparent opacity-80"></div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Título usando a variável de texto do tema */}
                      <h3 className="text-xl text-[color:var(--text-claro)] font-bold mb-3 group-hover:text-[color:var(--primaria)] transition-colors tracking-tight">
                        {proj.titulo}
                      </h3>
                      <p className="text-sm text-[color:var(--text-claro)] opacity-60 mb-8 leading-relaxed line-clamp-2">
                        {proj.descricao}
                      </p>

                      <div className="flex gap-4 mb-8">
                        {proj.techs.map((Icon, idx) => (
                          <Icon key={idx} className="text-xl text-[color:var(--text-claro)] opacity-30 group-hover:text-[color:var(--primaria)] group-hover:opacity-100 transition-all" />
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <button 
                          onClick={() => { setProjetoAtual(proj); setModalOpen(true); }} 
                          className="flex-[2] py-3.5 bg-[color:var(--text-claro)]/5 border border-[color:var(--text-claro)]/10 text-[color:var(--text-claro)] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[color:var(--primaria)] hover:text-white hover:border-[color:var(--primaria)] transition-all"
                        >
                          Detalhes
                        </button>
                        <a 
                          href={proj.repo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex-1 flex items-center justify-center bg-[color:var(--text-claro)]/5 border border-[color:var(--text-claro)]/10 text-[color:var(--text-claro)] rounded-xl hover:text-[color:var(--primaria)] hover:border-[color:var(--primaria)] transition-all"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="h-1 w-64 bg-[color:var(--text-claro)]/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[color:var(--primaria)] to-[color:var(--secundaria)] shadow-[0_0_15px_var(--primaria)]"
                style={{ width: progress }}
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* MODAL ADAPTATIVO */}
      {modalOpen && projetoAtual && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[5000] flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[color:var(--bg-card)] rounded-[2.5rem] p-6 md:p-12 max-w-[1000px] w-full border border-[color:var(--text-claro)]/10 relative shadow-2xl overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 text-2xl text-[color:var(--text-claro)] opacity-20 hover:opacity-100 transition-colors z-30">
              <FaTimes />
            </button>
            
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-[color:var(--text-claro)]/10 shadow-2xl aspect-video lg:aspect-square">
                <img src={projetoAtual.imagem} alt={projetoAtual.titulo} className="w-full h-full object-cover" />
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-[color:var(--primaria)] font-black text-[10px] tracking-[0.4em] uppercase mb-2 block opacity-70">
                  Case Study
                </span>
                <h3 className="text-4xl text-[color:var(--text-claro)] font-black mb-6 leading-tight tracking-tighter">
                  {projetoAtual.titulo}
                </h3>
                
                <div className="max-h-[300px] overflow-y-auto pr-4 scrollbar-thin">
                  <p className="text-[color:var(--text-claro)] opacity-80 text-lg leading-relaxed text-justify font-medium">
                    {projetoAtual.descricaoLonga}
                  </p>
                </div>

                <div className="mt-10 flex gap-4">
                  <a href={projetoAtual.repo} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[color:var(--primaria)] text-white rounded-xl font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-[color:var(--primaria)]/20">
                    <FaGithub className="text-sm" /> Ver no GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
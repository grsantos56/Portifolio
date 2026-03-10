import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import { 
  FaWhatsapp, FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, 
  FaNodeJs, FaReact, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaJs, 
  FaAws, FaLinux, FaPython, FaJava, FaFigma, FaGoogle
} from 'react-icons/fa';
import { 
  SiSpringboot, SiTailwindcss, SiMysql, SiPostgresql, 
  SiMongodb, SiKubernetes, SiJenkins, SiPostman, SiSwagger, SiGooglecloud, 
  SiJunit5
} from 'react-icons/si';

import Reveal from './Reveal';

// 1. Tecnologias Orbitando (Adicionado AWS e Linux)
const techOrbitData = [
  { icon: SiSpringboot, color: "text-[#6DB33F]", name: 'SpringBoot', radius: 110 },
  { icon: FaNodeJs, color: "text-[#339933]", name: 'Node.js', radius: 125 },
  { icon: SiTailwindcss, color: "text-[#38B2AC]", name: 'Tailwind', radius: 140 },
  { icon: FaReact, color: "text-[#61DAFB]", name: 'React', radius: 155 },
  { icon: SiMysql, color: "text-[#4479A1]", name: 'MySQL', radius: 170 },
  { icon: FaGitAlt, color: "text-[#F05032]", name: 'Git', radius: 185 },
  { icon: FaDocker, color: "text-[#2496ED]", name: 'Docker', radius: 200 },
  { icon: FaAws, color: "text-[#FF9900]", name: 'AWS', radius: 215 }, // Nova
  { icon: FaLinux, color: "text-[#FCC624]", name: 'Linux', radius: 230 }, // Nova
];

// 2. Lista completa baseada na imagem enviada
const todasTechs = [
  { icon: FaHtml5, name: 'HTML5', cat: 'frontend', color: 'text-[#E34F26]' },
  { icon: FaCss3Alt, name: 'CSS3', cat: 'frontend', color: 'text-[#1572B6]' },
  { icon: FaJs, name: 'JavaScript', cat: 'frontend', color: 'text-[#F7DF1E]' },
  { icon: FaReact, name: 'React', cat: 'frontend', color: 'text-[#61DAFB]' },
  { icon: SiTailwindcss, name: 'Tailwind', cat: 'frontend', color: 'text-[#38B2AC]' },
  { icon: FaFigma, name: 'Figma', cat: 'frontend', color: 'text-[#F24E1E]' },
  { icon: FaNodeJs, name: 'Node.js', cat: 'backend', color: 'text-[#339933]' },
  { icon: FaJava, name: 'Java', cat: 'backend', color: 'text-[#007396]' },
  { icon: SiSpringboot, name: 'SpringBoot', cat: 'backend', color: 'text-[#6DB33F]' },
  { icon: SiJunit5, name: 'JUnit 5', cat: 'backend', color: 'text-[#6DB33F]' },
  { icon: SiMysql, name: 'MySQL', cat: 'backend', color: 'text-[#4479A1]' },
  { icon: SiPostgresql, name: 'PostgreSQL', cat: 'backend', color: 'text-[#336791]' },
  { icon: SiMongodb, name: 'MongoDB', cat: 'backend', color: 'text-[#47A248]' },
  { icon: FaPython, name: 'Python', cat: 'backend', color: 'text-[#3776AB]' },
  { icon: SiPostman, name: 'Postman', cat: 'backend', color: 'text-[#FF6C37]' },
  { icon: SiSwagger, name: 'Swagger', cat: 'backend', color: 'text-[#85EA2D]' },
  { icon: FaAws, name: 'AWS', cat: 'devops', color: 'text-[#FF9900]' },
  { icon: SiGooglecloud, name: 'GCP', cat: 'devops', color: 'text-[#4285F4]' },
  { icon: FaGitAlt, name: 'Git', cat: 'devops', color: 'text-[#F05032]' },
  { icon: FaDocker, name: 'Docker', cat: 'devops', color: 'text-[#2496ED]' },
  { icon: SiKubernetes, name: 'Kubernetes', cat: 'devops', color: 'text-[#326CE5]' },
  { icon: SiJenkins, name: 'Jenkins', cat: 'devops', color: 'text-[#D24939]' },
  { icon: FaLinux, name: 'Linux', cat: 'devops', color: 'text-[#FCC624]' },
];



const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filtro, setFiltro] = useState('todos');

  const isMobile = window.innerWidth < 768;
  const duration = 25; // Aumentado para um movimento mais suave com 9 ícones

  const techsFiltradas = filtro === 'todos' 
    ? todasTechs 
    : todasTechs.filter(t => t.cat === filtro);

  return (
    <section id="inicio" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen pt-8 px-6 md:px-[9%] gap-12 overflow-hidden">
      
      <div className="flex-1 max-w-[600px] text-center md:text-left z-10">
        <h3 className="text-2xl md:text-3xl mt-4">Olá, meu nome é</h3>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-2 text-[color:var(--primaria)]">
          Gabriel Rodrigues
        </h1>
        <h3 className="text-2xl md:text-3xl mt-4">
          Eu sou <ReactTyped 
            strings={['Desenvolvedor Fullstack', 'UX/UI Designer', 'DevOps', 'Desenvolvedor Mobile']} 
            typeSpeed={75} backSpeed={50} loop 
            className="text-[color:var(--secundaria)] font-semibold" 
          />
        </h3>
        <p className="text-lg md:text-xl mt-6 leading-relaxed">
          Sou um desenvolvedor fullstack com experiência em criar aplicações web e mobile.
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-12">
          {[
            { icon: FaWhatsapp, link: "https://wa.me/559999851464" },
            { icon: FaGithub, link: "https://github.com/grsantos56" },
            { icon: FaInstagram, link: "https://www.instagram.com/gabrielrsantos56/" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/gabrielrsantos56/" },
            { icon: FaEnvelope, link: "mailto:gabrielrsantos999@gmail.com" }
          ].map((Social, index) => (
            <a key={index} href={Social.link} target="_blank" rel="noreferrer" 
               className="flex items-center justify-center w-[45px] h-[45px] rounded-full border border-[color:var(--primaria)] text-[color:var(--primaria)] text-xl transition-all duration-300 hover:bg-[color:var(--primaria)] hover:text-[color:var(--bg-escuro)] hover:-translate-y-2">
              <Social.icon />
            </a>
          ))}
        </div>

        <a href="Meu Curriculo.pdf" target="_blank" rel="noreferrer" 
           className="inline-block mt-10 px-9 py-4 bg-[color:var(--primaria)] text-[color:var(--bg-escuro)] rounded-full font-bold text-xl transition-all hover:scale-105 hover:-translate-y-1">
          Veja meu currículo
        </a>
      </div>

      <div className="flex-shrink-0 z-0">
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center overflow-visible">
          
          {/* Órbita Elíptica 3D com 9 ícones */}
          {techOrbitData.map((tech, index) => {
            const delay = (duration / techOrbitData.length) * index;
            const xRad = isMobile ? 160 : 270; 
            const yRad = isMobile ? 55 : 85;

            return (
              <div
                key={tech.name}
                className="absolute left-1/2 top-1/2 animate-orbit3D flex items-center justify-center p-2 rounded-full bg-[color:var(--bg-card)] shadow-lg border border-white/5 backdrop-blur-sm"
                style={{ 
                  '--orbit-delay': `-${delay}s`,
                  '--orbit-duration': `${duration}s`,
                  '--orbit-x-radius': `${xRad}px`,
                  '--orbit-y-radius': `${yRad}px`,
                }}
              >
                <tech.icon className={`text-2xl md:text-3xl ${tech.color}`} />
              </div>
            );
          })}

          {/* Foto de Perfil Ampliada e Interativa */}
          <div 
            className="relative group cursor-pointer z-10" 
            onClick={() => setModalOpen(true)}
          >
            <img 
              src="https://res.cloudinary.com/dpkfluxse/image/upload/v1773161746/perfil_kcrnxm.png" 
              alt="perfil" 
              className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] object-cover rounded-full border-[4px] border-[color:var(--primaria)] shadow-[0_0_20px_var(--primaria)] animate-float transition-all duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-base md:text-xl text-center px-4">Ver minhas tecnologias</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Tecnologias Filtrável */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[2000] flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-[color:var(--bg-card)] p-8 rounded-3xl max-w-[700px] w-full border border-[color:var(--primaria)]/30" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[color:var(--primaria)]">Minhas Tecnologias</h2>
              <button onClick={() => setModalOpen(false)} className="text-4xl text-[color:var(--text-claro)] hover:text-[color:var(--primaria)]">&times;</button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {['todos', 'frontend', 'backend', 'devops'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setFiltro(cat)} 
                  className={`px-4 py-2 rounded-full border border-[color:var(--primaria)] transition-all ${filtro === cat ? 'bg-[color:var(--primaria)] text-[color:var(--bg-escuro)]' : 'text-[color:var(--primaria)] hover:bg-[color:var(--primaria)]/10'}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {techsFiltradas.map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <tech.icon className={`text-5xl ${tech.color} transition-transform group-hover:scale-110`} />
                  <span className="text-xs font-medium text-[color:var(--text-claro)] text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
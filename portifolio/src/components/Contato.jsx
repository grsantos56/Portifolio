import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Reveal from './Reveal';

const Contato = () => {
  const links = [
    { icon: FaLinkedin, nome: "LinkedIn", url: "https://www.linkedin.com/in/gabrielrsantos56/", color: "hover:text-[#0077B5]" },
    { icon: FaGithub, nome: "GitHub", url: "https://github.com/grsantos56", color: "hover:text-[#fafafa]" },
    { icon: FaWhatsapp, nome: "Whatsapp", url: "https://wa.me/559999851464", color: "hover:text-[#25D366]" },
    { icon: FaInstagram, nome: "Instagram", url: "https://www.instagram.com/gabrielrsantos56/", color: "hover:text-[#E4405F]" },
    { icon: FaEnvelope, nome: "E-mail", url: "mailto:gabrielrsantos999@gmail.com", color: "hover:text-[#EA4335]" },
  ];

  return (
    <section id="contatos" className="pt-40 px-6 md:px-[9%] pb-32 min-h-[80vh] flex flex-col items-center">
      <Reveal>
      {/* Título com Identidade Visual Neon */}
      <h2 className="text-4xl text-[color:var(--primaria)] mb-16 text-center font-bold relative after:absolute after:w-[100px] after:h-[3px] after:bg-gradient-to-r after:from-[color:var(--primaria)] after:to-[color:var(--secundaria)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
        Vamos Conversar?
      </h2>

      <div className="max-w-[850px] w-full bg-[color:var(--bg-card)] border border-[color:var(--primaria)]/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl backdrop-blur-md relative overflow-hidden group">
        
        {/* Detalhe estético de fundo */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[color:var(--primaria)]/5 rounded-full blur-3xl group-hover:bg-[color:var(--primaria)]/10 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <FaPaperPlane className="text-5xl text-[color:var(--secundaria)] mx-auto mb-6 animate-bounce" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-[color:var(--text-claro)] mb-6">
            Sinta-se à vontade para <span className="text-[color:var(--primaria)]">me chamar!</span>
          </h3>
          
          <p className="text-lg md:text-xl text-[color:var(--text-claro)] opacity-80 mb-12 leading-relaxed max-w-[600px] mx-auto">
            Seja para discutir um novo projeto, tirar dúvidas técnicas sobre <span className="font-semibold text-[color:var(--secundaria)]">Spring Boot</span> ou <span className="font-semibold text-[color:var(--secundaria)]">React</span>, ou apenas para dar um "oi", estou sempre aberto a novas conexões.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer" 
                title={link.nome}
                className={`flex flex-col items-center gap-3 text-[color:var(--text-claro)] transition-all duration-300 hover:-translate-y-2 ${link.color} group/link`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[color:var(--bg-escuro)] border border-white/5 shadow-lg group-hover/link:border-[color:var(--primaria)]/50 group-hover/link:shadow-[0_0_15px_var(--primaria)]/20 transition-all">
                  <link.icon className="text-3xl" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover/link:opacity-100">
                  {link.nome}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé Simples */}
      <div className="mt-20 text-center opacity-40 text-sm text-[color:var(--text-claro)]">
        <p>© 2026 Gabriel Rodrigues. Desenvolvido com carinho e muito café.</p>
      </div>
        </Reveal>
    </section>
  );
};

export default Contato;
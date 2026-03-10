import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoColorPaletteOutline } from 'react-icons/io5';

const temas = [
  { 
    nome: 'Roxo', corBtn: 'bg-[#7c3aed]', 
    vars: { '--primaria': '#7c3aed', '--secundaria': '#8b5cf6', '--bg-escuro': '#13111c', '--bg-card': '#1e1b2e', '--text-claro': '#f8fafc', '--bg-nav': 'rgba(19, 17, 28, 0.98)' } 
  },
  { 
    nome: 'Azul', corBtn: 'bg-[#3b82f6]', 
    vars: { '--primaria': '#3b82f6', '--secundaria': '#60a5fa', '--bg-escuro': '#0d1522', '--bg-card': '#152136', '--text-claro': '#f0f9ff', '--bg-nav': 'rgba(13, 21, 34, 0.95)' } 
  },
  { 
    nome: 'Verde', corBtn: 'bg-[#10b981]', 
    vars: { '--primaria': '#10b981', '--secundaria': '#34d399', '--bg-escuro': '#0b1713', '--bg-card': '#11241e', '--text-claro': '#ecfdf5', '--bg-nav': 'rgba(11, 23, 19, 0.95)' } 
  },
  { 
    nome: 'Branco', corBtn: 'bg-white', 
    vars: { '--primaria': '#0f172a', '--secundaria': '#475569', '--bg-escuro': '#f8fafc', '--bg-card': '#ffffff', '--text-claro': '#1e293b', '--bg-nav': 'rgba(248, 250, 252, 0.95)' } 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [temaAtivo, setTemaAtivo] = useState(temas[0]);
  const colorMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorMenuRef.current && !colorMenuRef.current.contains(event.target)) {
        setIsColorMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mudarTema = (tema) => {
    setTemaAtivo(tema);
    Object.keys(tema.vars).forEach(key => {
      document.documentElement.style.setProperty(key, tema.vars[key]);
    });
    setIsColorMenuOpen(false);
  };

  const menuItems = [
    { name: 'Início', link: '#inicio' },
    { name: 'Sobre Mim', link: '#sobre' },
    { name: 'Serviços', link: '#servicos' },
    { name: 'Projetos', link: '#projetos' },
    { name: 'Contato', link: '#contatos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[color:var(--bg-nav)] z-[1000] border-b border-white/5 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1200px] mx-auto w-full h-full px-4 sm:px-6 flex justify-between items-center relative">
        
        {/* Nome DEV em uma linha única e responsiva */}
        <div className="font-bold text-lg sm:text-2xl z-[1100] tracking-tighter text-[color:var(--text-claro)] whitespace-nowrap pr-2">
          <span className="text-[color:var(--primaria)]">Dev</span> Gabriel Rodrigues
        </div>
        
        <nav className="flex items-center gap-2 sm:gap-4">
          {/* Seletor de Cores */}
          <div className="relative z-[1100]" ref={colorMenuRef}>
            <button
              onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-[color:var(--primaria)]/20 transition-all text-lg sm:text-xl text-[color:var(--primaria)]"
            >
              <IoColorPaletteOutline />
            </button>
            
            {isColorMenuOpen && (
              <div className="absolute top-14 right-0 bg-[color:var(--bg-card)] border border-white/10 p-3 rounded-2xl flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {temas.map((tema) => (
                  <button
                    key={tema.nome}
                    onClick={() => mudarTema(tema)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className={`w-5 h-5 rounded-full ${tema.corBtn} border border-white/10`} />
                    <span className="text-xs font-semibold text-[color:var(--text-claro)]">{tema.nome}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão Hamburguer */}
          <button 
            className="md:hidden p-2 sm:p-2.5 rounded-full border border-white/10 bg-white/5 text-[color:var(--text-claro)] text-xl z-[1100]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Menu Híbrido com Animação de Sublinhado */}
          <ul className={`
            md:flex md:flex-row md:gap-8 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:opacity-100 md:translate-y-0
            ${isOpen 
              ? 'absolute top-full left-0 w-full bg-[color:var(--bg-nav)] flex flex-col items-start p-10 gap-6 opacity-100 translate-y-0 border-b border-[color:var(--primaria)]/20 shadow-2xl transition-all duration-300' 
              : 'absolute top-full left-0 w-full bg-[color:var(--bg-nav)] flex flex-col items-start p-10 gap-6 -translate-y-5 opacity-0 pointer-events-none md:pointer-events-auto transition-all duration-300'
            }
          `}>
            {menuItems.map((item) => (
              <li key={item.name} className="w-full md:w-auto group">
                <a 
                  href={item.link} 
                  onClick={() => setIsOpen(false)} 
                  className="text-xl md:text-sm lg:text-base text-[color:var(--text-claro)] font-bold md:font-medium transition-colors hover:text-[color:var(--primaria)] block w-full whitespace-nowrap relative
                  
                  /* Animação de Sublinhar Esquerda para Direita */
                  after:content-[''] 
                  after:absolute 
                  after:bottom-[-4px] 
                  after:left-0 
                  after:w-0 
                  after:h-[2px] 
                  after:bg-[color:var(--primaria)] 
                  after:transition-all 
                  after:duration-300 
                  hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
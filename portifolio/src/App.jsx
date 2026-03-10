import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Projetos from './components/Projetos';
import Certificados from './components/Certificados';
import CustomCursor from './components/CustomCursor';

import React from 'react';

function App() {
  return (
    <div className="bg-escuro text-claro min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Certificados />
      <Servicos />
      <Contato />
    </div>
  );
}

export default App;
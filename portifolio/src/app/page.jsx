import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Servicos from '../components/Servicos';
import Contato from '../components/Contato';
import Projetos from '../components/Projetos';
import Certificados from '../components/Certificados';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="bg-escuro text-claro min-h-screen overflow-x-hidden relative z-0">
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[color:var(--primaria)]/20 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[color:var(--secundaria)]/20 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
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

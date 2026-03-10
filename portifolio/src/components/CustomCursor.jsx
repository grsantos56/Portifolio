import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Configuração de mola para um movimento fluido e elegante
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      // Centraliza o círculo (24px de largura / 2 = 12px de offset)
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        background: "var(--primaria)",
        // Brilho intenso (Glow) usando a cor do tema
        boxShadow: "0 0 20px var(--primaria), 0 0 10px var(--primaria)",
      }}
      animate={{
        // Efeito de "Piscar" (Shining/Blinking)
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default CustomCursor;
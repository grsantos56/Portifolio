import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const springConfig = { stiffness: 500, damping: 28 };
  
  // Inicializamos fora da tela para evitar o flash no canto (0,0)
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      // Detecta largura da tela ou se o dispositivo é touch primário
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(window.innerWidth < 1024 || isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveMouse = (e) => {
      if (!isMobile) {
        cursorX.set(e.clientX - 12);
        cursorY.set(e.clientY - 12);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        background: "var(--primaria)",
        boxShadow: "0 0 20px var(--primaria), 0 0 10px var(--primaria)",
      }}
      animate={{
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
import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona um pequeno delay se necessário para efeito de cascata
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.15 }); // Ativa quando 15% do elemento aparece

    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default Reveal;
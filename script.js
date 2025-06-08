// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Typed.js para o texto dinâmico
    const typed = new Typed('.multiple-text', {
        strings: ['UX/UI Designer', 'Desenvolvedor Fullstack', 'Devops', 'Desenvolvedor Mobile', ], // Lista de textos a serem digitados
        typeSpeed: 75, // Velocidade de digitação
        backSpeed: 50, // Velocidade de apagar
        backDelay: 1000, // Atraso antes de apagar
        loop: true // Loop infinito
    });

    // Adiciona efeito de scroll suave para os links da navbar
    document.querySelectorAll('.menu-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calcula a posição do topo da seção, subtraindo a altura da navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destaca o link ativo na navbar ao rolar a página
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Considerando a altura da navbar para ativar a seção mais cedo
            if (pageYOffset >= sectionTop - document.querySelector('.navbar').offsetHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove 'active' de todos
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active'); // Adiciona 'active' ao link da seção atual
            }
        });
    });
});
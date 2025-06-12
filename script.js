// script.js
document.addEventListener('DOMContentLoaded', () => {

    // --- Inicialização do Typed.js para o texto dinâmico ---
    const typed = new Typed('.multiple-text', {
        strings: ['UX/UI Designer', 'Desenvolvedor Fullstack', 'DevOps', 'Desenvolvedor Mobile'],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    function mudaCorHamburguer() {
        const hamburguer = document.getElementById('menu-toggle');
        menu-toggle.style.colo
    }

    // --- Scroll Suave para os links da navbar ---
    document.querySelectorAll('.menu-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Destaque do link ativo na navbar ao rolar a página ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            if (pageYOffset >= sectionTop - navbarHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Funcionalidade de Filtro de Skills ---
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filtroBtns.forEach(button => {
        button.addEventListener('click', () => {
            filtroBtns.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const categoria = button.dataset.categoria;

            skillCards.forEach(card => {
                const cardCategorias = card.dataset.categorias.split(' ');
                if (categoria === 'todos' || cardCategorias.includes(categoria)) {
                    card.style.display = 'flex'; // Usar flex para manter o layout de coluna
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animação inicial da barra de progresso (opcional, para ver o efeito ao carregar)
    skillCards.forEach(card => {
        const progressBar = card.querySelector('.progress-bar');
        const percentage = parseInt(card.querySelector('.skill-percentage').textContent);
        progressBar.style.width = percentage + '%';
    });


    // --- Funcionalidade da Modal de Detalhes do Projeto ---
    const projetosData = {
        "workshop-spring-boot": {
            titulo: "Workshop: APIs com Spring Boot",
            imagem: "img/one piecee.png",
            tecnologias: [
                { icon: 'bx bxl-java', title: 'Java' },
                { icon: 'devicon-spring-plain colored', title: 'Spring Boot' },
                { icon: 'devicon-postgresql-plain colored', title: 'PostgreSQL' },
                { icon: 'bx bx-git', title: 'Git' }
            ],
            descricaoLonga: `Este projeto simula um workshop de desenvolvimento de APIs RESTful utilizando Spring Boot. O objetivo foi guiar os participantes através das etapas cruciais da construção de um backend robusto, incluindo:
            <br><br>
            - Configuração de ambiente e inicialização do projeto Spring Boot.
            - Definição de modelos de dados e relacionamento com banco de dados (JPA/Hibernate).
            - Implementação de endpoints REST para operações CRUD (Criar, Ler, Atualizar, Deletar).
            - Gerenciamento de dependências e uso de Lombok para código mais limpo.
            - Configuração e integração com PostgreSQL para persistência de dados.
            - Boas práticas de design de API e tratamento de erros.
            <br><br>
            Este projeto demonstra a capacidade de criar soluções de backend escaláveis e bem estruturadas, fundamentais para aplicações modernas.`,
            repositorio: "https://github.com/gabrielrodrigues-portfolio/workshop-spring-boot"
        },
        "instalador-linux": {
            titulo: "Instalador de Aplicativos Linux",
            imagem: "img/one piecee.png",
            tecnologias: [
                { icon: 'bx bxl-python', title: 'Python' },
                { icon: 'bx bxl-linux', title: 'Linux' },
                { icon: 'bx bx-terminal', title: 'Shell Script' },
                { icon: 'bx bx-git', title: 'Git' }
            ],
            descricaoLonga: `Desenvolvi um script para automatizar a instalação de aplicativos e configurações essenciais em sistemas Linux, focando em distribuições baseadas em Debian (como Ubuntu). Os principais recursos incluem:
            <br><br>
            - Instalação de pacotes via APT (Chrome, VS Code, Git, Docker, etc.).
            - Configuração de aliases e variáveis de ambiente no .bashrc ou .zshrc.
            - Download e instalação de ferramentas de desenvolvimento específicas.
            - Possibilidade de selecionar quais aplicativos instalar via menu interativo.
            - Otimização do processo de setup para desenvolvedores e novos usuários de Linux.
            <br><br>
            Este projeto visa simplificar e padronizar o ambiente de trabalho em máquinas Linux, economizando tempo e minimizando erros manuais.`,
            repositorio: "https://github.com/gabrielrodrigues-portfolio/instalador-linux"
        },
        "gerenciador-tarefas": {
            titulo: "Gerenciador de Tarefas (Fullstack)",
            imagem: "img/one piecee.png",
            tecnologias: [
                { icon: 'bx bxl-java', title: 'Java' },
                { icon: 'devicon-spring-plain colored', title: 'Spring Boot' },
                { icon: 'bx bxl-react', title: 'React' },
                { icon: 'devicon-mysql-plain colored', title: 'MySQL' }
            ],
            descricaoLonga: `Um sistema fullstack completo para gerenciamento de tarefas pessoais ou em equipe. O backend foi construído com Spring Boot, fornecendo uma API RESTful para manipulação de dados de tarefas. O frontend, desenvolvido em React, oferece uma interface de usuário intuitiva e responsiva.
            <br><br>
            Funcionalidades incluem:
            - Criação, leitura, atualização e exclusão (CRUD) de tarefas.
            - Marcação de tarefas como concluídas.
            - Filtragem de tarefas por status ou prioridade.
            - Persistência de dados em um banco de dados MySQL.
            - Arquitetura modular e escalável.
            <br><br>
            Este projeto demonstra habilidades tanto em desenvolvimento backend robusto quanto em criação de interfaces de usuário modernas e interativas.`,
            repositorio: "https://github.com/gabrielrodrigues-portfolio/gerenciador-tarefas"
        },
        "site-games": {
            titulo: "Game Hub: Portal de Descrição de Games",
            imagem: "img/one piecee.png",
            tecnologias: [
                { icon: 'bx bxl-html5', title: 'HTML' },
                { icon: 'bx bxl-css3', title: 'CSS' },
                { icon: 'bx bxl-javascript', title: 'JavaScript' },
                { icon: 'bx bxl-react', title: 'React' },
                { icon: 'bx bx-data', title: 'API REST' }
            ],
            descricaoLonga: `O Game Hub é um portal dinâmico e responsivo dedicado à exploração de detalhes de jogos. Ele se conecta a uma API externa de games (RAWG API ou similar) para buscar e exibir informações ricas sobre milhares de títulos.
            <br><br>
            Características principais:
            - Interface de usuário moderna e responsiva.
            - Busca de jogos por nome.
            - Exibição de detalhes do jogo: descrição, gêneros, plataformas, data de lançamento, avaliações.
            - Navegação intuitiva entre os jogos.
            - Frontend desenvolvido com React para uma experiência de usuário fluida.
            <br><br>
            Este projeto destaca minhas habilidades em integração de APIs, manipulação de dados assíncronos e construção de interfaces de usuário envolventes e interativas.`,
            repositorio: "https://github.com/gabrielrodrigues-portfolio/site-games"
        }
    };

    const projetoModal = document.getElementById('projeto-modal');
    const fecharModalBtn = document.querySelector('.fechar-modal');
    const modalImagem = document.getElementById('modal-imagem');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalTecnologias = document.getElementById('modal-tecnologias');
    const modalDescricaoLonga = document.getElementById('modal-descricao-longa');
    const modalRepoLink = document.getElementById('modal-repo-link');

    document.querySelectorAll('.btn-projeto.detalhes').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projetoId;
            const projeto = projetosData[projectId];

            if (projeto) {
                modalImagem.src = projeto.imagem;
                modalTitulo.textContent = projeto.titulo;
                
                modalTecnologias.innerHTML = ''; // Limpa ícones anteriores
                projeto.tecnologias.forEach(tech => {
                    const icon = document.createElement('i');
                    icon.className = `${tech.icon} projeto-tech-icon`;
                    icon.title = tech.title;
                    modalTecnologias.appendChild(icon);
                });

                modalDescricaoLonga.innerHTML = projeto.descricaoLonga;
                modalRepoLink.href = projeto.repositorio;

                projetoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    fecharModalBtn.addEventListener('click', () => {
        projetoModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === projetoModal) {
            projetoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projetoModal.classList.contains('active')) {
            projetoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    // --- Animações ao Descer a Tela com Intersection Observer ---

    const animateElements = document.querySelectorAll('.animate__animated');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visível para disparar
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está na viewport
                entry.target.style.opacity = '1'; // Garante que a opacidade esteja em 1
                entry.target.style.visibility = 'visible'; // Garante visibilidade
                entry.target.classList.add(entry.target.dataset.animationClass || 'animate__fadeInUp'); // Adiciona a classe de animação
                observer.unobserve(entry.target); // Para de observar após animar uma vez
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        const animationClass = Array.from(element.classList).find(cls => cls.startsWith('animate__') && cls !== 'animate__animated' && !cls.startsWith('animate__delay'));
        if (animationClass) {
            element.dataset.animationClass = animationClass;
            element.classList.remove(animationClass); // Remove a classe de animação inicial
        }
        // Garante que elementos animados estejam inicialmente invisíveis
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        
        observer.observe(element);
    });

});
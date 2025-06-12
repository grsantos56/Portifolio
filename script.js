// script.js

// Garante que o script só execute após o carregamento completo do DOM.
document.addEventListener('DOMContentLoaded', () => {

    // --- Inicialização do Typed.js para o texto dinâmico na seção de introdução ---
    // Cria uma nova instância de Typed.js para animar o texto no elemento '.multiple-text'.
    const typed = new Typed('.multiple-text', {
        strings: ['UX/UI Designer', 'Desenvolvedor Fullstack', 'DevOps', 'Desenvolvedor Mobile'], // Array de strings para o efeito de digitação.
        typeSpeed: 75,   // Velocidade de digitação em milissegundos.
        backSpeed: 50,   // Velocidade de exclusão em milissegundos.
        backDelay: 1000, // Tempo de espera antes de começar a apagar a string.
        loop: true       // Repete a sequência de digitação infinitamente.
    });

    // --- Funcionalidade do Menu Hamburguer para Navegação Responsiva ---
    const toggle = document.getElementById('menu-toggle'); // Referência ao botão de toggle do menu.
    const menu = document.getElementById('menu');           // Referência ao elemento do menu de navegação.
    const links = document.querySelectorAll('.menu-link');  // Referência a todos os links do menu.

    // Adiciona um listener de evento de clique ao botão de toggle.
    // Alterna a classe 'show' no menu para exibir/ocultar e 'active' no botão para feedback visual.
    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');    // Adiciona ou remove a classe 'show' no menu.
        toggle.classList.toggle('active'); // Adiciona ou remove a classe 'active' no botão.
    });

    // Itera sobre cada link do menu e adiciona um listener de clique.
    // Ao clicar em um link, o menu é fechado e o botão de toggle retorna ao estado normal.
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');     // Remove a classe 'show' para fechar o menu.
            toggle.classList.remove('active'); // Remove a classe 'active' do botão.
        });
    });

    // A função 'mudaCorHamburguer' está incompleta e não é utilizada.
    // Pode ser removida ou implementada para mudar a cor do ícone do hambúrguer.
    function mudaCorHamburguer() {
        const hamburguer = document.getElementById('menu-toggle');
        // console.log(hamburguer.style.color); // Exemplo de uso para depuração.
        // menu-toggle.style.color = 'new-color'; // Linha incompleta e com erro de sintaxe.
    }

    // --- Implementação de Scroll Suave para Links da Barra de Navegação ---
    // Seleciona todos os links da navegação e adiciona um listener de clique.
    document.querySelectorAll('.menu-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link (salto imediato).

            // Obtém o ID da seção alvo do atributo 'href' do link.
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId); // Encontra o elemento da seção alvo.

            // Verifica se a seção alvo existe.
            if (targetSection) {
                // Calcula a altura da barra de navegação para compensar o offset no scroll.
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                // Calcula a posição de rolagem ajustada para o topo da seção, considerando a navbar fixa.
                const offsetTop = targetSection.offsetTop - navbarHeight;

                // Realiza o scroll suave para a posição calculada.
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Habilita o scroll suave.
                });
            }
        });
    });

    // --- Destaque Dinâmico do Link Ativo na Barra de Navegação ao Rolar a Página ---
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página.
    const navLinks = document.querySelectorAll('.menu-link'); // Seleciona todos os links da navegação.

    // Adiciona um listener de evento de scroll na janela.
    window.addEventListener('scroll', () => {
        let current = ''; // Variável para armazenar o ID da seção atualmente visível.

        // Itera sobre cada seção para determinar qual está visível.
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Posição do topo da seção em relação ao documento.
            const navbarHeight = document.querySelector('.navbar').offsetHeight; // Altura da navbar para ajuste.
            // Verifica se a posição de rolagem está dentro dos limites da seção visível (considerando a navbar).
            if (pageYOffset >= sectionTop - navbarHeight - 50) { // O '-50' é um offset adicional para ajuste fino.
                current = section.getAttribute('id'); // Define a seção atual pelo seu ID.
            }
        });

        // Itera sobre todos os links de navegação para adicionar/remover a classe 'active'.
        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove a classe 'active' de todos os links.
            // Verifica se o link corresponde à seção atualmente visível e adiciona a classe 'active'.
            if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
                link.classList.add('active'); // Adiciona a classe 'active' para destacar o link.
            }
        });
    });

    // --- Funcionalidade de Filtro de Habilidades (Skills) ---
    const filtroBtns = document.querySelectorAll('.filtro-btn'); // Seleciona todos os botões de filtro.
    const skillCards = document.querySelectorAll('.skill-card'); // Seleciona todos os cartões de habilidade.

    // Itera sobre cada botão de filtro e adiciona um listener de clique.
    filtroBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões de filtro para resetar o estado.
            filtroBtns.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado.
            button.classList.add('active');

            // Obtém a categoria de filtro do atributo 'data-categoria' do botão.
            const categoria = button.dataset.categoria;

            // Itera sobre cada cartão de habilidade para aplicar o filtro.
            skillCards.forEach(card => {
                // Obtém as categorias do cartão (pode haver múltiplas, separadas por espaço).
                const cardCategorias = card.dataset.categorias.split(' ');
                // Verifica se a categoria é 'todos' ou se o cartão inclui a categoria selecionada.
                if (categoria === 'todos' || cardCategorias.includes(categoria)) {
                    card.style.display = 'flex'; // Exibe o cartão, usando flexbox para manter o layout.
                } else {
                    card.style.display = 'none'; // Oculta o cartão.
                }
            });
        });
    });

    // --- Animação Inicial da Barra de Progresso das Habilidades ---
    // Itera sobre cada cartão de habilidade para animar suas barras de progresso ao carregar a página.
    skillCards.forEach(card => {
        const progressBar = card.querySelector('.progress-bar'); // Seleciona a barra de progresso dentro do cartão.
        // Extrai a porcentagem do texto do elemento '.skill-percentage' e converte para número.
        const percentage = parseInt(card.querySelector('.skill-percentage').textContent);
        // Define a largura da barra de progresso, acionando a transição CSS.
        progressBar.style.width = percentage + '%';
    });


    // --- Funcionalidade da Modal de Detalhes do Projeto ---
    // Objeto contendo os dados detalhados de cada projeto.
    const projetosData = {
        "workshop-spring-boot": {
            titulo: "Workshop: APIs com Spring Boot",
            imagem: "img/workshop.png", 
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
            repositorio: "https://github.com/grsantos56/workshop"
        },
        "instalador-linux": {
            titulo: "Instalador de Aplicativos Linux",
            imagem: "img/gerenciador de pacotes.png", 
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
            repositorio: "https://github.com/grsantos56/LinuxTools"
        },
        "gerenciador-tarefas": {
            titulo: "Gerenciador de Tarefas (Fullstack)",
            imagem: "img/gerenciador de tarefas.png", 
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
            repositorio: "https://github.com/grsantos56/estudos-spring"
        },
        "site-games": {
            titulo: "Game Hub: Portal de Descrição de Games",
            imagem: "img/wikigames.png",
            tecnologias: [
                { icon: 'bx bxl-html5', title: 'HTML' },
                { icon: 'bx bxl-css3', title: 'CSS' },
                { icon: 'bx bxl-javascript', title: 'JavaScript' },
                { icon: 'bx bxl-react', title: 'React' },
                { icon: 'bx bx-data', title: 'API REST' }
            ],
            descricaoLonga: `O WikiGames é um portal dinâmico e responsivo dedicado à exploração de detalhes de jogos. Ele se conecta a uma API externa de games (RAWG API ou similar) para buscar e exibir informações ricas sobre milhares de títulos.
            <br><br>
            Características principais:
            - Interface de usuário moderna e responsiva.
            - Busca de jogos por nome.
            - Exibição de detalhes do jogo: descrição, gêneros, plataformas, data de lançamento, avaliações.
            - Navegação intuitiva entre os jogos.
            - Frontend desenvolvido com React para uma experiência de usuário fluida.
            <br><br>
            Este projeto destaca minhas habilidades em integração de APIs, manipulação de dados assíncronos e construção de interfaces de usuário envolventes e interativas.`,
            repositorio: "https://github.com/grsantos56/Trabalho-de-desenvolvimento-web"
        }
    };

    const projetoModal = document.getElementById('projeto-modal');        // Referência ao elemento do modal de projeto.
    const fecharModalBtn = document.querySelector('.fechar-modal');     // Referência ao botão de fechar modal.
    const modalImagem = document.getElementById('modal-imagem');        // Referência à imagem do modal.
    const modalTitulo = document.getElementById('modal-titulo');        // Referência ao título do modal.
    const modalTecnologias = document.getElementById('modal-tecnologias'); // Referência ao contêiner de tecnologias do modal.
    const modalDescricaoLonga = document.getElementById('modal-descricao-longa'); // Referência à descrição longa do modal.
    const modalRepoLink = document.getElementById('modal-repo-link');      // Referência ao link do repositório no modal.

    // Adiciona listener de clique a todos os botões "Mais Detalhes" dos projetos.
    document.querySelectorAll('.btn-projeto.detalhes').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projetoId; // Obtém o ID do projeto do atributo 'data-projeto-id'.
            const projeto = projetosData[projectId];     // Busca os dados do projeto correspondente.

            // Preenche o modal com os dados do projeto, se encontrado.
            if (projeto) {
                modalImagem.src = projeto.imagem;
                modalTitulo.textContent = projeto.titulo;

                modalTecnologias.innerHTML = ''; // Limpa ícones de tecnologias anteriores.
                // Cria e adiciona os ícones de tecnologia dinamicamente.
                projeto.tecnologias.forEach(tech => {
                    const icon = document.createElement('i');
                    icon.className = `${tech.icon} projeto-tech-icon`; // Adiciona classes CSS para estilização do ícone.
                    icon.title = tech.title; // Define o título (tooltip) do ícone.
                    modalTecnologias.appendChild(icon); // Adiciona o ícone ao contêiner.
                });

                modalDescricaoLonga.innerHTML = projeto.descricaoLonga; // Suporta HTML na descrição longa.
                modalRepoLink.href = projeto.repositorio;

                projetoModal.classList.add('active'); // Adiciona a classe 'active' para exibir o modal.
                document.body.style.overflow = 'hidden'; // Previne o scroll do body quando o modal está aberto.
            }
        });
    });

    // Adiciona listener de clique ao botão de fechar modal.
    fecharModalBtn.addEventListener('click', () => {
        projetoModal.classList.remove('active'); // Remove a classe 'active' para ocultar o modal.
        document.body.style.overflow = ''; // Restaura o scroll do body.
    });

    // Adiciona listener de clique à janela para fechar o modal se clicar fora do conteúdo.
    window.addEventListener('click', (event) => {
        if (event.target === projetoModal) { // Verifica se o clique foi no overlay do modal.
            projetoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Adiciona listener para fechar o modal ao pressionar a tecla 'Escape'.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projetoModal.classList.contains('active')) {
            projetoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    // --- Animações ao Descer a Tela com Intersection Observer ---
    // Seleciona todos os elementos com a classe 'animate__animated' que devem ser animados ao entrar na viewport.
    const animateElements = document.querySelectorAll('.animate__animated');

    // Opções para o Intersection Observer.
    const observerOptions = {
        root: null,      // O viewport do documento é o root.
        rootMargin: '0px', // Nenhuma margem extra.
        threshold: 0.1   // O callback será executado quando 10% do elemento estiver visível.
    };

    // Callback executado quando um elemento observado cruza o threshold.
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Se o elemento está na viewport.
                // Garante que o elemento esteja totalmente opaco e visível antes de aplicar a animação.
                entry.target.style.opacity = '1';
                entry.target.style.visibility = 'visible';
                // Adiciona a classe de animação real que foi armazenada em 'dataset.animationClass'.
                // Fallback para 'animate__fadeInUp' se nenhuma classe específica for encontrada.
                entry.target.classList.add(entry.target.dataset.animationClass || 'animate__fadeInUp');
                observer.unobserve(entry.target); // Desconecta o observador após a primeira animação para otimização.
            }
        });
    };

    // Cria uma nova instância do Intersection Observer.
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Prepara os elementos para a observação.
    animateElements.forEach(element => {
        // Encontra a classe de animação específica do Animate.css (ex: 'animate__zoomIn').
        const animationClass = Array.from(element.classList).find(cls => cls.startsWith('animate__') && cls !== 'animate__animated' && !cls.startsWith('animate__delay'));
        if (animationClass) {
            // Armazena a classe de animação original no dataset para reutilização no callback.
            element.dataset.animationClass = animationClass;
            // Remove a classe de animação inicial para que ela só seja adicionada pelo observer.
            element.classList.remove(animationClass);
        }
        // Define a opacidade e visibilidade inicial dos elementos para que apareçam suavemente.
        element.style.opacity = '0';
        element.style.visibility = 'hidden';

        // Começa a observar o elemento.
        observer.observe(element);
    });

});
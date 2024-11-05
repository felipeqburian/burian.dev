            // Animação de entrada suave ao carregar a página
            document.addEventListener("DOMContentLoaded", function () {
                const container = document.querySelector('.container');
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            });
                // Animação de entrada suave ao rolar para a seção About
            window.addEventListener("scroll", function() {
                const aboutSection = document.querySelector('#about');
                const aboutPosition = aboutSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
    
                if (aboutPosition < screenPosition) {
                    const elements = aboutSection.querySelectorAll('.about-title, .about-text');
                    elements.forEach((element) => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    });
                }
            });
            document.querySelectorAll('.portfolio-item').forEach((item) => {
                item.addEventListener('mouseenter', () => {
                    const title = item.querySelector('h3');
                    const description = item.querySelector('p');
                    title.style.transitionDelay = '0.1s';
                    description.style.transitionDelay = '0.2s';
                });
    
                item.addEventListener('mouseleave', () => {
                    const title = item.querySelector('h3');
                    const description = item.querySelector('p');
                    title.style.transitionDelay = '0s';
                    description.style.transitionDelay = '0s';
                });
            });
            document.querySelectorAll('.timeline-item').forEach((item) => {
                item.addEventListener('mouseenter', () => {
                    const icon = item.querySelector('.timeline-icon');
                    icon.style.transform = 'scale(1.2)';
                    icon.style.transition = 'transform 0.3s ease';
                });
    
                item.addEventListener('mouseleave', () => {
                    const icon = item.querySelector('.timeline-icon');
                    icon.style.transform = 'scale(1)';
                });
            });
    
        // JavaScript para abrir e fechar o modal
        document.addEventListener("DOMContentLoaded", function () {
            // Seleciona todos os links com a classe 'open-modal'
            const detailButtons = document.querySelectorAll(".open-modal");
            const modal = document.getElementById("portfolioModal");
            const closeModalButton = document.getElementById("closeModal");
    
            // Adiciona evento para cada botão
            detailButtons.forEach(button => {
                button.addEventListener("click", function (event) {
                    event.preventDefault();
                    modal.style.display = "block";  // Mostra o modal
                });
            });
    
            // Fecha o modal quando o botão de fechar é clicado
            closeModalButton.addEventListener("click", function () {
                modal.style.display = "none";  // Esconde o modal
            });
    
            // Fecha o modal ao clicar fora dele
            window.addEventListener("click", function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        });
    
        const canvas = document.getElementById('minimalist-bg');
        const ctx = canvas.getContext('2d');
        
        // Ajusta o tamanho do canvas para cobrir a tela
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Configurações das partículas
        const particles = [];
        const numParticles = 20;
        
        // Classe para criar partículas com movimento sutil
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 60 + 20; // Partículas maiores para o efeito de “neblina”
                this.opacity = Math.random() * 0.1 + 0.05;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
        
                // Reposiciona partículas ao saírem da tela
                if (this.x < -this.size || this.x > canvas.width + this.size || this.y < -this.size || this.y > canvas.height + this.size) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
        
        // Inicializa as partículas
        function initParticles() {
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();
        
        // Animação sutil das partículas
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
        
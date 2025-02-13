        // Partículas interactivas mejoradas
        class Particle {
            constructor(canvas, ctx) {
                this.canvas = canvas;
                this.ctx = ctx;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.velocity = Math.random() * 2 + 1;
                this.radius = Math.random() * 2;
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.y += this.velocity;
                if (this.y > this.canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * this.canvas.width;
                }
            }

            draw() {
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(124, 77, 255, ${this.alpha})`;
                this.ctx.fill();
            }
        }

        // Configuración de partículas
        const canvas = document.querySelector('.particles');
        const ctx = canvas.getContext('2d');
        let particles = [];

        const initParticles = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = Array.from({ length: 150 }, () => new Particle(canvas, ctx));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        // Scroll header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled-header', window.scrollY > 50);
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Inicialización
        initParticles();
        animate();
        window.addEventListener('resize', initParticles);

        // Animaciones al hacer scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card, .contact-form').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
  
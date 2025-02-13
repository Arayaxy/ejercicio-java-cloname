class RecetasApp {
    constructor() {
        this.recetas = JSON.parse(localStorage.getItem("recetas")) || [];
        this.init();
    }

    init() {
        this.form = document.getElementById('form_receta');
        this.searchInput = document.getElementById('search-input');
        this.recetasContainer = document.getElementById('recetas-container');
        this.notification = document.getElementById('notification');

        this.form.addEventListener('submit', (e) => this.guardarReceta(e));
        this.searchInput.addEventListener('input', () => this.buscarRecetas());
        
        this.mostrarRecetas();
    }

    guardarReceta(e) {
        e.preventDefault();
        
        const titulo = document.getElementById('titulo_receta').value.trim();
        const ingredientes = document.getElementById('ingredientes').value.trim();
        const preparacion = document.getElementById('preparacion').value.trim();

        if (!titulo || !ingredientes || !preparacion) {
            this.mostrarNotificacion('⚠️ Completa todos los campos');
            return;
        }

        if (this.recetaExistente(titulo)) {
            this.mostrarNotificacion('⚠️ Ya existe una receta con ese título');
            return;
        }

        const nuevaReceta = {
            id: Date.now(),
            titulo,
            ingredientes: ingredientes.split(',').map(i => i.trim()),
            preparacion: preparacion.split('\n').filter(p => p.trim())
        };

        this.recetas.push(nuevaReceta);
        localStorage.setItem('recetas', JSON.stringify(this.recetas));
        
        this.mostrarRecetas();
        this.form.reset();
        this.mostrarNotificacion('✅ Receta guardada exitosamente');
    }

    recetaExistente(titulo) {
        return this.recetas.some(receta => 
            receta.titulo.toLowerCase() === titulo.toLowerCase()
        );
    }

    buscarRecetas() {
        const busqueda = this.searchInput.value.toLowerCase();
        const recetasFiltradas = this.recetas.filter(receta =>
            receta.titulo.toLowerCase().includes(busqueda) ||
            receta.ingredientes.some(i => i.toLowerCase().includes(busqueda))
        );
        this.mostrarRecetas(recetasFiltradas);
    }

    mostrarRecetas(recetas = this.recetas) {
        this.recetasContainer.innerHTML = recetas.map(receta => `
            <div class="receta-card">
                <div class="receta-actions">
                    <button class="action-btn" onclick="app.editarReceta(${receta.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" onclick="app.eliminarReceta(${receta.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <h3>${receta.titulo}</h3>
                <h4>Ingredientes:</h4>
                <ul>${receta.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
                <h4>Preparación:</h4>
                <ol>${receta.preparacion.map(p => `<li>${p}</li>`).join('')}</ol>
            </div>
        `).join('');
    }

    eliminarReceta(id) {
        this.recetas = this.recetas.filter(receta => receta.id !== id);
        localStorage.setItem('recetas', JSON.stringify(this.recetas));
        this.mostrarRecetas();
        this.mostrarNotificacion('🗑️ Receta eliminada');
    }

    editarReceta(id) {
        const receta = this.recetas.find(r => r.id === id);
        document.getElementById('titulo_receta').value = receta.titulo;
        document.getElementById('ingredientes').value = receta.ingredientes.join(', ');
        document.getElementById('preparacion').value = receta.preparacion.join('\n');
        
        this.eliminarReceta(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    mostrarNotificacion(mensaje) {
        this.notification.textContent = mensaje;
        this.notification.classList.add('show');
        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 3000);
    }
}

const app = new RecetasApp();
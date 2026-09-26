const raiz = document.documentElement;
const botonTema = document.getElementById('boton-tema');
const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu-principal');
const filtros = document.getElementById('filtros');
const botonesFiltro = filtros.querySelectorAll('button');
const proyectos = document.querySelectorAll('#lista-proyectos .tarjeta-proyecto');
const estadoFiltro = document.getElementById('estado-filtro');

function actualizarColores() {
    const estilos = getComputedStyle(raiz);
    document.querySelectorAll('[data-color]').forEach((muestra) => {
        muestra.textContent = estilos.getPropertyValue(muestra.dataset.color).trim();
    });
}

function aplicarTema(tema) {
    raiz.dataset.theme = tema;
    const oscuro = tema === 'oscuro';
    botonTema.textContent = oscuro ? 'Tema claro' : 'Tema oscuro';
    botonTema.setAttribute('aria-pressed', String(oscuro));
    actualizarColores();
}

let temaGuardado = 'claro';
try {
    temaGuardado = localStorage.getItem('portafolio-tema') || 'claro';
} catch {
    temaGuardado = 'claro';
}

aplicarTema(temaGuardado === 'oscuro' ? 'oscuro' : 'claro');
botonTema.hidden = false;

botonTema.addEventListener('click', () => {
    const nuevoTema = raiz.dataset.theme === 'oscuro' ? 'claro' : 'oscuro';
    aplicarTema(nuevoTema);
    try {
        localStorage.setItem('portafolio-tema', nuevoTema);
    } catch {
        return;
    }
});

function cerrarMenu() {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.textContent = 'Menú';
}

raiz.classList.add('con-js');
botonMenu.hidden = false;

botonMenu.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', String(abierto));
    botonMenu.textContent = abierto ? 'Cerrar menú' : 'Menú';
});

menu.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', cerrarMenu);
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('abierto')) {
        cerrarMenu();
        botonMenu.focus();
    }
});

window.matchMedia('(min-width: 48rem)').addEventListener('change', cerrarMenu);

filtros.hidden = false;
botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filtro;
        let visibles = 0;

        proyectos.forEach((proyecto) => {
            const tecnologias = proyecto.dataset.tecnologias.split(' ');
            const mostrar = filtro === 'todos' || tecnologias.includes(filtro);
            proyecto.hidden = !mostrar;
            if (mostrar) visibles += 1;
        });

        botonesFiltro.forEach((elemento) => {
            elemento.setAttribute('aria-pressed', String(elemento === boton));
        });

        estadoFiltro.textContent = `${visibles} ${visibles === 1 ? 'proyecto' : 'proyectos'}`;
    });
});

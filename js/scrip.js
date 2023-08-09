/* Cambiar tema claro/oscuro */
const body = document.querySelector('body');

function toggleTheme() {
    body.classList.toggle('dark-theme');
    
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (body.classList.contains('dark-theme')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

/* Hamburguesa para el menú en versión móvil */
const nav = document.querySelector('nav');
const burgerIcon = document.querySelector('.nav .burger-icon');

function toggleMenu() {
    nav.classList.toggle('show-menu');
}


/* Cerrar el menú al hacer clic en un enlace */
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show-menu');
    });
});






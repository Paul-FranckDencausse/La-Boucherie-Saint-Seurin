// Fonction pour ouvrir/fermer le menu mobile
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('w3-hide')) {
        menu.classList.remove('w3-hide');
    } else {
        menu.classList.add('w3-hide');
    }
}

// Fonction pour le dropdown dans le menu mobile
function toggleDropdown() {
    var dropdown = document.getElementById('mobile-dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}
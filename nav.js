function toggle() {
    console.log('Toggle activated');

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(nav => nav.classList.toggle('show'));
}

document.querySelector('.toggle-icon').addEventListener('click', toggle);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
    const languageSelector = document.getElementById('language-selector');

    languageSelector.addEventListener('change', () => {
        const selectedOption = languageSelector.options[languageSelector.selectedIndex];
        const selectedValue = selectedOption.value;
        const selectedIcon = selectedOption.getAttribute('data-icon');

        languageSelector.style.backgroundImage = `url(${selectedIcon})`;
    });

    // Trigger change event on page load to set the initial flag
    languageSelector.dispatchEvent(new Event('change'))
});


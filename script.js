const toggleTheme = document.getElementById('toggle-theme');
const body = document.documentElement;

// Vérifier si un thème est déjà enregistré
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    toggleTheme.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
}

toggleTheme.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleTheme.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});
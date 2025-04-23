// User preferences object
const userPrefs = {
    theme: localStorage.getItem('theme') || 'light',
    animation: localStorage.getItem('animation') || 'bounce'
};

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const changeAnimation = document.getElementById('changeAnimation');
const animBox = document.getElementById('animBox');

// Initialize page based on stored preferences
function initializePreferences() {
    if (userPrefs.theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    animBox.classList.add(userPrefs.animation);
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
});

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Animation toggle handler
changeAnimation.addEventListener('click', () => {
    const animations = ['bounce', 'spin', 'shake'];
    const currentAnim = animations[Math.floor(Math.random() * animations.length)];
    animBox.style.animationName = currentAnim;
});

// Click animation box to pause/play
animBox.addEventListener('click', () => {
    animBox.classList.add('bounce');
    animBox.addEventListener('animationend', () => {
        animBox.classList.remove('bounce');
    }, { once: true });
});

// Initialize on page load
initializePreferences();

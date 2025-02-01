const themes = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#1a202c',
  },
  dark: {
    backgroundColor: '#1a202c',
    textColor: '#f7fafc',
  },
};

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  root.style.backgroundColor = themes[theme].backgroundColor;
  root.style.color = themes[theme].textColor;
}

function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme('light'); // Initialize with light theme

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Theme';
  toggleButton.className = 'mt-4 px-4 py-2 bg-blue-500 text-white rounded';
  toggleButton.addEventListener('click', toggleTheme);
  document.body.appendChild(toggleButton);
});

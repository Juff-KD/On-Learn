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
  const rootTheme = document.documentElement;
  if (theme === 'dark') {
    rootTheme.classList.add('dark');
  } else {
    rootTheme.classList.remove('dark');
  }

  rootTheme.style.backgroundColor = themes[theme].backgroundColor;
  rootTheme.style.color = themes[theme].textColor;
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
  toggleButton.className = 'btn btn-primary';
  toggleButton.addEventListener('click', toggleTheme);
  document.body.appendChild(toggleButton);
});

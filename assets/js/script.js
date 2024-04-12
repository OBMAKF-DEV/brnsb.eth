// Function to scroll to a section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Typewriter effect
function typeWriter(element, text, speed)
  let i = 0;
  const interval = setInterval(() => {
    element.textContext += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, speed);
}

// Window onload typing effect.
window.onload = function() {
  const header = document.getElementById('main-title');
  const text = 'Welcome to brnsb.eth!';
  const speed = 100;
  typeWriter(header, text, speed);
};

// Function to scroll to a section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Typewriter effect
function typeWriter(element, text, speed)
  let i = 0;
  
  if (i < text.length) {
    document.getElementById(element).innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Window onload typing effect.
window.onload = function() {
  const header = 'main-title';
  const text = 'Welcome to brnsb.eth!';
  const speed = 100;
  typeWriter(header, text, speed);
};

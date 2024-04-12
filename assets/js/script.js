// Function to scroll to a section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

var i = 0;
var txt = 'Welcome to brnsb.eth!'
var speed = 100;

// Typewriter effect
function typeWriter() {
  if (i < text.length) {
    document.getElementById("main-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Window onload typing effect.
window.onload = function() {
  typeWriter();
};

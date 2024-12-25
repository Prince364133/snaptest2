// Function to toggle the sidebar open/close
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  // Function to trigger speech synthesis
  function welcomeMessage() {
    const message = new SpeechSynthesisUtterance('Welcome to Snap Shiksha');
    speechSynthesis.speak(message);
  }
  
  // Function to show and hide the loading GIF
  function showLoadingGif() {
    const gif = document.getElementById('loading-gif');
    gif.style.display = 'block';  // Show the GIF
    setTimeout(() => {
      gif.style.display = 'none'; // Hide the GIF after 1 second
    }, 1000);
  }
  
  // Run functions when the page is loaded
  window.addEventListener('load', () => {
    welcomeMessage();
    showLoadingGif();
  });
  
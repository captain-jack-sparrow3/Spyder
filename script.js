// Function to play the video
function playVideo() {
    const video1 = document.getElementById('background-video');
    const video2 = document.getElementById('MyVideo');
    video1.play();
    video2.play();
  }
  
  // Sparkle effect function
  function sparkle() {
    const sparkleElement = document.createElement('div');
    sparkleElement.classList.add('sparkle');
    sparkleElement.innerText = '✨';
    document.body.appendChild(sparkleElement);
    
    // Set random position and animation
    sparkleElement.style.left = `${Math.random() * 100}vw`;
    sparkleElement.style.top = `${Math.random() * 100}vh`;
  
    // Remove sparkles after 1 second
    setTimeout(() => sparkleElement.remove(), 1000);
  }
  
  // Add sparkle effect CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .sparkle {
      position: absolute;
      font-size: 2rem;
      animation: fadeOut 1s forwards;
    }
    
    @keyframes fadeOut {
      0% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(1.5); }
    }
  `;
  document.head.appendChild(style);
  function showGreeting() {
    const name = document.getElementById('name').value;
    const greeting = document.getElementById('greeting');
    const mainWrapper = document.querySelector('.main-wrapper');
    const nameForm = document.querySelector('.name-form');
  
    // If a name is entered, update the greeting and show the main content
    if (name.trim()) {
      greeting.textContent = `🎆 Happy Diwali, ${name}! 🎆`;
      mainWrapper.style.display = 'flex'; // Show the main content
      nameForm.style.display = 'none'; // Hide the name form
    } else {
      alert('Please enter your name!');
    }
  }
  
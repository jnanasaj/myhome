function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

// Show popup
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Close popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Optional: Close popup by clicking outside the popup content
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

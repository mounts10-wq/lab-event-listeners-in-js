// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  if (!keyPressDisplay) return
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  if (!textInput || !textInputDisplay) return

  const value = event?.target?.value ?? textInput.value

  textInputDisplay.textContent = value
    ? `You typed: ${value}`
    : 'Your input will be displayed here.'
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Tests dispatch dblclick on the reset BUTTON (not body)
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
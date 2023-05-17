// script.js
var button = document.getElementById('premium-btn');
button.addEventListener('click', showAlert);

console.log('hello world')
function showAlert() {
  alert('Premium is not yet enabled. The API is currently free to use! ❤');
}
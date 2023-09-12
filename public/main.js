document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Generate a random knitting pattern
  const pattern = 'Pattern ' + Math.floor(Math.random() * 1000);
  
  // Display the knitting pattern
  document.getElementById('pattern').innerText = pattern;
});

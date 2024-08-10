
// form------------------
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you for registering in the forum. We wish you a happy day');
    
    event.target.reset();
});
  
document.getElementById('requestType').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
});
// form---------------------
  
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    this.reset();
});

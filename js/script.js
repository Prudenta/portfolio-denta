// script.js

// Function to display greeting based on time
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
}

// Call the function when the page loads
window.onload = displayGreeting;

// Gallery Filter
document.querySelectorAll('.btn-outline-primary').forEach(button => {
    button.addEventListener
    ('click', function() {
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.project-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});
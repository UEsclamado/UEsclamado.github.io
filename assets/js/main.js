const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wf6ia06', 'template_prfjig3', '#contact-form', '1Ou6OsRpUOImjDB6o')
    .then(() => {
        // Show success message
        contactMessage.textContent = 'Message Sent Successfully!';
        contactMessage.classList.add('show'); // Make the message visible
        contactMessage.classList.remove('error'); // Remove error styling if it was applied

        // Hide message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
            contactMessage.classList.remove('show'); // Hide the message
        }, 5000);

        // Reset the form
        contactForm.reset();

    }, (error) => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)';
        contactMessage.classList.add('show', 'error'); // Show the message with error styling

        console.error('EmailJS Error:', error);
    });
};

contactForm.addEventListener('submit', sendEmail);

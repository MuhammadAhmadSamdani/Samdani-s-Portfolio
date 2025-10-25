// Function to handle form submission using EmailJS API
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Default form submission rokna

    const form = e.target;
    
    // ⚡️ FIX: Template Keys ko Lowercase kiya gaya hai ⚡️
    // Taake woh EmailJS template variables ({{name}}, {{email}}) se match karein.
    const templateParams = {
        name: form.Name.value,        // Data will be sent to {{name}}
        email: form.Email.value,      // Data will be sent to {{email}}
        subject: form.Subject.value,  // Data will be sent to {{subject}} (if you use it)
        message: form.Message.value,  // Data will be sent to {{message}}
        to_email: "muhammadsamdani11@gmail.com" // Your target email
    };
    
    // Aapki EmailJS IDs
    const serviceID = 'service_wapus4f'; 
    const templateID = 'template_qbm0jtv'; 

    const submitButton = form.querySelector('.submit-button');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // EmailJS ke zariye email send karna
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // English Success Alert
            alert('Your message has been sent successfully! I will contact you shortly. Thank you.');
            form.reset();
            
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }, function(error) {
            console.log('FAILED...', error);
            // English Failed Alert
            alert('Message failed to send. Please contact me directly at: muhammadsamdani11@gmail.com');

            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
});

// Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "qizEWcZIvKIRZbiXI"
    });
})();

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const status = document.getElementById("contactStatus");
        const submitButton = contactForm.querySelector('button[type="submit"]');

        // Check empty fields
        if (!name || !email || !subject || !message) {
            status.style.color = "red";
            status.textContent = "Please fill in all the fields.";
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            status.style.color = "red";
            status.textContent = "Please enter a valid email address.";
            return;
        }

        // Disable button while sending
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        status.style.color = "blue";
        status.textContent = "Sending your message...";

        // EmailJS template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        try {

            await emailjs.send(
                "service_71x9hts",
                "template_j1vqlgh",
                templateParams
            );

            status.style.color = "green";
            status.textContent = "Message sent successfully! Thank you for contacting me.";

            contactForm.reset();

        } catch (error) {

            console.error("EmailJS Error:", error);

            status.style.color = "red";
            status.textContent = "Unable to send your message. Please try again later.";

        } finally {

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        }

    });

}

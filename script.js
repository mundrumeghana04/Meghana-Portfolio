
// ==============================
// CONTACT FORM VALIDATION
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const status = document.getElementById("contactStatus");

        if (!name || !email || !subject || !message) {
            status.style.color = "red";
            status.textContent = "Please fill in all the fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            status.style.color = "red";
            status.textContent = "Please enter a valid email address.";
            return;
        }

        status.style.color = "green";
        status.textContent = "Form validation successful!";

        contactForm.reset();

    });

}

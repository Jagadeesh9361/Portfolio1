// JavaScript for contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple confirmation message
  if (name && email && message) {
    document.getElementById("responseMessage").textContent =
      `Thank you, ${name}! Your message has been received.`;
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("responseMessage").textContent = "Please fill out all fields.";
  }
});

// Download CV
document.querySelector('.btn-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Dinesh_Resume.pdf';  // Or 'files/Dinesh_Resume.pdf' if in a subfolder
    link.download = 'Resume/Dinesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
//contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_r1ec3qh', 'template_aoqaon8', this)
      .then(() => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message: " + JSON.stringify(error));
      });
});




/*
   The demo does not need a database. This small script lets the form behave
   like a real workflow while keeping the project suitable for GitHub Pages.
*/
const form = document.querySelector('#registration-form');

if (form) {
  form.addEventListener('submit', (event) => {
    // preventDefault() stops the browser from performing a traditional form post.
    event.preventDefault();

    // In a production application, form data would normally be sent to a server.
    // For this teaching demo, we move to a static confirmation page instead.
    window.location.href = 'confirmation.html';
  });
}

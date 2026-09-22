/*
   Small JavaScript enhancements keep the demo interactive without requiring
   a server or database. This makes the project easy to host on GitHub Pages.
*/
const form = document.querySelector('#registration-form');
const calendarButton = document.querySelector('#calendar-button');
const calendarMessage = document.querySelector('#calendar-message');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'confirmation.html';
  });
}

if (calendarButton && calendarMessage) {
  calendarButton.addEventListener('click', () => {
    // A real application might generate an .ics file or connect to a calendar API.
    // For this static teaching demo, feedback confirms what the action would do.
    calendarMessage.textContent = 'Workshop details are ready to add to your calendar.';
  });
}

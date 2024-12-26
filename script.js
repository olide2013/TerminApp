// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const initials = document.getElementById('initials').value.trim();
    const selectedOption = document.querySelector('input[name="appointment"]:checked');

    if (initials && selectedOption) {
        // Get existing responses or initialize an empty array
        const responses = JSON.parse(localStorage.getItem('responses')) || [];

        // Add new response
        responses.push(selectedOption.value);

        // Save updated responses to localStorage
        localStorage.setItem('responses', JSON.stringify(responses));

        // Update the displayed results
        updateCounts();

        // Clear the form
        document.getElementById('appointmentForm').reset();
    } else {
        alert("Bitte geben Sie Ihre Initialen und wählen Sie eine Option.");
    }
});

// Update the counts for each option
function updateCounts() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];

    // Count occurrences of each option
    const count1 = responses.filter(response => response === "Es passt mir unbedingt").length;
    const count2 = responses.filter(response => response === "Es passt mir").length;
    const count3 = responses.filter(response => response === "Vielleicht / mal sehen").length;
    const count4 = responses.filter(response => response === "Ich kann nicht").length;

    // Update the counts in the DOM
    document.getElementById('count1').textContent = count1;
    document.getElementById('count2').textContent = count2;
    document.getElementById('count3').textContent = count3;
    document.getElementById('count4').textContent = count4;
}

// Display counts immediately when the page loads
window.onload = updateCounts;

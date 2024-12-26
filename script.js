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
        responses.push({
            initials: initials,
            option: selectedOption.value
        });

        // Save updated responses to localStorage
        localStorage.setItem('responses', JSON.stringify(responses));

        // Update the displayed results
        displayResults();

        // Clear the form
        document.getElementById('appointmentForm').reset();
    } else {
        alert("Bitte geben Sie Ihre Initialen und wählen Sie eine Option.");
    }
});

// Display results
function displayResults() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const resultsList = document.getElementById('resultsList');

    // Clear existing results
    resultsList.innerHTML = '';

    // Add each response to the results list
    responses.forEach(response => {
        const listItem = document.createElement('li');
        listItem.textContent = `${response.initials}: ${response.option}`;
        resultsList.appendChild(listItem);
    });
}

// Display results immediately when the page loads
window.onload = displayResults;

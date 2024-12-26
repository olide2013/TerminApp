// Load and display results
function showResults() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const resultsList = document.getElementById('resultsList');

    if (responses.length > 0) {
        responses.forEach(response => {
            const listItem = document.createElement('li');
            listItem.textContent = `${response.initials}: ${response.option}`;
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.innerHTML = "Noch keine Auswahl getroffen.";
    }
}

// Call showResults when the page loads
window.onload = showResults;

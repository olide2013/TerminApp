// Load results from localStorage and display them
function showResults() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const responseList = document.getElementById("resultsList");

    if (responses.length > 0) {
        responses.forEach(response => {
            const listItem = document.createElement("li");
            listItem.textContent = `${response.initials}: ${response.option}`;
            responseList.appendChild(listItem);
        });
    } else {
        responseList.innerHTML = "Noch keine Auswahl getroffen.";
    }
}

// Display results when the page loads
window.onload = showResults;

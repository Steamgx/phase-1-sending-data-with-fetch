function submitData(name, email) {
    // Create the data object to send
    const data = {
        name: name,
        email: email,
    };

    // Make a POST request using fetch
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        // Append the new id to the DOM
        const body = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${data.id}`;
        body.appendChild(idElement);
        return data; // Return the parsed data for further use
    })
    .catch(error => {
        // Handle errors and append the error message to the DOM
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
    });
}

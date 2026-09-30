// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to Green Valley Farmhouse!");
    updateDateTime();
    setInterval(updateDateTime, 1000);
};

// Book Now button
function showMessage() {
    let name = prompt("Enter your name:");

    if (name !== null && name !== "") {
        alert(
            "Thank you, " +
            name +
            "! Your farmhouse booking request has been received."
        );
    } else {
        alert("Please enter your name to continue.");
    }
}

// Display current date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");

    if (dateTimeElement) {
        const now = new Date();

        dateTimeElement.innerHTML =
            "Current Date & Time: " +
            now.toLocaleDateString() +
            " " +
            now.toLocaleTimeString();
    }
}

// Contact form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Show farmhouse information
function showFarmInfo() {
    alert(
        "Green Valley Farmhouse offers luxury rooms, organic food, and outdoor activities."
    );
}

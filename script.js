// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function() {

    // Find the button element by its ID
    const surpriseButton = document.getElementById('specialButton');

    // Check if the button was actually found
    if (surpriseButton) {
        // Add an event listener that waits for a 'click' event
        surpriseButton.addEventListener('click', function() {
            // When the button is clicked, show an alert message
            alert('Yay! You love ice cream! 🍦');
        });
    } else {
        // Log an error to the console if the button wasn't found (for debugging)
        console.error("Button with ID 'specialButton' not found!");
    }

    // Background image upload functionality
    const bgUploadInput = document.getElementById('bgUpload');
    if (bgUploadInput) {
        bgUploadInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (event) {
                document.body.style.backgroundImage = `url(${event.target.result})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundPosition = 'center center';
            };
            reader.readAsDataURL(file);
        });
    }

});

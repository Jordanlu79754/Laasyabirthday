window.onload = function () {
    const present = document.getElementById('present');

    // Change the image and redirect on click
    present.addEventListener('click', () => {
        present.src = 'opened-present.png'; // Replace with the open present image
        setTimeout(() => {
            window.location.href = 'present.html'; // Redirect to the main page
        }, 1000); // Wait 1 second before redirecting
    });
};

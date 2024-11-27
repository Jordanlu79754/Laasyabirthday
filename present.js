window.onload = function () {
    // Handle audio playback and mute functionality
    const audio = document.getElementById('birthday-song');
    const muteButton = document.getElementById('mute-button');

    // Set the audio volume to 50%
    audio.volume = 0.5;

    // Attempt to autoplay the audio
    audio.play().then(() => {
        audio.muted = false; // Ensure unmuted
    }).catch(error => {
        console.log('Autoplay prevented:', error);
        muteButton.style.display = 'block'; // Show mute button if autoplay fails
    });

    // Toggle mute/unmute when the button is clicked
    muteButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            muteButton.textContent = '🔈 Mute'; // Update button text
        } else {
            audio.muted = true;
            muteButton.textContent = '🔇 Unmute'; // Update button text
        }
    });

    // Handle confetti animation
    const confettiContainer = document.getElementById('confetti-container');
    const confettiColors = ['#ff6b6b', '#6bffb5', '#ffcd6b', '#6b9bff', '#cd6bff'];

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s random duration
        confettiContainer.appendChild(confetti);

        // Remove the confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Generate confetti at regular intervals
    setInterval(createConfetti, 300); // Adjust frequency as needed
};

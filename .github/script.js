function startConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#ff6f61', '#6b5b93', '#88b04b', '#f7cac9', '#92a8d1'];
    const confettiSound = document.getElementById('confetti-sound');

    // Tăng số lượng mảnh giấy được tạo ra
    for (let i = 0; i < 200; i++) { // Tăng từ 100 lên 200
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiPiece.style.opacity = Math.random();
        confettiContainer.appendChild(confettiPiece);
    }

    // Phát âm thanh pháo giấy
    confettiSound.play();

    // Hiển thị thông điệp sau khi tạo confetti
    setTimeout(() => {
        displayMessage();
    }, 5); // Hiển thị sau 5 giây
}

// Function to display the final message after confetti
function displayMessage() {
    const finalMessage = document.getElementById('final-message');
    finalMessage.classList.remove('hidden');
}

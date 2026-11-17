
function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    // Membuat confetti
    const confetti = document.getElementById("confetti");

    const emojis = ["💗", "🎀", "✨", "🌸", "💕", "🎉"];

    for (let i = 0; i < 60; i++) {

        let piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDelay = Math.random() * 2 + "s";

        piece.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        confetti.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);

    }

}

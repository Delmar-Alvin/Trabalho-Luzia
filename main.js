document.querySelector('.thank-you').addEventListener('mouseover', function() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
});

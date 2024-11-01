// Seleciona a seção "Alunos" e adiciona um evento de mouseover para disparar o confete
document.querySelector('#alunos').addEventListener('mouseover', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

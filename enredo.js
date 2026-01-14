// Controle do Vídeo
const video = document.getElementById("meuTrailer");
fetch('enredo.xml')

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

// Efeito de Interatividade: Mudar o fundo ao passar o rato na descrição
const descricao = document.querySelector('.descricao');

descricao.addEventListener('mouseover', () => {
    descricao.style.color = '#f1c40f'; // Destaque em dourado
    descricao.style.transition = '0.5s';
});

descricao.addEventListener('mouseout', () => {
    descricao.style.color = 'white';
});

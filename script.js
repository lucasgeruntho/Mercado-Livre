const images = ['imagem1.png', 'imagem2.png', 'imagem3.png'];
let currentIndex = 0;
let intervalId; // Para armazenar o ID do intervalo

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('banner-image').src = images[currentIndex];
}

function startAutoChange() {
    intervalId = setInterval(() => {
        changeImage(1);
    }, 5000); // Trocar a cada 5 segundos
}

function stopAutoChange() {
    clearInterval(intervalId);
}

// Load initial image
document.getElementById('banner-image').src = images[currentIndex];

startAutoChange(); // Iniciar automaticamente a troca de imagens


function addElevation() {
    document.querySelector('Coluna-1').style.transform = 'translateZ(10px)';
    document.querySelector('.Coluna-1').style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  }

  function removeElevation() {
    document.querySelector('.Coluna-2').style.transform = 'translateZ(0)';
    document.querySelector('Coluna-2').style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.3)';
  }

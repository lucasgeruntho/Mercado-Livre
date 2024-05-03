const mainPhoto = document.getElementById("mainPhoto");
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");

photo1.addEventListener("mouseover", () => changeMainPhoto(photo1.src));
photo2.addEventListener("mouseover", () => changeMainPhoto(photo2.src));
photo3.addEventListener("mouseover", () => changeMainPhoto(photo3.src));
photo4.addEventListener("mouseover", () => changeMainPhoto(photo4.src));

function changeMainPhoto(src) {
    mainPhoto.src = src;
}



 // Adicione o comportamento de clique usando JavaScript
 document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    document.getElementById('myDropdown').classList.toggle('show');
  });

  // Feche o menu suspenso se o usuário clicar fora dele
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });




  document.addEventListener('DOMContentLoaded', function() {
    const textoComOpcoes = document.querySelector('.texto-com-opcoes');
  
    textoComOpcoes.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });
  
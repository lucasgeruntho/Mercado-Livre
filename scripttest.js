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

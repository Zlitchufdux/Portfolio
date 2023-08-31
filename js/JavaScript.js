// Get the gallery box
let imageBox1 = document.getElementById("imageBox1");

// Get the modal image tag
let modal = document.getElementById("myModal");

let modalImage = document.getElementById("modal-image");

// When the user clicks the big picture, set the image and open the modal
imageBox1.onclick = function (e) {
  let src = e.srcElement.src;
  modal.style.display = "block";
  modalImage.src = src;
};

let currentImageIndex = 0;
const images = [`Barista-img1.jpg`, `services-img2.jpg`];
const imageElement = document.getElementById('image');

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.classList.remove('fade-in-right'); // Remove the class to reset animation
    void imageElement.offsetWidth; // Trigger reflow to restart the animation
    imageElement.classList.add('fade-in-right'); // Add the class to start the animation
    imageElement.src = images[currentImageIndex];
}

// doan 2

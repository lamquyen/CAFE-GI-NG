
document.addEventListener('DOMContentLoaded', () => {
    const image = ['giong.jpg', 'branch.png']; // Add the paths to your images here
    let currentImagesIndex = 0;
    const imagesElement = document.getElementById('image-branch');

    setInterval(() => {
        // Fade out the current image
        imagesElement.style.opacity = 0;

        // After fade-out transition is complete, change the image source and fade in
        setTimeout(() => {
            currentImagesIndex = (currentImagesIndex + 1) % image.length;
            imagesElement.src = image[currentImagesIndex];

            // Fade in the new image
            imagesElement.style.opacity = 1;
        }, 1000); // Match this duration to the CSS transition duration
    }, 5000); // Change image every 5 seconds
});

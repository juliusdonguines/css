document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.slider .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    const totalItems = items.length;

    // Function to show the current slide
    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            thumbnails[i].classList.remove('active');
        });
        items[index].classList.add('active');
        thumbnails[index].classList.add('active');
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    // Move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Add event listeners for navigation buttons
    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // Add click event for thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Initialize the first slide
    showSlide(currentIndex);
});

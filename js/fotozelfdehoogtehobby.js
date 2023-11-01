document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll('.carousel-item');

 
    var desiredHeight = 0.6 * window.innerHeight;


    carouselItems.forEach(function(item) {
        var image = item.querySelector('img');
        image.style.height = desiredHeight + 'px';
        image.style.objectFit = 'cover';
        image.style.objectPosition = 'top';
        image.style.width = '100%';
    });
});

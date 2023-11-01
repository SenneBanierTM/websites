window.onload = function() {
    var images = document.querySelectorAll(".carousel-item img");
    images.forEach(function(image) {
        image.onload = function() {
            var parentHeight = image.parentElement.clientHeight;
            image.style.height = parentHeight + "px";
        };
    });
};
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star-rating');

    stars.forEach(star => {
        star.addEventListener('click', function (e) {
            const rating = e.target.dataset.rating || e.target.parentNode.dataset.rating;
            resetStars(star);
            star.dataset.rating = rating;
        });

        star.addEventListener('mouseover', function (e) {
            const hoverRating = e.target.dataset.rating || e.target.parentNode.dataset.rating;
            resetStars(star);
            setHoverStars(star, hoverRating);
        });

        star.addEventListener('mouseout', function () {
            const rating = star.dataset.rating;
            resetStars(star);
            setHoverStars(star, rating);
        });
    });

    function resetStars(starContainer) {
        starContainer.querySelectorAll('.star-rating').forEach(star => {
            star.style.color = '#ddd';
        });
    }

    function setHoverStars(starContainer, hoverRating) {
        starContainer.querySelectorAll('.star-rating').forEach(star => {
            if (star.dataset.rating <= hoverRating) {
                star.style.color = '#ffcc29';
            }
        });
    }
});

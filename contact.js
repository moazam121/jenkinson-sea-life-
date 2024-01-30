let selectedRating = 0;
            
                function setRating(rating) {
                    selectedRating = rating;
                    updateRatingDisplay();
                }
            
                function updateRatingDisplay() {
                    const selectedRatingElement = document.getElementById('selected-rating');
                    selectedRatingElement.textContent = selectedRating;
                    animateStars();
                }
            
                function animateStars() {
                    const stars = document.querySelectorAll('.rating-stars');
                    stars.forEach((star, index) => {
                        if (index < selectedRating) {
                            star.classList.add('rated-stars');
                        } else {
                            star.classList.remove('rated-stars');
                        }
                    });
                }
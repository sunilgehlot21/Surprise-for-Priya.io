function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}





// Function to dynamically handle the "See More" button
// Function to dynamically handle the "See More" button
// Show More function
function showMore() {
    const gallery = document.querySelector('.gallery-grid');
    const hiddenCards = gallery.querySelectorAll('.card.hidden');
    hiddenCards.forEach((card, index) => {
        if (index < 2) card.classList.remove('hidden');
    });

    // Toggle buttons visibility
    const remainingHidden = gallery.querySelectorAll('.card.hidden').length;
    if (remainingHidden === 0) {
        document.querySelector('.see-more').style.display = 'none';
        document.querySelector('.see-less').style.display = 'inline-block';
    }
}

// Show Less function
// Show More function
function showMore() {
    const gallery = document.querySelector('.gallery-grid');
    const hiddenCards = gallery.querySelectorAll('.card.hidden');
    hiddenCards.forEach((card, index) => {
        if (index < 2) card.classList.remove('hidden'); // Show two more cards
    });

    // Toggle buttons visibility
    const remainingHidden = gallery.querySelectorAll('.card.hidden').length;
    if (remainingHidden === 0) {
        document.querySelector('.see-more').style.display = 'none';
        document.querySelector('.see-less').style.display = 'inline-block';
    }
}

// Show Less function
function showLess() {
    const gallery = document.querySelector('.gallery-grid');
    const cards = gallery.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index >= 3) card.classList.add('hidden'); // Hide all except first three
    });

    // Toggle buttons visibility
    document.querySelector('.see-more').style.display = 'inline-block';
    document.querySelector('.see-less').style.display = 'none';
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.gallery-grid .card');
    const seeMoreButton = document.querySelector('.see-more');
    const seeLessButton = document.querySelector('.see-less');

    if (cards.length > 3) {
        seeMoreButton.style.display = 'block';
        cards.forEach((card, index) => {
            if (index >= 3) card.classList.add('hidden'); // Hide all except first three
        });
    } else {
        seeMoreButton.style.display = 'none';
        seeLessButton.style.display = 'none';
    }
});






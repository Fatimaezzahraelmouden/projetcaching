// Navigation and general scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Financial website loaded');
    
    // Gallery Filter
    initGalleryFilter();
});

// Gallery Filter Function
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Search functionality
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        alert('Fonctionnalité de recherche à implémenter');
    });
}

// Video placeholder click handler
const videoPlaceholders = document.querySelectorAll('.video-placeholder');
videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        alert('Lecteur vidéo à implémenter');
    });
});

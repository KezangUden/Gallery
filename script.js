// Get all filter buttons and gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the selected filter
        const filterValue = button.getAttribute('data-filter');
        
        // Filter gallery items
        filterGallery(filterValue);
    });
});

// Filter gallery items based on category
function filterGallery(category) {
    galleryItems.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hidden');
            item.style.animation = 'fadeIn 0.5s ease';
        } else if (item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.classList.add('hidden');
        }
    });
}

// Modal functionality - open modal when clicking on gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.overlay');
        const title = overlay.querySelector('h3').textContent;
        const category = overlay.querySelector('p').textContent;
        
        modal.style.display = 'block';
        modalImage.src = img.src;
        modalCaption.textContent = `${title} - ${category}`;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Add fade-in animation to the CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

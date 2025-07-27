document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create gallery array for navigation
    const galleryData = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img.src,
            alt: img.alt
        };
    });
    
    let currentModal = null;
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openModal(index);
        });
    });
    
    function openModal(imageIndex) {
        const imgData = galleryData[imageIndex];
        
        if (currentModal) {
            currentModal.remove();
        }
            
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="close-modal">&times;</span>
            <span class="nav-arrow nav-prev" data-direction="prev">‹</span>
            <span class="nav-arrow nav-next" data-direction="next">›</span>
            <div class="modal-content">
                <div class="image-wrapper">
                    <img src="${imgData.src}" alt="${imgData.alt}" class="modal-image">
                </div>
            </div>
        `;
            
        document.body.appendChild(modal);
        currentModal = modal;
        
        const modalImage = modal.querySelector('.modal-image');
        const navPrev = modal.querySelector('.nav-prev');
        const navNext = modal.querySelector('.nav-next');
        let isZoomed = false;
        let currentImageIndex = imageIndex;
        
        function updateImage(newIndex) {
            const newImgData = galleryData[newIndex];
            modalImage.src = newImgData.src;
            modalImage.alt = newImgData.alt;
            currentImageIndex = newIndex;
            
            // Reset zoom state when changing images
            if (isZoomed) {
                isZoomed = false;
                modalImage.style.width = 'auto';
                modalImage.style.height = 'auto';
                modalImage.style.maxWidth = '100%';
                modalImage.style.maxHeight = '90vh';
                modalImage.style.cursor = 'zoom-in';
                modal.style.overflow = 'hidden';
            }
        }
        
        function navigateImage(direction) {
            let newIndex;
            if (direction === 'next') {
                newIndex = (currentImageIndex + 1) % galleryData.length;
            } else {
                newIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
            }
            updateImage(newIndex);
        }
        
        // Navigation arrow event listeners
        navPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateImage('prev');
        });
        
        navNext.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateImage('next');
        });
        
        // Zoom functionality
        modalImage.addEventListener('click', function(e) {
            e.stopPropagation();
            isZoomed = !isZoomed;
            
            if (isZoomed) {
                modalImage.style.width = 'auto';
                modalImage.style.height = 'auto';
                modalImage.style.maxWidth = 'none';
                modalImage.style.maxHeight = 'none';
                modalImage.style.cursor = 'zoom-out';
                modal.style.overflow = 'auto';
            } else {
                modalImage.style.width = 'auto';
                modalImage.style.height = 'auto';
                modalImage.style.maxWidth = '100%';
                modalImage.style.maxHeight = '90vh';
                modalImage.style.cursor = 'zoom-in';
                modal.style.overflow = 'hidden';
            }
        });
        
        // Keyboard navigation
        function handleKeyPress(e) {
            if (!currentModal) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    navigateImage('next');
                    break;
                case 'Escape':
                    e.preventDefault();
                    modal.remove();
                    currentModal = null;
                    document.removeEventListener('keydown', handleKeyPress);
                    break;
            }
        }
        
        document.addEventListener('keydown', handleKeyPress);
        
        // Close modal functionality
        modal.addEventListener('click', function(e) {
            // Check if we clicked on an interactive element or its children
            const clickedImage = e.target.classList.contains('modal-image');
            const clickedArrow = e.target.classList.contains('nav-arrow');
            const clickedClose = e.target.classList.contains('close-modal');
            
            // If we clicked the close button, always close
            if (clickedClose) {
                modal.remove();
                currentModal = null;
                document.removeEventListener('keydown', handleKeyPress);
                return;
            }
            
            // If we didn't click on the image or arrows, close the modal
            if (!clickedImage && !clickedArrow) {
                modal.remove();
                currentModal = null;
                document.removeEventListener('keydown', handleKeyPress);
            }
        });
    }
    
    const marqueeContent = document.querySelector('.marquee-content');
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentNode.appendChild(clone);
    
    const emailElement = document.querySelector('.protected-email');
    if (emailElement) {
        emailElement.addEventListener('click', function(e) {
            e.preventDefault();
            const encoded = this.getAttribute('data-email');
            const email = atob(encoded);
            window.location.href = 'mailto:' + email;
        });
    }
});
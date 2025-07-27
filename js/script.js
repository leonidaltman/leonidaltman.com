document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal || e.target.className === 'close-modal') {
                    modal.remove();
                }
            });
        });
    });
    
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
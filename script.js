document.addEventListener("DOMContentLoaded", () => {
    // Set Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    const gallery = document.getElementById("galleryContainer");
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelectorAll('.nav-item');

    // --- Image Data (Total 10 images with Orientation) ---
    // NOTE: मैंने यह ओरिएंटेशन (portrait/landscape) अंदाज़े से दी है, आप इसे अपनी इमेजेज के हिसाब से बदल सकते हैं।
    const imageCatalog = [
        { src: 'IMG_8334 copy.jpg', orientation: 'landscape' },
        { src: 'IMG_8410 copy.jpg', orientation: 'portrait' }, 
        { src: 'IMG_8411 copy.jpg', orientation: 'landscape' },
        { src: 'IMG_8419 copy.jpg', orientation: 'portrait' }, 
        { src: 'IMG_8423 copy.jpg', orientation: 'landscape' },
        { src: 'IMG_8665 copy.jpg', orientation: 'portrait' }, 
        { src: 'IMG_9258 copy.jpg', orientation: 'landscape' },
        { src: 'IMG_9264 copy.jpg', orientation: 'portrait' }, 
        { src: 'IMG_9313 copy.jpg', orientation: 'landscape' },
        { src: 'IMG_9331', orientation: 'portrait' } 
    ];
    
    // --- Core Functions ---
    function addPhoto(src, orientation) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Portfolio image: ${orientation}`;
        
        const link = document.createElement("a");
        link.href = src; 
        link.target = "_blank";
        link.classList.add('gallery-item');
        link.classList.add(orientation); 
        
        link.appendChild(img);
        gallery.appendChild(link);
    }
    
    function loadGallery() {
        gallery.innerHTML = ''; 
        imageCatalog.forEach(img => addPhoto(img.src, img.orientation));
    }
    
    // --- Event Listeners and Initial Load ---
    
    // 1. Mobile Menu Toggle (Unchanged)
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // 2. Active Navigation Link Scroll Logic (UPDATED to include #packages)
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            // Check if the link's data-section matches the current visible section ID
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    });

    // Load all images when the page starts
    loadGallery();
});
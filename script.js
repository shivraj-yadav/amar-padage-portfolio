function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const menuIcon = document.getElementById('menuIcon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn'); // <- Added line

    let isMenuOpen = false;

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileNav.classList.add('active');
            mobileOverlay.classList.add('active');
            menuIcon.className = 'fas fa-times';
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.classList.remove('active');
            mobileOverlay.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            document.body.style.overflow = 'auto';
        }
    }

    function closeMobileMenu() {
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu); // <- Added line

    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMobileMenu();
        }
    });
}

        // Resume Download - Modified to work with your PDF
        function initResumeDownload() {
            const downloadBtns = [
                document.getElementById('downloadResume'),
                document.getElementById('mobileDownloadResume')
            ];
            
            function downloadResume(e) {
                e.preventDefault();
                
                // Try to download your PDF file
                // Replace 'resume.pdf' with the actual path to your PDF file
                const link = document.createElement('a');
                link.href = 'resume.pdf'; // This should be the path to your PDF file
                link.download = 'Chef_Amar_Padge_Resume.pdf';
                link.target = '_blank';
                
                // Fallback: if PDF doesn't exist, show message
                link.onerror = function() {
                    alert('Please add your resume.pdf file to the same directory as this HTML file.');
                };
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            
            downloadBtns.forEach(btn => {
                if (btn) {
                    btn.addEventListener('click', downloadResume);
                }
            });
        }

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-fade-up, .animate-scale-in, .animate-slide-left, .animate-slide-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                }
            });
        }

        // Hero text animation
        function animateHeroText() {
            const heroTexts = document.querySelectorAll('.hero-text');
            heroTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.classList.add('visible');
                }, index * 200);
            });
        }

        // Dish filtering
        function initDishFilter() {
            const filterTabs = document.querySelectorAll('.filter-tab');
            const dishCards = document.querySelectorAll('.dish-card');

            filterTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    filterTabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    tab.classList.add('active');

                    const filter = tab.getAttribute('data-filter');

                    dishCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.9)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }

        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Initialize all functions
        document.addEventListener('DOMContentLoaded', () => {
            initMobileMenu();
            initResumeDownload();
            animateHeroText();
            initDishFilter();
            initSmoothScrolling();
            
            // Show initial dish cards
            const dishCards = document.querySelectorAll('.dish-card');
            dishCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 100);
            });

            // Show initial testimonial cards
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 200 + 500);
            });

            // Show initial gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 100 + 800);
            });
        });

        // Scroll event listener
        window.addEventListener('scroll', animateOnScroll);
        
        // Initial call
        animateOnScroll();
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-fade-up, .animate-scale-in, .animate-slide-left, .animate-slide-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                }
            });
        }

        // Hero text animation
        function animateHeroText() {
            const heroTexts = document.querySelectorAll('.hero-text');
            heroTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.classList.add('visible');
                }, index * 200);
            });
        }

        // Dish filtering
        function initDishFilter() {
            const filterTabs = document.querySelectorAll('.filter-tab');
            const dishCards = document.querySelectorAll('.dish-card');

            filterTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    filterTabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    tab.classList.add('active');

                    const filter = tab.getAttribute('data-filter');

                    dishCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.9)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }

        
        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Initialize all functions
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            initMobileMenu();
            initResumeDownload();
            animateHeroText();
            initDishFilter();
            initSmoothScrolling();
            initAIAssistant();
            
            // Show initial dish cards
            const dishCards = document.querySelectorAll('.dish-card');
            dishCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 100);
            });

            // Show initial testimonial cards
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 200 + 500);
            });

            // Show initial gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 100 + 800);
            });
        });

        // Scroll event listener
        window.addEventListener('scroll', animateOnScroll);
        
        // Initial call
        animateOnScroll();
      // scroll-animations.js
      class NavbarScroll {
        constructor() {
          this.nav = document.querySelector('.nav');
          this.scrollThreshold = 50;
          this.ticking = false;

          this.init();
        }

        init() {
          window.addEventListener('scroll', () => this.requestTick());
          this.handleScroll(); // Initial check
        }

        requestTick() {
          if (!this.ticking) {
            requestAnimationFrame(() => this.handleScroll());
            this.ticking = true;
          }
        }

        handleScroll() {
          const scrollY = window.scrollY;

          if (scrollY <= this.scrollThreshold) {
            this.nav.classList.add('transparent');
            this.nav.classList.remove('scrolled');
          } else {
            this.nav.classList.remove('transparent');
            this.nav.classList.add('scrolled');
          }

          this.ticking = false;
        }
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        new NavbarScroll();
      });
      class ScrollAnimations {
        constructor() {
          this.observer = null;
          this.init();
        }

        init() {
          this.createObserver();
          this.registerAnimationElements();
        }

        createObserver() {
          this.observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  this.animateElement(entry.target);
                }
              });
            },
            {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px',
            }
          );
        }

        registerAnimationElements() {
          const animatedElements = document.querySelectorAll(
            '.from-left, .from-right, .up'
          );

          animatedElements.forEach((element) => {
            this.observer.observe(element);
          });
        }

        animateElement(element) {
          const delay = this.getAnimationDelay(element);

          setTimeout(() => {
            element.classList.add('appear');
            this.observer.unobserve(element);
          }, delay);
        }

        getAnimationDelay(element) {
          const delayClasses = [
            'delay-1',
            'delay-2',
            'delay-3',
            'delay-4',
            'delay-5',
            'delay-6',
            'delay-7',
            'delay-8',
            'delay-9',
          ];

          for (let delayClass of delayClasses) {
            if (element.classList.contains(delayClass)) {
              return parseInt(delayClass.split('-')[1]) * 100;
            }
          }

          return 0;
        }
      }

      // Initialize when DOM is loaded
      document.addEventListener('DOMContentLoaded', function () {
        new ScrollAnimations();
      });
      //hamburguer menu
      document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-link');
        const nav = document.querySelector('.nav');

        // Toggle mobile menu
        hamburger.addEventListener('click', function () {
          hamburger.classList.toggle('active');
          navLinks.classList.toggle('active');
          nav.classList.toggle('menu-open');

          // Prevent body scrolling when menu is open
          if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        });

        // Close menu when clicking on a link
        navLinksItems.forEach((link) => {
          link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
          const isClickInsideNav = event.target.closest('.nav');

          if (!isClickInsideNav && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        });

        // Close menu on window resize if it goes above 1000px
        window.addEventListener('resize', function () {
          if (window.innerWidth > 1000) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        });

        // Optional: Close menu with Escape key
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        });
      });
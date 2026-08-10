document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const slides = document.querySelectorAll(".slide");

  // Simple Entrance Header Animation
  gsap.from('.logo', {
    y: -30,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.2
  });

  // Intro Section Animations
  gsap.from('.intro__title', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.4
  });

  gsap.from('.intro__txt', {
    y: 30,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.6
  });

  // Slide content reveal animations on scroll
  slides.forEach((slide) => {
    const title = slide.querySelector('.col__content-title');
    const txt = slide.querySelector('.col__content-txt');
    
    if (title && txt) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: slide,
          start: "top 75%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(txt, {
        scrollTrigger: {
          trigger: slide,
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });
    }
  });

  // Parallax effect on image containers
  slides.forEach((slide) => {
    const imageWrapper = slide.querySelector('.col__image-wrap');
    if (imageWrapper) {
      gsap.fromTo(imageWrapper, 
        { y: -40 },
        {
          y: 40,
          scrollTrigger: {
            trigger: slide,
            scrub: true,
            start: "top bottom",
            end: "bottom top"
          },
          ease: "none"
        }
      );
    }
  });

  // Top footer smooth scroll link
  const topLink = document.querySelector('.footer__link-top');
  if (topLink) {
    topLink.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: "#slide-0" },
        ease: "power2.inOut"
      });
    });
  }
});

if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((element) => {
    const delay = Number(element.dataset.delay || 0);

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true
      }
    });
  });

  if (document.querySelector(".aurora-one")) {
    gsap.to(".aurora-one", {
      y: -24,
      x: 18,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".aurora-two")) {
    gsap.to(".aurora-two", {
      y: 18,
      x: -22,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".aurora-three")) {
    gsap.to(".aurora-three", {
      y: -16,
      x: 24,
      duration: 16,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".hero") && document.querySelector(".hero-copy")) {
    gsap.to(".hero-copy", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.1
      }
    });
  }
}

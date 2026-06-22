if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
  document.body.classList.add("js-enabled");
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((element) => {
    const delay = Number(element.dataset.delay || 0);

    gsap.fromTo(
      element,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true
        }
      }
    );
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    initScroll();
    ScrollTrigger.refresh();
  }, 2200);
});

// Project Card Stacked Scroll
function initScroll() {
  const wrapper = document.querySelector(".wrapper");
  const card = document.querySelectorAll(".card");

  card.forEach((el, i) => {
    gsap.set(el, { y: 0 });
    if (i !== 0) {
      gsap.set(el, { yPercent: 100 });
    }
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      start: "top 300px",
      end: () => `+=${card.length * 100}%`,
      pinSpacing: false,
      scrub: 1,
    },
    defaults: { ease: "none" },
  });

  card.forEach((_, i) => {
    timeline.to(card[i], { y: -220 });
    if (i < card.length - 1) {
      timeline.to(card[i + 1], { yPercent: 0 });
    }
  });

  // Project Horizontal Scroll
  const wrapperHorizontal = document.querySelector(".wrapper-horizontal");
  const scrollHorizontal = document.querySelector(".scroll-horizontal");
  const cardHorizontal = document.querySelectorAll(".card-horizontal");

  gsap.set(scrollHorizontal, { xPercent: 0 });

  const timelineHorizontal = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperHorizontal,
      pin: true,
      start: "top top",
      end: () =>
        `+=${cardHorizontal.length * wrapperHorizontal.offsetHeight}px`,
      pinSpacing: false,
      scrub: 1,
    },
    defaults: { ease: "none" },
  });

  timelineHorizontal.to(scrollHorizontal, {
    xPercent: -100 * (cardHorizontal.length - 1),
  });
}

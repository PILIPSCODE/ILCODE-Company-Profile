const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  initScroll();
});

function initScroll() {
  const wrapper = document.querySelector(".wrapper");
  const card = document.querySelectorAll(".card");

  // 1. Set initial positions (below the first card)
  card.forEach((el, i) => {
    if (i !== 0) {
      gsap.set(el, { yPercent: 150 });
    }
  });

  // 2. Create timeline AFTER setting yPercent
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      start: "top 150px", // your custom offset
      end: () => `+=${card.length * 100}%`,
      scrub: 1,
    },
    defaults: { ease: "none" },
  });

  card.forEach((_, i) => {
    if (i < card.length - 1) {
      timeline.to(card[i], { y: -30 });
    }
  });
  card.forEach((_, i) => {
    if (i < card.length - 1) {
      timeline.to(card[i + 1], { yPercent: 0 });
    }
  });
}

ScrollTrigger.refresh();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

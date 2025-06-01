const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  initScroll();

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 2200);
});

function initScroll() {
  const wrapper = document.querySelector(".wrapper");
  const card = document.querySelectorAll(".card");

  card.forEach((el, i) => {
    if (i !== 0) {
      gsap.set(el, { yPercent: 150 });
    }
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      start: "top 100px",
      end: () => `+=${card.length * 100}%`,
      scrub: 1,
    },
    defaults: { ease: "none" },
  });
  card.forEach((_, i) => {
    if (i < card.length - 1) {
      timeline.to(card[i + 1], { yPercent: 0 });
    }
  });
}

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

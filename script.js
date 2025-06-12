const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

/*hero aniamtion section*/

// Split text animation per block
const SpliteChar = (arrText) => {
  let mergedSpan = "";
  arrText.forEach((e) => {
    const span = document.createElement("span");
    span.innerHTML = e === " " ? "&nbsp;" : e;
    span.classList.add("split-animation");
    mergedSpan += span.outerHTML;
  });
  return mergedSpan;
};

const textBlocks = document.querySelectorAll(".split-text");

textBlocks.forEach((el) => {
  const arrText = el.textContent.trim().replace(/\s+/g, " ").split("");
  el.innerHTML = SpliteChar(arrText);

  const chars = el.querySelectorAll(".split-animation");

  const totalDuration = 2;
  const perCharStagger = totalDuration / chars.length;

  gsap.set(chars, { y: 200, filter: "blur(10px)", opacity: 0 });

  gsap.to(chars, {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power3.out",
    duration: 0.1,
    stagger: perCharStagger,
    delay: 2.3,
  });
});

// Fade up
const timelineFadeUp = gsap.timeline();

gsap.fromTo(".fade-up", { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 4 });

/*end hero animation section*/
/*scroll Trigger animation section*/

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  setTimeout(() => {
    initScroll();
    setupFadeUpScroll();
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
      scrub: 1,
    },
    defaults: { ease: "none" },
  });

  timelineHorizontal.to(scrollHorizontal, {
    xPercent: -100 * (cardHorizontal.length - 1),
  });
}

function setupFadeUpScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const elFadeUp = document.querySelectorAll(".fade-up-scroll");

  elFadeUp.forEach((el, index) => {
    const span = document.createElement("span");
    span.innerHTML = el.innerHTML;

    el.innerHTML = "";
    el.appendChild(span);

    gsap.set(span, { bottom: -200 });

    gsap.to(span, {
      bottom: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "-20% bottom",
        end: "bottom 80%",
        scrub: true,
        id: `fadeUp-${index}`,
      },
    });
  });

  // Refresh ScrollTrigger to catch newly added elements
  ScrollTrigger.refresh();
}

// // Split Text
// const elSplitText = document.querySelectorAll(".split-text-scroll");

// elSplitText.forEach((el) => {
//   const span = document.createElement("span");
//   span.textContent = el.textContent;

//   el.innerHTML = "";
//   el.appendChild(span);

//   gsap.set(span, { bottom: -200 });

//   const timelineFadeUpScroll = gsap.timeline({
//     scrollTrigger: {
//       trigger: el,
//       start: "top bottom",
//       end: "bottom 80%",
//       scrub: true,
//     },
//     defaults: { ease: "none" },
//   });

//   timelineFadeUpScroll.to(span, { bottom: 0, duration: 0.5 });
// });

/*End scroll Trigger animation section*/
// Lenis Smooth Scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

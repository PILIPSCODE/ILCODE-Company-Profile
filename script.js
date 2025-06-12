const lenis = new Lenis();

lenis.on("scroll", (e) => {});

/*hero aniamtion section*/

// Split text animation per block
const SpliteChar = (arrText) => {
  const words = arrText.join("").split(" ");
  let result = "";

  words.forEach((word, index) => {
    let chars = "";
    word.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("split-animation");
      chars += span.outerHTML;
    });

    // Wrap each word
    result += `<span class="word">${chars}</span>`;

    // Add space after word, except the last one
    if (index !== words.length - 1) {
      result += `<span class="space">&nbsp;</span>`;
    }
  });

  return result;
};

const textBlocks = document.querySelectorAll(".split-text");

textBlocks.forEach((el) => {
  console.log(el);
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
gsap.fromTo(".fade-up", { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 4 });

/*end hero animation section*/
/*scroll Trigger animation section*/

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  setTimeout(() => {
    setupFadeUpScroll();
    ScrollTrigger.refresh();
  }, 2200);
});

function setupFadeUpScroll() {
  const elFadeUp = document.querySelectorAll(".fade-up-scroll");

  elFadeUp.forEach((el, index) => {
    const span = document.createElement("span");
    span.innerHTML = el.innerHTML;

    el.innerHTML = "";
    el.appendChild(span);

    gsap.set(span, { bottom: -200 });

    gsap.to(span, {
      bottom: 0,
      duration: 10,
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        id: `fadeUp-${index}`,
      },
    });
  });

  ScrollTrigger.refresh();
}

// Split Text
const elSplitText = document.querySelectorAll(".split-text-scroll");

elSplitText.forEach((el, index) => {
  console.log(el);

  const arrText = el.textContent.trim().replace(/\s+/g, " ").split("");
  el.innerHTML = SpliteChar(arrText);

  const chars = el.querySelectorAll(".split-animation");

  gsap.set(chars, { filter: "blur(5px)", y: 200 });

  const timelineSplitTextScroll = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "bottom center",
      scrub: 4,
      id: `split-text-${index}`,
    },
    defaults: { ease: "none" },
  });

  timelineSplitTextScroll.to(chars, {
    filter: "blur(0px)",
    ease: "power3.out",
    y: 0,
    duration: 2,
    stagger: 9,
  });
});

const elFadeUpel = document.querySelectorAll(".fade-up-scroll-el");

elFadeUpel.forEach((el, index) => {
  gsap.set(el, { opacity: 0, y: 200 });

  const timelineFadeupelScroll = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom center",
      scrub: true,
      id: `fadeUp-${index}`,
    },
    defaults: { ease: "none" },
  });

  timelineFadeupelScroll.to(el, {
    opacity: 1,
    ease: "power3.out",
    y: 0,
    duration: 2,
  });
});

/*End scroll Trigger animation section*/
// Lenis Smooth Scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

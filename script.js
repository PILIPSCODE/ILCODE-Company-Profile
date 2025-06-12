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
      gsap.set(el, { yPercent: 300 });
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

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// form

function validate (inputElement, errorElement){
  if (inputElement.value.trim() === ""){
    inputElement.classList.add("error");
    errorElement.textContent = "ndak boleh kosong"
    return false;
  } else {
    inputElement.classList.remove("error");
    errorElement.textContent = ""
    return true;
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", function(e){
  e.preventDefault();

  const namaInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const errorName = document.getElementById("errorName")
  const errorEmail = document.getElementById("errorEmail")

  const namaValid = validate(namaInput, errorName);
  const emailValid = validate(emailInput, errorEmail);

  if(namaValid && emailValid){
    form.submit()
  }
})
